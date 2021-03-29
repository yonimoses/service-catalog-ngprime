import { Component, Directive, Input, OnInit } from '@angular/core';
import { ChipsModule } from 'primeng/chips';
import { Table } from 'primeng/table';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TableRow } from './entities';
// import * as data from 'customers.json';

@Directive()
export abstract class AbstractTableList<T extends TableRow> implements OnInit {
  @Input() entities: T[];

  @Input() loading: boolean = true;
  first = 0;
  rows = 10;

  constructor(public httpClient: HttpClient) {}

  ngOnInit() {}
  abstract getFilters(): string[];

  public clear(table: Table) {
    table.clear();
  }

  public next() {
    this.first = this.first + this.rows;
  }

  public prev() {
    this.first = this.first - this.rows;
  }

  public reset() {
    this.first = 0;
  }

  public isLastPage(): boolean {
    return this.entities ? this.first === this.entities.length - this.rows : true;
  }

  public isFirstPage(): boolean {
    return this.entities ? this.first === 0 : true;
  }
}
