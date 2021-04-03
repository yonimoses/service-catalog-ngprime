import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractTableList} from '../abstract.table.list';
import {Server} from '../entities';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

// import * as data from 'customers.json';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-servers-list-component',
  templateUrl: 'servers.list.component.html',
  styleUrls: ['../table-styles.scss', 'servers.list.component.scss'],
})
export class ServersListComponent extends AbstractTableList<Server> {
  cpu = 0;
  mem = 0;
  storage = 0;


  constructor(httpClient: HttpClient, public dialog: MatDialog, public snackBar: MatSnackBar) {
    super(httpClient);
  }

  ngOnInit() {

    // this.cpu = this.servers.map(aa => aa.cpu * 1). reduce((server, currentValue) => server + currentValue,0);
    // this.mem = this.servers.map(aa => aa.mem * 1).reduce((server, currentValue) => server + currentValue,0);
    // this.storage = this.servers.map(aa => aa.storage * 1).reduce((server, currentValue) => server + currentValue,0);
  }

  getFilters() {
    return ['group', 'hostname', 'ipaddress'];
  }

  getExportedColumns(): string[] {


    return ['dns', 'cpu', 'mem', 'storage', 'group', 'hostname', 'ipaddress'];
  }


  newServer() {
    /**
     * @todo yoni - should we implement this?
     */
    this.snackBar.open('Not implemented yet', '', {duration: 2000});
    // this.dialog.open(AddNewServerFormComponent);
  }
}

@Component({
  selector: 'add-new-server-form',
  styles: [
      `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: 'add-new-server-form.html',
})
export class AddNewServerFormComponent {
}
