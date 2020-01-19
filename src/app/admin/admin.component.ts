import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  user = '';
  constructor(public router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
        console.log(params); // {order: "popular"}
        this.user = params.user;
      });
  }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['admin/users']);
  }
}
