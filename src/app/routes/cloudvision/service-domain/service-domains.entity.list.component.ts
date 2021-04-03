import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractTableList} from '../abstract.table.list';
import {ServiceDomain} from '../entities';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ServiceDomainDeploymentEnvChart} from './charts/service.domain.deployment.env.chart';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {NetworkPolicySheetComponent} from './row/sheets/network.policy.sheet.components';
import {ServiceDomainParticipantsComponent} from './row/service.domain.participants.component';
import {MatSnackBar} from '@angular/material/snack-bar';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-service-domains-entity-list-component',
  templateUrl: 'service-domains.entity.list.component.html',
  styleUrls: ['../table-styles.scss'],
})
export class ServiceDomainsEntityListComponent extends AbstractTableList<ServiceDomain> {

  constructor(private dialog: MatDialog, httpClient: HttpClient,
              private bottomSheet: MatBottomSheet, private router: Router, private snackBar: MatSnackBar,private route: ActivatedRoute) {
    super(httpClient);
  }

  ngOnInit() {

    // this.cpu = this.servers.map(aa => aa.cpu * 1). reduce((server, currentValue) => server + currentValue,0);
    // this.mem = this.servers.map(aa => aa.mem * 1).reduce((server, currentValue) => server + currentValue,0);
    // this.storage = this.servers.map(aa => aa.storage * 1).reduce((server, currentValue) => server + currentValue,0);
  }

  openWelcomeDialog() {
  }

  getFilters(): string[] {
    return ['domain_name', 'owner_email', 'repos','groups','owner_name', 'system_aris', 'system_name_aris'];
  }

  getExportedColumns(): string[] {
    return [''];
  }

  summary(entity) {
    console.log(entity);
    // this.router.navigate()
  }

  goToDetails(entity) {
    this.router.navigate(['domain-details', {domain_name: entity.domain_name}], {relativeTo: this.route});
  }

  showEnvChart(entity) {
    this.dialog.open(ServiceDomainDeploymentEnvChart, {
      data: {
        entity: entity,
      }
    });
    // this.router.navigate(['env-chart', {domain_name: entity.domain_name}], {relativeTo: this.route});
  }
  generateGrafanaDashboard(entity) {
    /**
     * @todo yoni, redirect with _blank
     */
    this.snackBar.open('not implemented yet', '', { duration: 2000 });

  }

  openRolesSheet(entity) {
    this.dialog.open(ServiceDomainParticipantsComponent, {
      data: {
        entity: entity,
      }
    });

  }
}
