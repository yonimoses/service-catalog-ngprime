import {Component} from '@angular/core';
import {Table} from 'primeng/table';
import {HttpClient} from '@angular/common/http';
import {AbstractTableDataFetcher} from '../abstract.table.data.fetcher';
import {Server} from '../entities';
import {URL_CENTRAL_SERVICES} from '../consts';

// import * as data from 'customers.json';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'central-services-component',
  templateUrl: 'central-services.component.html',
})
export class CentralServicesComponent extends AbstractTableDataFetcher<Server> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    console.log('CentralServicesComponent ');
  }

  clear(table: Table) {
    table.clear();
  }

  public getUrl(): string {
    return URL_CENTRAL_SERVICES;
  }
}
