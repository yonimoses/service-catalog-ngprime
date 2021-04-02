import {Component} from '@angular/core';
import {Table} from 'primeng/table';
import {HttpClient} from '@angular/common/http';
import {AbstractTableDataFetcher} from '../abstract.table.data.fetcher';
import {ServiceDomain} from '../entities';
import {URL_SERVER_SERVICE_DOMAIN} from '../consts';

// import * as data from 'customers.json';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'service-domains-component',
  styleUrls: ['../table-styles.scss'],
  templateUrl: 'service-domains.component.html',
})
export class ServiceDomainsComponent extends AbstractTableDataFetcher<ServiceDomain> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    console.log('ServiceDomainsComponent ');
  }

  clear(table: Table) {
    table.clear();
  }

  public getUrl(): string {
    return URL_SERVER_SERVICE_DOMAIN;
  }

  public afterDataLoaded() {
    // this.entities.forEach(A=>{
    //      ServiceDomainUtils.owner(A)
    // })
  }
}
