import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AbstractTableList} from '../abstract.table.list';
import {DCEvent} from './events.component';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-events-list-component',
  templateUrl: 'events.list.component.html',
  styles: [
    `


      .entities-list-badge.finished {
        background: #689F38;
      }


    `,
  ],
})
export class EventsListComponent extends AbstractTableList<DCEvent> {
  cpu = 0;
  mem = 0;
  storage = 0;

  currentEntity: DCEvent;
  showPayload: boolean = false;

  openPayload(entity) {
    this.currentEntity = entity;
    this.showPayload = true;
  }


  constructor(httpClient: HttpClient, public dialog: MatDialog, public snackBar: MatSnackBar) {
    super(httpClient);
  }

  ngOnInit() {
  }

  getFilters() {

    return ['kind', 'service_domain', 'status','started'];
  }

  getExportedColumns(): string[] {
    return [];
  }

  payload(entity) {

  }
}
