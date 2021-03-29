import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractTableList } from '../abstract.table.list';
import CapacityEntity from '../entities';
import { ActivatedRoute, Router } from '@angular/router';
import ServicePriceUnit from '../entities';
import { Observable } from 'rxjs';
import { URL_COST_SERVICES } from '../consts';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-capacity-entity-list-component',
  templateUrl: 'capacity.entity.list.component.html',
  styleUrls: ['../table-styles.scss', 'capacity.entity.list.component.scss'],
})
export class CapacityEntityListComponent extends AbstractTableList<CapacityEntity> {
  service_price_units: Observable<ServicePriceUnit[]>;

  constructor(httpClient: HttpClient, private router: Router, private route: ActivatedRoute) {
    super(httpClient);
  }

  ngOnInit() {
    this.service_price_units = this.httpClient.get<ServicePriceUnit[]>(URL_COST_SERVICES);
    // this.cpu = this.servers.map(aa => aa.cpu * 1). reduce((server, currentValue) => server + currentValue,0);
    // this.mem = this.servers.map(aa => aa.mem * 1).reduce((server, currentValue) => server + currentValue,0);
    // this.storage = this.servers.map(aa => aa.storage * 1).reduce((server, currentValue) => server + currentValue,0);
  }

  getFilters(): string[] {
    return ['aris', 'owner_name'];
  }

  summary(entity) {
    console.log(entity);
    // this.router.navigate()
  }

  goToPricing(entity) {
    console.log(entity);
    this.router.navigate(['entity-billing', { aris: entity.aris }], { relativeTo: this.route });
  }
}
