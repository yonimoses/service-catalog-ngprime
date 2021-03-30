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
  MESSAGES = [
    {
      img: 'assets/images/avatars/avatar-1.jpg',
      subject: 'Hydrogen',
      content: `Cras sit amet nibh libero, in gravida nulla.
     Nulla vel metus scelerisque ante sollicitudin commodo.`,
    },
    {
      img: 'assets/images/avatars/avatar-2.jpg',
      subject: 'Helium',
      content: `Cras sit amet nibh libero, in gravida nulla.
     Nulla vel metus scelerisque ante sollicitudin commodo.`,
    },
    {
      img: 'assets/images/avatars/avatar-3.jpg',
      subject: 'Lithium',
      content: `Cras sit amet nibh libero, in gravida nulla.
     Nulla vel metus scelerisque ante sollicitudin commodo.`,
    }]
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {


  }
}
