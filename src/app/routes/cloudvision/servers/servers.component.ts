import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { HttpClient } from '@angular/common/http';
import { AbstractTableDataFetcher } from '../abstract.table.data.fetcher';
import Server from '../entities';

// import * as data from 'customers.json';

const servers_url = 'http://localhost:8080/servers/list';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'servers-component',
  templateUrl: 'servers.component.html',
})
export class ServersComponent extends AbstractTableDataFetcher<Server> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    console.log('ServersComponent ');
  }

  clear(table: Table) {
    table.clear();
  }

  public getUrl(): string {
    return 'http://localhost:8080/servers/list';
  }
}
