import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ServersListComponent } from './servers/servers.list.component';
import { CloudvisionRoutingModule } from './cloudvision-routing.module';
import { ChipsModule } from 'primeng/chips';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ServersComponent } from './servers/servers.component';
import { ServersStatsComponent } from './servers/servers.stats.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CapacityComponent } from './billing/capacity.component';
import { CapacityEntityListComponent } from './billing/capacity.entity.list.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CapacityStatsComponent } from './billing/capacity.stats.component';
import { EntityBillingComponent } from './billing/entity.billing.component';
import { SplitterModule } from 'primeng/splitter';

const COMPONENTS = [
  ServersListComponent,
  EntityBillingComponent,
  CapacityStatsComponent,
  CapacityEntityListComponent,
  ServersStatsComponent,
  ServersComponent,
  CapacityComponent,
];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    CloudvisionRoutingModule,
    ChipsModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    ProgressSpinnerModule,
    ButtonModule,
    RippleModule,
    SplitterModule,
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class CloudvisionModule {}
