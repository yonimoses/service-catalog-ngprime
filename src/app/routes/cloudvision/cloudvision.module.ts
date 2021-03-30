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
import { ArisEntityListComponent } from './billing/aris.entity.list.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ArisStatsComponent } from './billing/aris.stats.component';
import { ArisCostComponent } from './billing/aris.cost.component';
import { SplitterModule } from 'primeng/splitter';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TableCaptionComponent} from './fragments/table.caption.component';
import {OrderListModule} from 'primeng/orderlist';
import {ServiceDomainsComponent} from './servicedmain/service-domains.component';
import {ServiceDomainsStatsComponent} from './servicedmain/service-domains.stats.component';
import {ServiceDomainsEntityListComponent} from './servicedmain/service-domains.entity.list.component';
import {ArisRowInfoComponent} from './billing/aris.row.info.component';
import {ServiceDomainRowInfoComponent} from './servicedmain/service-domain.row.info.component';
import {ServiceDomainClustersCardComponent} from './servicedmain/cards/service-domain.clusters.card.component';
import {DividerModule} from 'primeng/divider';
import {ServiceDomainLinksCardComponent} from './servicedmain/cards/service-domain.links.card.component';
import {DomainDetailsComponent} from './servicedmain/details/domain-details.component';

const COMPONENTS = [
  ServersListComponent,
  ArisCostComponent,
  DomainDetailsComponent,
  ServiceDomainsStatsComponent,
  ServiceDomainsEntityListComponent,
  ServiceDomainsComponent,
  ArisRowInfoComponent,
  ServiceDomainLinksCardComponent,
  ServiceDomainClustersCardComponent,
  ServiceDomainRowInfoComponent,
  ArisStatsComponent,
  ArisEntityListComponent,
  TableCaptionComponent,
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
    ToolbarModule,
    TooltipModule,
    OrderListModule,
    DividerModule,
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class CloudvisionModule {}
