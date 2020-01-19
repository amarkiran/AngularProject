import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { faBars , faPowerOff} from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import {AdminApiService} from '../../admin/admin-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  users: any;
  constructor(config: NgbDropdownConfig, private router: Router, public adminApi: AdminApiService) {
    config.placement = 'bottom-right';
  }
  ngOnInit() {
  }

}
