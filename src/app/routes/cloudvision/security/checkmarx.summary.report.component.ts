import {Component, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SecuritySummaryReportComponent} from './security.summary.report.component';

// import * as data from 'customers.json';

@Component({
  selector: 'checkmarx-summary',
  templateUrl: 'checkmarx.summary.report.component.html',
})
export class CheckmarxSummaryReportComponent extends SecuritySummaryReportComponent {

  @Input() entity: any;

  getServiceName(): string {
    return 'checkmarx';
  }


  constructor(httpClient: HttpClient) {
    super(httpClient);
    console.log('CheckmarxSummaryReportComponent ');
  }

}
