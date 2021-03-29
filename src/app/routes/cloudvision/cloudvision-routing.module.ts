import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServersListComponent } from './servers/servers.list.component';
import { ServersComponent } from './servers/servers.component';
import { CapacityComponent } from './billing/capacity.component';
import { EntityBillingComponent } from './billing/entity.billing.component';

const routes: Routes = [
  { path: 'servers', component: ServersComponent, data: { title: 'Servers' } },
  { path: 'capacity', component: CapacityComponent, data: { title: 'Capacity' } },
  { path: 'capacity/entity-billing', component: EntityBillingComponent, data: { title: 'Entity' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CloudvisionRoutingModule {}
