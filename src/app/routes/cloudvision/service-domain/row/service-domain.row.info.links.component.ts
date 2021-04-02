import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceDomain} from '../../entities';
import {JIRA_URL} from '../../consts';

@Component({
  selector: 'service-domain-row-info-links-component',
  styleUrls: ['service-domain.row.info.component.scss'],
  templateUrl: 'service-domain.row.info.links.component.html',

})
export class ServiceDomainRowInfoLinksComponent implements OnInit {

  @Input() entity: ServiceDomain;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {

  }


  getTicketingBoard(): string {
    if (this.entity.links.jira === null || this.entity.links.jira.length == 0) {
      return JIRA_URL;
    }
    return this.entity.links.jira[0];
  }

  getOCPEnv(ocp: string): string {
    if (ocp.indexOf('dev') > -1) {
      return 'Dev';
    }
    if (ocp.indexOf('staging') > -1) {
      return 'Staging';
    }
    if (ocp.indexOf('preprod') > -1) {
      return 'Preprod';
    }
    if (ocp.indexOf('prod') > -1) {
      return 'Prod';
    }
    return '';
  }

  getOCPNamespace(ocp: string): string {
    if (ocp.indexOf(this.entity.domain_name) > -1) {
      return ocp.substr(ocp.indexOf(this.entity.domain_name));
    }
    return ocp;
  }
}
