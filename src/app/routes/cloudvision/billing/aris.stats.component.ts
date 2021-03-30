import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import ArisUsageEntity from '../entities';

// import * as data from 'customers.json';


@Component({
  selector: 'app-aris-stats-component',
  templateUrl: 'aris.stats.component.html',
})
export class ArisStatsComponent implements OnInit {
  @Input() entities: ArisUsageEntity[];
  @Input() loading: boolean;
  stats: any[] = [];

  constructor(private httpClient: HttpClient) {
  }

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

    let namespaces = 0;
    let names = 0;
    this.entities.forEach((entity) => {
      if (entity.service_domains && entity.service_domains.names) {
        names += entity.service_domains.names.length;
      }
      if (entity.service_domains && entity.service_domains.namespaces) {
        namespaces+=  entity.service_domains.namespaces.length;
      }
    });

    /**
     * @todo , improve this.
     */
    this.stats = [
      {
        title: 'Service Domains',
        amount: names,
        subtitle: 'Total service domains in all OCP clusters',
        color: 'bg-blue-500',
      },
      {
        title: 'Namespaces',
        amount: namespaces,
        subtitle: 'Total namespaces in all OCP clusters',
        color: 'bg-orange-500',
      }
    ];
    // console.log(this.servers.reduce((server, currentValue) => server.cpu + currentValue.cpu))
  }

}
