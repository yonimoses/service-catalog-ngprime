import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SecuritySummaryReportComponent} from './security.summary.report.component';

// import * as data from 'customers.json';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'aqua-summary',
  templateUrl: 'aqua.summary.report.component.html',
})
export class AquaSummaryReportComponent extends SecuritySummaryReportComponent  {

  @Input() entity: any;
  constructor(httpClient: HttpClient) {
    super(httpClient);
    console.log('AquaSummaryReportComponent ');
  }

  getServiceName(): string {
    return 'aqua';
  }
}
