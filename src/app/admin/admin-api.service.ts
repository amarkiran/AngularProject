import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {App} from "../app.config";
@Injectable({
  providedIn: 'root'
})

export class AdminApiService {
  public _config: any;
  endpoint: string = '';

  constructor(public httpService: HttpClient, private appConfig: App) {
    let config = this.appConfig.getConfig();
    this.endpoint = config.nodeConfig.baseurl;
  }

  public getAPIData(apiName): any {
    const headers = this.getHttpHeaders();
    if (headers != null) {
      const url = this.endpoint + apiName;
      return this.httpService.get<any>(url, { headers: headers });
    }
  }

  public getHttpHeaders() {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', '*');
    headers.append('Content-Type', 'application/json');
    return headers;

  }

  public getHttpParams() {
    const httpParams = new HttpParams();
    return httpParams;
  }
}
