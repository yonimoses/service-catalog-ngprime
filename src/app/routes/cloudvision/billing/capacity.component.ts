import { Component, OnInit } from '@angular/core';
import { ChipsModule } from 'primeng/chips';
import { Table } from 'primeng/table';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbstractTableDataFetcher } from '../abstract.table.data.fetcher';
import {ArisUsageEntity} from '../entities';
// import * as data from 'customers.json';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'capacity-component',
  templateUrl: 'capacity.component.html',
})
export class CapacityComponent extends AbstractTableDataFetcher<ArisUsageEntity> {
  entites: ArisUsageEntity[];

  loading: boolean = true;

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  clear(table: Table) {
    table.clear();
  }

  getUrl(): string {
    return 'http://localhost:8080/capacity/list';
  }
}
