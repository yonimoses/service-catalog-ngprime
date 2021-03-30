import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceDomain} from '../../entities';
import {URL_SERVICE_DOMAIN_NETWORK} from '../../consts';

export interface NetworkConnection {
  dns: string;
  env: string;
  name: string;
  address: string;
}

@Component({
  selector: 'app-domain-details-network-component',
  templateUrl: 'domain.details.network.component.html',
})
export class DomainDetailsNetworkComponent implements OnInit {
  total = 0;
  domain_name;
  entity: ServiceDomain;
  network_connection: NetworkConnection[];
  loading: boolean = true;
  tabs = [
    {
      label: 'dev',
    },

    {
      label: 'staging',
    },
    {
      label: 'preprod',
    },
    {
      label: 'prod',
    },
  ];

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.domain_name = this.route.snapshot.paramMap.get('domain_name');
    console.log(this.domain_name);

    this.httpClient.get<NetworkConnection[]>(URL_SERVICE_DOMAIN_NETWORK + this.domain_name).subscribe(res => {
      this.network_connection = res;
      this.loading = false;
    })
  }

  public getForEnv(env: string): NetworkConnection[] {
    return this.network_connection.filter(a => a.env === env);
  }
}
