import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractTableList} from '../abstract.table.list';
import {CentralService} from '../entities';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(httpClient: HttpClient, private snackBar: MatSnackBar) {
    super(httpClient);
  }

  ngOnInit() {
    // this.cpu = this.servers.map(aa => aa.cpu * 1). reduce((server, currentValue) => server + currentValue,0);
    // this.mem = this.servers.map(aa => aa.mem * 1).reduce((server, currentValue) => server + currentValue,0);
    // this.storage = this.servers.map(aa => aa.storage * 1).reduce((server, currentValue) => server + currentValue,0);
  }

  getFilters() {
    return ['ips', 'name', 'environment','port'];
  }

  getExportedColumns(): string[] {
    return ['ips', 'name', 'environment','port'];
  }


  goToBlackboxDashboard() {
    /**
     * @todo yoni, redirect with _blank
     */
    this.snackBar.open('Not implemented yet', '', { duration: 2000 });

  }

  goToRepo() {
    this.snackBar.open('Not implemented yet', '', { duration: 2000 });

  }
}
