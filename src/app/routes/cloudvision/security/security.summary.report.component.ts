import {Directive, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

// import * as data from 'customers.json';
export interface ReportSummary {
  high: number;
  medium: number;
  low: number;
  links: string[];
  message: string;
  service: string;
  error: boolean;
}

export interface SummaryStats {
  total: number;
  type: string;
  color: string;
}

@Directive({})
export abstract class SecuritySummaryReportComponent implements OnInit {


  @Input() entity: any;

  loading = true;
  summary: ReportSummary;
  stats: SummaryStats[] = [];

  constructor(private httpClient: HttpClient) {
    console.log('SecuritySummaryReportComponent');
  }

  ngOnInit(): void {
    console.log('ngOnIni');
    //need to send aris + git repo + branch + git project + docker version and
    this.httpClient.get<ReportSummary>('http://localhost:8080/service-domain/security/' + this.getServiceName() + '?domain=' + this.entity.domain_name+'&aris=')
      .subscribe(res => {
        this.summary = res;
        console.log('Got security response  ', this.summary);
        if (!this.summary.error) {
          this.stats = [
            {
              total: this.summary.high,
              type: 'HIGH',
              color: 'bg-red-500',
            },
            {
              total: this.summary.medium,
              type: 'MEDIUM',
              color: 'bg-orange-500',
            },
            {
              total: this.summary.low,
              type: 'HIGH',
              color: 'bg-blue-500',
            }
          ]
        }
        this.loading = false;
      })
  }

  abstract getServiceName(): string ;


}
