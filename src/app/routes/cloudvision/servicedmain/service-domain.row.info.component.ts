import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import ArisUsageEntity, {ServiceDomain} from '../entities';

// import * as data from 'customers.json';

export interface CapacityStats {
  title: string;
  key: string;
  subtitle: string;
  amount: number;
  units: string;
  color: string;
}

@Component({
  selector: 'app-service-domain-row-info-component',
  templateUrl: 'service-domain.row.info.component.html',
})
export class ServiceDomainRowInfoComponent implements OnInit {
  @Input() entity: ServiceDomain;
  @Input() loading: boolean;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {


  }
}
