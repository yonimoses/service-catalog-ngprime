import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

// import * as data from 'customers.json';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'security-dashboard',
  styleUrls: ['security.dashboard.component.scss'],
  templateUrl: 'security.dashboard.component.html',
})
export class SecurityDashboardComponent implements OnInit {

  entity: any = {};

  constructor(httpClient: HttpClient) {
    console.log('SecurityDashboardComponent ');
  }

  ngOnInit(): void {
  }
}
