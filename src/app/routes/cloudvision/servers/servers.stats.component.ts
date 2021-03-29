import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Server from '../entities';

// import * as data from 'customers.json';

export interface ServerStats {
  title;
  amount;
  color;
}

@Component({
  selector: 'app-servers-stats-component',
  templateUrl: 'servers.stats.component.html',
})
export class ServersStatsComponent implements OnInit {
  @Input() entities: Server[];
  @Input() loading: boolean;
  stats: ServerStats[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    const cpu = this.entities
      .map(aa => aa.cpu * 1)
      .reduce((server, currentValue) => server + currentValue, 0);
    const mem = this.entities
      .map(aa => aa.mem * 1)
      .reduce((server, currentValue) => server + currentValue, 0);
    const storage = this.entities
      .map(aa => aa.storage * 1)
      .reduce((server, currentValue) => server + currentValue, 0);

    this.stats = [
      {
        title: 'CPU',
        amount: cpu,
        color: 'bg-indigo-500',
      },
      {
        title: 'Memory',
        amount: mem,
        color: 'bg-blue-500',
      },
      {
        title: 'Storage',
        amount: storage,
        color: 'bg-orange-500',
      },
    ];
    // console.log(this.servers.reduce((server, currentValue) => server.cpu + currentValue.cpu))
  }
}
