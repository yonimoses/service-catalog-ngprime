import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import ArisUsageEntity from '../entities';

// import * as data from 'customers.json';

export interface CapacityStats {
  title: string;
  key: string;
  subtitle: string;
  amount: number;
  units: string;
  color: string;
}

@Component({
  selector: 'app-aris-row-info-component',
  templateUrl: 'aris.row.info.component.html',
})
export class ArisRowInfoComponent implements OnInit {
  @Input() entity: ArisUsageEntity;
  @Input() loading: boolean;
  stats: CapacityStats[] = [
    {
      units: ' Lines of code',
      key: 'sonar',
      title: 'SonarQube',
      amount: 0,
      subtitle: '', //_ENTITY_PRICING_HELP.get('sonar'),
      color: 'bg-indigo-500',
    },
    {
      units: 'G',
      key: 'artifactory',
      title: 'Artifactory',
      subtitle: '', //_ENTITY_PRICING_HELP.get('artifactory'),
      amount: 0,
      color: 'bg-green-500',
    },
    {
      title: 'Bitbucket',
      key: 'bitbucket',
      units: ' Contributors',
      subtitle: '', //_ENTITY_PRICING_HELP.get('bitbucket'),
      amount: 0,
      color: 'bg-orange-500',
    },
    {
      title: 'Snyk',
      key: 'snyk',
      units: ' Contributors',
      subtitle: '', // _ENTITY_PRICING_HELP.get('snyk'),
      amount: 0,
      color: 'bg-blue-500',
    },
    {
      title: 'Checkmarx',
      key: 'checkmarx',
      units: ' Contributors',
      subtitle: '', //_ENTITY_PRICING_HELP.get('checkmarx'),
      amount: 0,
      color: 'bg-gray-500',
    },
    {
      title: 'Openshift CPU',
      key: 'openshift_cpu',
      units: ' vCPU',
      subtitle: '', //_ENTITY_PRICING_HELP.get('openp_cpu'),
      amount: 0,
      color: 'bg-red-500',
    },
    {
      units: 'G',
      key: 'openshift_mem',
      title: 'Openshift Memory',
      subtitle: '', //_ENTITY_PRICING_HELP.get('ocp_memory'),
      amount: 0,
      color: 'bg-red-500',
    },
    {
      title: 'Openshift Storage',
      key: 'openshift_storage',
      units: 'G',
      subtitle: '', // _ENTITY_PRICING_HELP.get('ocp_storage'),
      amount: 0,
      color: 'bg-red-500',
    },
  ];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {

    //reset if
    this.stats.forEach(stats => {
        stats.amount = 0;
      }
    );

    //populate it
    Object.keys(this.entity.usage).forEach(key => {
      console.log(key);
      this.stats.forEach(stats => {
        if (key === stats.key) {
          stats.amount += this.entity.usage[key];
        }
      })
    });
  }
}
