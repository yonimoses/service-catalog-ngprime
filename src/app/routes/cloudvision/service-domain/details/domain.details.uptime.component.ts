import {Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceDomain} from '../../entities';

@Component({
  selector: 'app-domain-details-uptime-component',
  templateUrl: 'domain.details.uptime.component.html',
})
export class DomainDetailsUptimeComponent implements OnInit {
  total = 0;
  @ViewChild('iframe') iframe: ElementRef;
  domain_name;
  ngAfterViewInit() {
    let src =  'http://localhost:3000/d-solo/eea-9_sik/alertmanager?orgId=1&refresh=5m&from=1617082314289&to=1617125514289&var-datasource=Prometheus&var-instance=All&panelId=4';
    this.iframe.nativeElement.setAttribute('src', src);
  }

  entity: ServiceDomain;
  loading: boolean = true;

  constructor(httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.domain_name = this.route.snapshot.paramMap.get('domain_name');
    console.log(this.domain_name);
  }
}
