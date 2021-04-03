import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Server} from '../entities';

// import * as data from 'customers.json';

export interface ServerStats {
  title;
  unit;
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
  formula: string = '';
  price_per_cpu: number = 1000;
  price_per_storage: number = 8;
  price_per_mem: number = 600;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    let cpu = 0;
    let mem = 0;
    let storage = 0;

    this.entities.forEach(a => {
      cpu += a.cpu;
      mem += a.mem;
      storage += a.storage;
    });

    this.stats = [
      {
        title: 'CPU',
        unit: 'vCPU',
        amount: cpu,
        color: 'bg-indigo-500',
      },
      {
        title: 'Memory',
        unit: '1G',
        amount: mem,
        color: 'bg-blue-500',
      },
      {
        title: 'Storage',
        unit: '1G',
        amount: storage,
        color: 'bg-orange-500',
      },
    ];

    this.formula = cpu + '*' + this.price_per_cpu + '+' +
      mem + '*' + this.price_per_mem + '+' +
      storage + '*' + this.price_per_storage + '=' + (cpu * this.price_per_cpu + mem * this.price_per_mem + storage + this.price_per_storage)
    // console.log(this.servers.reduce((server, currentValue) => server.cpu + currentValue.cpu))
  }
}
