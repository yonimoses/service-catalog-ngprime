import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServersComponent } from './servers/servers.component';
import { CapacityComponent } from './billing/capacity.component';
import { ArisCostComponent } from './billing/aris.cost.component';
import {ServiceDomainsComponent} from './servicedmain/service-domains.component';
import {DomainDetailsComponent} from './servicedmain/details/domain-details.component';
import {ServiceDomainDeploymentEnvChart} from './servicedmain/charts/service.domain.deployment.env.chart';

const routes: Routes = [
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
