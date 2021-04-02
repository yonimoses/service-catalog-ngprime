import {Component, Inject, OnInit} from '@angular/core';
import {ServiceDomain} from '../../entities';
import {TreeNode} from 'primeng/api';
import {EnvUtils} from '../../consts';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

// import * as data from 'customers.json';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'service-domain-deployment-env-chart-component',
  templateUrl: 'service.domain.deployment.env.chart.html',
})
export class ServiceDomainDeploymentEnvChart implements OnInit {
  envs_data: TreeNode[];
  children: TreeNode[];
  entity: ServiceDomain;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.entity = data.entity;
  }


  ngOnInit() {

    //dummy populate all envs possible
    this.children = [
      {
        label: 'DEV',
      },
      {
        label: 'STAGING'
      },
      {
        label: 'PREPROD'
      },
      {
        label: 'PROD'
      }
    ];

    this.children.forEach(env => {
      env.children = EnvUtils.namespacesToTreeNode(this.entity, env.label.toLowerCase())
    });


    this.envs_data = [{
      label: this.entity.domain_name,
      children: this.children
    }];
  }


}
