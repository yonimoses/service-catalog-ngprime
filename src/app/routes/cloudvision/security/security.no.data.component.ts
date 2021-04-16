import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReportSummary} from './security.summary.report.component';

// import * as data from 'customers.json';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'security-no-data-component',
  templateUrl: 'security.no.report.data.html',
})
export class SecurityNoDataComponent implements OnInit {

  @Input() summary: ReportSummary;

  constructor(httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }
}
