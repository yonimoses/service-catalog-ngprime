import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractTableList} from '../abstract.table.list';
import {CentralService} from '../entities';

// import * as data from 'customers.json';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-central-services-list-component',
  templateUrl: 'central-services.list.component.html',
})
export class CentralServicesListComponent extends AbstractTableList<CentralService> {
  cpu = 0;
  mem = 0;
  storage = 0;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  ngOnInit() {
    // this.cpu = this.servers.map(aa => aa.cpu * 1). reduce((server, currentValue) => server + currentValue,0);
    // this.mem = this.servers.map(aa => aa.mem * 1).reduce((server, currentValue) => server + currentValue,0);
    // this.storage = this.servers.map(aa => aa.storage * 1).reduce((server, currentValue) => server + currentValue,0);
  }

  getFilters() {
    return ['dns', 'name', 'env','port','address'];
  }

  getExportedColumns(): string[] {
    return ['dns', 'name', 'env','port','address'];
  }



}
