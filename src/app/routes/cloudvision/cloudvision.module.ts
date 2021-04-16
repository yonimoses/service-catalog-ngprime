import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {AddNewServerFormComponent, ServersListComponent, ServersPlotComponent} from './servers/servers.list.component';
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
import {ServiceDomainsComponent} from './service-domain/service-domains.component';
import {ServiceDomainsStatsComponent} from './service-domain/service-domains.stats.component';
import {ServiceDomainsEntityListComponent} from './service-domain/service-domains.entity.list.component';
import {ArisRowInfoComponent} from './billing/aris.row.info.component';
import {ServiceDomainRowInfoComponent} from './service-domain/row/service-domain.row.info.component';
import {ServiceDomainClustersCardComponent} from './service-domain/cards/service-domain.clusters.card.component';
import {DividerModule} from 'primeng/divider';
import {ServiceDomainLinksCardComponent} from './service-domain/cards/service-domain.links.card.component';
import {DomainDetailsComponent} from './service-domain/details/domain-details.component';
import {DomainDetailsUptimeComponent} from './service-domain/details/domain.details.uptime.component';
import {DomainDetailsNetworkComponent} from './service-domain/details/domain.details.network.component';
import {DomainDetailsAlertsComponent} from './service-domain/details/domain.details.alerts.component';
import {DomainDetailsEventsComponent} from './service-domain/details/domain.details.events.component';
import {TabViewModule} from 'primeng/tabview';
import {TagModule} from 'primeng/tag';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ServiceDomainRowInfoLinksComponent} from './service-domain/row/service-domain.row.info.links.component';
import {NetworkPolicySheetComponent} from './service-domain/row/sheets/network.policy.sheet.components';
import {QuotaSheetComponent} from './service-domain/row/sheets/quota.sheet.component';
import {ServiceDomainDeploymentEnvChart} from './service-domain/charts/service.domain.deployment.env.chart';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {ServiceDomainParticipantsComponent} from './service-domain/row/service.domain.participants.component';
import {CentralServicesStatsComponent} from './central-services/central-services.stats.component';
import {CentralServicesComponent} from './central-services/central-services.component';
import {CentralServicesListComponent} from './central-services/central-services.list.component';
import {ChartModule} from 'primeng/chart';
import {NgApexchartsModule} from 'ng-apexcharts';
import {EventsComponent} from './events/events.component';
import {EventsListComponent} from './events/events.list.component';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {DialogModule} from 'primeng/dialog';
import {KindPipe, PrettyDateDiff} from './events/event.pipes';
import {SnykSummaryReportComponent} from './security/snyk.summary.report.component';
import {SecurityDashboardComponent} from './security/security.dashboard.component';
import {CheckmarxSummaryReportComponent} from './security/checkmarx.summary.report.component';
import {SecurityNoDataComponent} from './security/security.no.data.component';
import {SecurityReportToolbarComponent} from './security/security.report.toolbar.component';

const COMPONENTS = [
  SecurityNoDataComponent, SecurityReportToolbarComponent,SecurityDashboardComponent,CheckmarxSummaryReportComponent,SnykSummaryReportComponent,
  EventsComponent,EventsListComponent,
  CentralServicesComponent,
  CentralServicesListComponent,
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
const COMPONENTS_DYNAMIC = [
  ServersPlotComponent,AddNewServerFormComponent,
  ServiceDomainParticipantsComponent,ServiceDomainDeploymentEnvChart, NetworkPolicySheetComponent, QuotaSheetComponent];

@NgModule({
  imports: [
    SharedModule,
    NgxJsonViewerModule,
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
    NgApexchartsModule,
    DialogModule
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC,PrettyDateDiff,KindPipe],
  entryComponents: COMPONENTS_DYNAMIC,
  exports: [
    TableCaptionComponent
  ]
})
export class CloudvisionModule {
}
