import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {ServersListComponent} from './servers/servers.list.component';
import {CloudvisionRoutingModule} from './cloudvision-routing.module';
import {ChipsModule} from 'primeng/chips';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {ServersComponent} from './servers/servers.component';
import {ServersStatsComponent} from './servers/servers.stats.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CapacityComponent} from './billing/capacity.component';
import {ArisEntityListComponent} from './billing/aris.entity.list.component';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {ArisStatsComponent} from './billing/aris.stats.component';
import {ArisCostComponent} from './billing/aris.cost.component';
import {SplitterModule} from 'primeng/splitter';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TableCaptionComponent} from './fragments/table.caption.component';
import {OrderListModule} from 'primeng/orderlist';
import {ServiceDomainsComponent} from './servicedmain/service-domains.component';
import {ServiceDomainsStatsComponent} from './servicedmain/service-domains.stats.component';
import {ServiceDomainsEntityListComponent} from './servicedmain/service-domains.entity.list.component';
import {ArisRowInfoComponent} from './billing/aris.row.info.component';
import {ServiceDomainRowInfoComponent} from './servicedmain/row/service-domain.row.info.component';
import {ServiceDomainClustersCardComponent} from './servicedmain/cards/service-domain.clusters.card.component';
import {DividerModule} from 'primeng/divider';
import {ServiceDomainLinksCardComponent} from './servicedmain/cards/service-domain.links.card.component';
import {DomainDetailsComponent} from './servicedmain/details/domain-details.component';
import {DomainDetailsUptimeComponent} from './servicedmain/details/domain.details.uptime.component';
import {DomainDetailsNetworkComponent} from './servicedmain/details/domain.details.network.component';
import {DomainDetailsAlertsComponent} from './servicedmain/details/domain.details.alerts.component';
import {DomainDetailsEventsComponent} from './servicedmain/details/domain.details.events.component';
import {TabViewModule} from 'primeng/tabview';
import {TagModule} from 'primeng/tag';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ServiceDomainRowInfoLinksComponent} from './servicedmain/row/service-domain.row.info.links.component';
import {NetworkPolicySheetComponent} from './servicedmain/row/sheets/network.policy.sheet.components';
import {QuotaSheetComponent} from './servicedmain/row/sheets/quota.sheet.component';
import {ServiceDomainDeploymentEnvChart} from './servicedmain/charts/service.domain.deployment.env.chart';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {ServiceDomainParticipantsComponent} from './servicedmain/row/service.domain.participants.component';
import {CentralServicesStatsComponent} from './centralservices/central-services.stats.component';
import {CentralServicesComponent} from './centralservices/central-services.component';

const COMPONENTS = [
  CentralServicesComponent,
  CentralServicesStatsComponent,
  ServersListComponent,
  ArisCostComponent,
  DomainDetailsComponent,
  DomainDetailsEventsComponent,
  DomainDetailsAlertsComponent,
  DomainDetailsUptimeComponent,
  DomainDetailsNetworkComponent,
  ServiceDomainsStatsComponent,
  ServiceDomainsEntityListComponent,
  ServiceDomainsComponent,
  ArisRowInfoComponent,
  ServiceDomainLinksCardComponent,
  ServiceDomainClustersCardComponent,
  ServiceDomainRowInfoComponent,
  ServiceDomainRowInfoLinksComponent,
  ArisStatsComponent,
  ArisEntityListComponent,
  TableCaptionComponent,
  ServersStatsComponent,
  ServersComponent,
  CapacityComponent,
];
const COMPONENTS_DYNAMIC = [ServiceDomainParticipantsComponent,ServiceDomainDeploymentEnvChart, NetworkPolicySheetComponent, QuotaSheetComponent];

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
    TabViewModule,
    TagModule,
    OverlayPanelModule,
    OrganizationChartModule,
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class CloudvisionModule {
}
