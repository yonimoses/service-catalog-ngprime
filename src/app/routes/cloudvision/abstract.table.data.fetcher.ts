import { Component, Directive, OnInit } from '@angular/core';
import { ChipsModule } from 'primeng/chips';
import { Table } from 'primeng/table';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TableRow } from './entities';
// import * as data from 'customers.json';

@Directive()
export abstract class AbstractTableDataFetcher<T extends TableRow> implements OnInit {
  public entities: TableRow[];
  public first = 0;
  public rows = 10;
  public loading: boolean = true;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    console.log('Loading data from ' + this.getUrl());
    this.httpClient.get<TableRow[]>(this.getUrl()).subscribe(res => {
      this.entities = res;
      console.log(res);
      this.loading = false;
    });
  }

  clear(table: Table) {
    table.clear();
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.entities ? this.first === this.entities.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.entities ? this.first === 0 : true;
  }

  public abstract getUrl(): string;
}
