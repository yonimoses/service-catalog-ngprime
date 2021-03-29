import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Server from '../entities';
import CapacityEntity from '../entities';

// import * as data from 'customers.json';

export interface CapacityStats {
  title: string;
  subtitle: string;
  amount: number;
  units: string;
  color: string;
}

@Component({
  selector: 'app-capacity-stats-component',
  templateUrl: 'capacity.stats.component.html',
})
export class CapacityStatsComponent implements OnInit {
  @Input() entities: CapacityEntity[];
  @Input() loading: boolean;
  stats: CapacityStats[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    /**
     *  "sonar_loc": 12874,
     "bitbucket_contributors": 22,
     "artifactory_storage": 345,
     "openshift_quota" :{
        "cpu": 2,
        "mem": 4,
        "storage": 4
      }
     */
    let sonar = this.entities
      .map(aa => aa.usage.sonar * 1)
      .reduce((server, currentValue) => server + currentValue, 0);
    let artifactory = this.entities
      .map(aa => aa.usage.artifactory * 1)
      .reduce((server, currentValue) => server + currentValue, 0);
    let bb = this.entities
      .map(aa => aa.usage.bitbucket * 1)
      .reduce((server, currentValue) => server + currentValue, 0);
    let ocp_cpu = this.entities
      .map(aa => aa.usage.openshift_cpu * 1)
      .reduce((server, currentValue) => server + currentValue, 0);
    let ocp_storage = this.entities
      .map(aa => aa.usage.openshift_storage * 1)
      .reduce((server, currentValue) => server + currentValue, 0);
    let ocp_mem = this.entities
      .map(aa => aa.usage.openshift_mem * 1)
      .reduce((server, currentValue) => server + currentValue, 0);
    // let mem = this.entities.map(aa => aa.mem * 1).reduce((server, currentValue) => server + currentValue,0);
    // let storage = this.entities.map(aa => aa.storage * 1).reduce((server, currentValue) => server + currentValue,0);

    /**
     * @todo , improve this.
     */
    this.stats = [
      {
        units: ' Lines of code',
        title: 'SonarQube',
        amount: sonar,
        subtitle: '', //_ENTITY_PRICING_HELP.get('sonar'),
        color: 'bg-indigo-500',
      },
      {
        units: 'G',
        title: 'Artifactory',
        subtitle: '', //_ENTITY_PRICING_HELP.get('artifactory'),
        amount: artifactory,
        color: 'bg-blue-500',
      },
      {
        title: 'Bitbucket',
        units: ' Contributors',
        subtitle: '', //_ENTITY_PRICING_HELP.get('bitbucket'),
        amount: bb,
        color: 'bg-orange-500',
      },
      {
        title: 'Snyk',
        units: ' Contributors',
        subtitle: '', // _ENTITY_PRICING_HELP.get('snyk'),
        amount: bb,
        color: 'bg-orange-500',
      },
      {
        title: 'Checkmarx',
        units: ' Contributors',
        subtitle: '', //_ENTITY_PRICING_HELP.get('checkmarx'),
        amount: bb,
        color: 'bg-orange-500',
      },
      {
        title: 'Openshift CPU',
        units: ' vCPU',
        subtitle: '', //_ENTITY_PRICING_HELP.get('openp_cpu'),
        amount: ocp_cpu,
        color: 'bg-red-500',
      },
      {
        units: 'G',
        title: 'Openshift Memory',
        subtitle: '', //_ENTITY_PRICING_HELP.get('ocp_memory'),
        amount: ocp_mem,
        color: 'bg-red-500',
      },
      {
        title: 'Openshift Storage',
        units: 'G',
        subtitle: '', // _ENTITY_PRICING_HELP.get('ocp_storage'),
        amount: ocp_storage,
        color: 'bg-red-500',
      },
    ];
    // console.log(this.servers.reduce((server, currentValue) => server.cpu + currentValue.cpu))
  }
}
