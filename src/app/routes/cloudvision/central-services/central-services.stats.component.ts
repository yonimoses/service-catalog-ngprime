import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CentralService} from '../entities';

// import * as data from 'customers.json';

export interface ServerStats {
  env;
  total;
  color;
}

enum Env {
  dev = 'dev',
  staging = 'staging',
  preprod = 'preprod',
  prod = 'prod',
}

enum EnvColors {
  dev = 'red',
  staging = 'orange',
  preprod = 'blue',
  prod = 'green',
}

@Component({
  selector: 'app-central-services-stats-component',
  templateUrl: 'central-services.stats.component.html',
  styles: [
      `
      .bg-blue-600 {
        background: #689F38;
      }


    `,
  ],
})
export class CentralServicesStatsComponent implements OnInit {
  @Input() entities: CentralService[];
  @Input() loading: boolean;
  stats: Map<string, ServerStats> = new Map();
  statsValues: ServerStats[] = [];

  constructor(private httpClient: HttpClient) {

    for (const value in Env) {
      this.stats.set(value, {
        env: value,
        total: 0,
        color: EnvColors[value]
      });
    }
  }

  ngOnInit() {

    let dev = 0;
    let staging = 0;
    let preprod = 0;
    let prod = 0;

    this.entities.forEach(cs => {
      let s = this.stats.get(cs.environment);
      s.total = s.total + 1;
      this.stats.set(cs.environment, s);
    });

  //  this.statsValues =  Array.from(this.stats.values());


    // console.log(this.servers.reduce((server, currentValue) => server.cpu + currentValue.cpu))
  }
}
