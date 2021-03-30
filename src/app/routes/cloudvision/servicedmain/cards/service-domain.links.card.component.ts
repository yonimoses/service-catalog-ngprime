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
    this.keys = Object.keys(this.entity.links)
  }

  getCardHeader(): string {
    return 'LINKS'
  }
}
