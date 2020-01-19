import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {Subscription} from "rxjs";
import {AdminApiService} from "../../admin-api.service";

@Component({
  selector: 'app-usersbasic-info',
  templateUrl: './usersbasic-info.component.html',
  styleUrls: ['./usersbasic-info.component.scss']
})
export class UsersbasicInfoComponent implements OnInit {
  user = '';
  dataSource;
  displayedColumns: string[] = ['name', 'full_name', 'watchers', 'forks', 'open_issues_count', 'default_branch'];
  public adminGridSubscribe: Subscription = Subscription.EMPTY;
  constructor(public route: ActivatedRoute, public adminApiService: AdminApiService) {
    this.route.queryParams.subscribe(params => {
      this.user = params.user;
    });
  }

  ngOnInit() {
    this.loadspecificuser();
  }

  loadspecificuser() {
    let url = '/users/' + this.user + '/repos';
    this.adminGridSubscribe = this.adminApiService.getAPIData(url).subscribe(data => {
      this.dataSource = data;
    }, error => {
      console.log(error)
      this.dataSource = [];
    });
  }

}
