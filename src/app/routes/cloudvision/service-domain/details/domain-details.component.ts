import {Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceDomain} from '../../entities';

@Component({
  selector: 'app-domain-details-component',
  templateUrl: 'domain.details.component.html',
})
export class DomainDetailsComponent implements OnInit {
  total = 0;
  @ViewChildren('iframe') iframes: ElementRef[];

  ngAfterViewInit() {
    let src =  'http://localhost:3000/d-solo/eea-9_sik/alertmanager?orgId=1&refresh=5m&from=1617082314289&to=1617125514289&var-datasource=Prometheus&var-instance=All&panelId=4';
    // let src = 'http://localhost:3000/d/eea-9_sik/alertmanager?orgId=1&refresh=5m&from=1617081123497&to=1617124323497&var-datasource=Prometheus&var-instance=All&viewPanel=4';
    this.iframes.forEach(frame=>{
      frame.nativeElement.setAttribute('src', src);
    })
  }

  entity: ServiceDomain;
  loading: boolean = true;

  constructor(httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {


    const domain_name = this.route.snapshot.paramMap.get('domain_name');


  }


}
