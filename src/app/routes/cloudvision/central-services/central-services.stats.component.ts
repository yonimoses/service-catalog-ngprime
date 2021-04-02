import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CentralService} from '../entities';

// import * as data from 'customers.json';

export interface ServerStats {
  env;
  total;
  color;
}

@Component({
  selector: 'app-central-services-stats-component',
  templateUrl: 'central-services.stats.component.html',
})
export class CentralServicesStatsComponent implements OnInit {
  @Input() entities: CentralService[];
  @Input() loading: boolean;
  stats: ServerStats[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {

    let dev = 0;
    let staging = 0;
    let preprod = 0;
    let prod = 0;
    this.entities.forEach(cs => {
      if (cs.env.indexOf('dev') > -1) {
        dev++;
      } else {
        if (cs.env.indexOf('staging') > -1) {
          staging++;
        } else {
          if (cs.env.indexOf('preprod') > -1) {
            preprod++;
          } else {
            if (cs.env.indexOf('prod') > -1) {
              prod++;
            } else {
              console.log(cs.env + ' is invalid - Couldn\'nt find any env for it.');
            }
          }
        }
      }
    });

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
    // console.log(this.servers.reduce((server, currentValue) => server.cpu + currentValue.cpu))
  }
}
