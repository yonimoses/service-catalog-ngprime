import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServersComponent } from './servers/servers.component';
import { CapacityComponent } from './billing/capacity.component';
import { ArisCostComponent } from './billing/aris.cost.component';
import {ServiceDomainsComponent} from './service-domain/service-domains.component';
import {DomainDetailsComponent} from './service-domain/details/domain-details.component';
import {ServiceDomainDeploymentEnvChart} from './service-domain/charts/service.domain.deployment.env.chart';
import {CentralServicesComponent} from './central-services/central-services.component';
import {EventsComponent} from './events/events.component';
import {SecurityDashboardComponent} from './security/security.dashboard.component';

const routes: Routes = [
  { path: 'security', component: SecurityDashboardComponent, data: { title: 'asdasd' } },
  { path: 'central-services', component: CentralServicesComponent, data: { title: 'Central Services' } },
  { path: 'events', component: EventsComponent, data: { title: 'Servers' } },
  { path: 'servers', component: ServersComponent, data: { title: 'Servers' } },
  { path: 'capacity', component: CapacityComponent, data: { title: 'Capacity' } },
  { path: 'capacity/cost', component: ArisCostComponent, data: { title: 'Aris Cost' } },
  { path: 'service-domains', component: ServiceDomainsComponent, data: { title: 'Service Domains' } },
  { path: 'service-domains/domain-details', component: DomainDetailsComponent, data: { title: 'Domains Details' } },
  { path: 'service-domains/env-chart', component: ServiceDomainDeploymentEnvChart, data: { title: 'Domains Details' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CloudvisionRoutingModule {}
