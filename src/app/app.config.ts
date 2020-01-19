import { throwError as observableThrowError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { retry } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class App {
  private config: any = {};
  constructor( private http: HttpClient) {

  }

  public getConfig() {
    return this.config;
  }

  public getPath() {
    return "assets/config/config.json";
  }

  public load() {
    return new Promise((resolve, reject) => {
      this.http
        .get(this.getPath())
        .pipe(
          retry(5),
          map(res => res),
          catchError(
            (error: any): any => {
              resolve(true);
              return observableThrowError(error.json().error || "Server error");
            }
          )
        )
        .subscribe(responseData => {
          this.config = responseData;
          resolve(true);
        });
    });
  }

}
