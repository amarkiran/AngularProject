import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Subscription} from 'rxjs';
import {AdminApiService} from '../admin-api.service';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {error} from "util";
import {MatSort} from "@angular/material/sort";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  public adminGridSubscribe: Subscription = Subscription.EMPTY;
  displayedColumns: string[] = ['id', 'login', 'type', 'site_admin', 'repos_url', 'url'];
  dataSource;
  dataValue;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(public dialog: MatDialog, public adminApiService: AdminApiService,
              public router: Router
  ) {
  }

  ngOnInit() {
    this.loadGridData();
  }

  loadGridData() {
    this.adminGridSubscribe = this.adminApiService.getAPIData('/users').subscribe(data => {
      this.dataSource = data;
      this.dataValue = new MatTableDataSource(this.dataSource);
      this.dataValue.sort = this.sort;
    }, error => {
      console.log(error)
      this.dataSource = [];
    });
  }

  applyFilter(event) {
    this.dataValue.filter = event.target.value;
  }

  userInfo(event) {
    console.log(event.login)
    this.router.navigate(['/admin/users/basicInfo'], { queryParams: { user: event.login} });
  }

  ngOnDestroy(): void {
    this.adminGridSubscribe.unsubscribe();
  }
}
