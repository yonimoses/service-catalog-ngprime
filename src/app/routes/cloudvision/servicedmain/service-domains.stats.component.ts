import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceDomain} from '../entities';

// import * as data from 'customers.json';

export interface ServiceDomainStats {
  env: string;
  total: number;
  color: string;
}

@Component({
  selector: 'app-service-domains-stats-component',
  templateUrl: 'service-domains.stats.component.html',
})
export class ServiceDomainsStatsComponent implements OnInit {
  @Input() entities: ServiceDomain[];
  @Input() loading: boolean;
  stats: ServiceDomainStats[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {


    let dev = 0;
    let staging = 0;
    let preprod = 0;
    let prod = 0;
    this.entities.forEach(service_domain => {
      service_domain.namespaces.forEach(namespace => {

        if (namespace.indexOf('dev') > -1) {
          dev++;
        } else {
          if (namespace.indexOf('staging') > -1) {
            staging++;
          } else {
            if (namespace.indexOf('preprod') > -1) {
              preprod++;
            } else {
              if (namespace.indexOf('prod') > -1) {
                prod++;
              } else {
                console.log(namespace + ' is invalid - Couldn\'nt find any env for it.');

              }
            }
          }
        }
      });
    })

    this.stats = [
      {
        env: 'dev',
        total: dev,
        color: 'bg-red-500'
      }, {
        env: 'staging',
        total: staging,
        color: 'bg-orange-500'
      }, {
        env: 'preprod',
        total: preprod,
        color: 'bg-blue-500'
      }, {
        env: 'prod',
        total: prod,
        color: 'bg-green-500'
      }
    ];

    // const cpu = this.entities
    //   .map(aa => aa.cpu * 1)
    //   .reduce((server, currentValue) => server + currentValue, 0);
    // const mem = this.entities
    //   .map(aa => aa.mem * 1)
    //   .reduce((server, currentValue) => server + currentValue, 0);
    // const storage = this.entities
    //   .map(aa => aa.storage * 1)
    //   .reduce((server, currentValue) => server + currentValue, 0);
    //
    // this.stats = [
    //   {
    //     title: 'CPU',
    //     amount: cpu,
    //     color: 'bg-indigo-500',
    //   },
    //   {
    //     title: 'Memory',
    //     amount: mem,
    //     color: 'bg-blue-500',
    //   },
    //   {
    //     title: 'Storage',
    //     amount: storage,
    //     color: 'bg-orange-500',
    //   },
    // ];
    // console.log(this.servers.reduce((server, currentValue) => server.cpu + currentValue.cpu))
  }
}
