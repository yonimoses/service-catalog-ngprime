import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractServiceDomainCardComponent} from './abstract.service-domain.card.component';

@Component({
  selector: 'app-service-domain-clusters-card-component',
  styleUrls: ['../../table-styles.scss'],
  templateUrl: 'service-domain.clusters.card.component.html',
})
export class ServiceDomainClustersCardComponent extends AbstractServiceDomainCardComponent {

  constructor(httpClient: HttpClient) {
    super(httpClient)
  }

  ngOnInit() {

  }

  getCardHeader() : string{
    return 'CLUSTERS'
  }

  asLink(name :string) : string{
    return 'https://' + name + '.resource.bank:8443'
  }
}
