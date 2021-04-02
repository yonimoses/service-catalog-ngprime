import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceDomain, ServiceDomainParticipant} from '../../entities';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {NetworkPolicySheetComponent} from './sheets/network.policy.sheet.components';
import {QuotaSheetComponent} from './sheets/quota.sheet.component';
import {ServiceDomainUtils} from '../../consts';

// import * as data from 'customers.json';


@Component({
  selector: 'app-service-domain-row-info-component',
  styleUrls: ['service-domain.row.info.component.scss'],

  templateUrl: 'service-domain.row.info.component.html',
})
export class ServiceDomainRowInfoComponent implements OnInit {
  @Input() entity: ServiceDomain;
  @Input() loading: boolean;
  owner: ServiceDomainParticipant;
  tabs: any[] = [
    {name: 'Details'},
    {name: 'Clusters'},
    {name: 'Links'},
    {name: 'Envs'},
  ];


  openNetworkPolicySheet(domain_name: string): void {
    this.bottomSheet.open(NetworkPolicySheetComponent, {
      data: {domain_name: domain_name},
    });
  }

  openQuotaSheet(domain_name: string): void {
    this.bottomSheet.open(QuotaSheetComponent, {
      data: {domain_name: domain_name},
    });
  }

  constructor(private httpClient: HttpClient, private bottomSheet: MatBottomSheet) {
  }

  ngOnInit() {
    this.owner = ServiceDomainUtils.owner(this.entity);
  }

  getEnvs(entity: ServiceDomain): string[] {
    return Object.keys(entity.envs);
  }
}

