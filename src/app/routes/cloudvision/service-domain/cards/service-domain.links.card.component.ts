import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractServiceDomainCardComponent} from './abstract.service-domain.card.component';

@Component({
  selector: 'app-service-domain-links-card-component',
  styleUrls: ['../../table-styles.scss'],
  templateUrl: 'service-domain.links.card.component.html',
})
export class ServiceDomainLinksCardComponent extends AbstractServiceDomainCardComponent {
  keys : string[];

  constructor(httpClient: HttpClient) {
    super(httpClient)
  }

  ngOnInit() {
    this.keys = Object.keys(this.entity.links);
    //ocp should have the
    // this.ocp = this.keys.filter(a=>a === 'ocp');
  }

  getCardHeader(): string {
    return 'LINKS'
  }

  parseLink(link: string) {
    /**
     * @todo - remove the trail and suffix
     * for example
     * devmaster-a.dev:8443/console/project/atm-switch-dev-default --> should return atm-switch-dev-default
     *
     * for grafana it's the ldap group
     *for bitbucket it's the repo name
     */
    if(link.indexOf('grafana') > -1){

    }

    if(link.indexOf('ocp') > -1){

    }

    if(link.indexOf('bitbucket') > -1){

    }

    return link;
  }
}
