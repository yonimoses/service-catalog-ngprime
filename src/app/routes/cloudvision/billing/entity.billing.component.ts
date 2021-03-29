import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Server, { TableRow } from '../entities';
import CapacityEntity from '../entities';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { URL_CAPACITY_ARIS_URL, URL_COST_SERVICES } from '../consts';

// import * as data from 'customers.json';

export interface PricingStats {
  service: string;
  quantity: number;
  price_per_unit: number;
}

@Component({
  selector: 'app-entity-billing-component',
  templateUrl: 'entity.billing.component.html',
})
export class EntityBillingComponent implements OnInit {
  // messages = [
  //   {
  //     img: 'assets/images/avatars/avatar-1.jpg',
  //     subject: 'Hydrogen',
  //     content: `Cras sit amet nibh libero, in gravida nulla.
  //      Nulla vel metus scelerisque ante sollicitudin commodo.`,
  //   },
  //   {
  //     img: 'assets/images/avatars/avatar-2.jpg',
  //     subject: 'Helium',
  //     content: `Cras sit amet nibh libero, in gravida nulla.
  //      Nulla vel metus scelerisque ante sollicitudin commodo.`,
  //   },
  //   {
  //     img: 'assets/images/avatars/avatar-3.jpg',
  //     subject: 'Lithium',
  //     content: `Cras sit amet nibh libero, in gravida nulla.
  //      Nulla vel metus scelerisque ante sollicitudin commodo.`,
  //   },
  //   {
  //     img: 'assets/images/avatars/avatar-4.jpg',
  //     subject: 'Beryllium',
  //     content: `Cras sit amet nibh libero, in gravida nulla.
  //      Nulla vel metus scelerisque ante sollicitudin commodo.`,
  //   },
  //   {
  //     img: 'assets/images/avatars/avatar-6.jpg',
  //     subject: 'Boron',
  //     content: `Cras sit amet nibh libero, in gravida nulla.
  //      Nulla vel metus scelerisque ante sollicitudin commodo.`,
  //   },
  // ];
  entity: CapacityEntity;
  cost_services: any;
  loading: boolean = false;
  stats: PricingStats[];
  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const aris = this.route.snapshot.paramMap.get('aris');
    // const url =  'http://localhost:8080/capacitycity/aris/' + aris;
    // const pricing_units =  'http://localhost:8080/capacity/pricing-units';
    // console.log(aris);
    console.log('Fetching ' + (URL_CAPACITY_ARIS_URL + aris));
    const joinedWithObjectForm$ = forkJoin({
      object: this.httpClient.get<CapacityEntity>(URL_CAPACITY_ARIS_URL + aris),
      cost_services: this.httpClient.get<any>(URL_COST_SERVICES),
    }).subscribe(res => {
      this.entity = res.object;
      this.cost_services = res.cost_services;
      Object.keys(this.entity.usage).forEach(u => {
        this.stats.push({
          service: u,
          price_per_unit: 1,
          quantity: 3, //this.entity.usage.u,
        });
      });
      console.log(this.cost_services);
      console.log(this.entity.usage);
    });
    // this.api.getData()
    //   .subscribe(res => {
    //     console.log(res);
    //     this.data1 = res[0];
    //     this.data2 = res[1];
    //     this.data3 = res[2];
    //     this.data4 = res[3];
    //     this.isLoadingResults = false;
    //   }, err => {
    //     console.log(err);
    //     this.isLoadingResults = false;
    //   });
    // this.httpClient.get<CapacityEntity>(url).subscribe(res =>{
    //   this.entity = res;
    //
    //   console.log(res);
    //   this.loading = false;
    // });
    // this.httpClient.get<any>(pricing_units).subscribe(res =>{
    //   console.log(res);
    // });
    // this.hero$ = this.service.getHero(heroId);
    // history.state.data;
    // console.log(this.entity);
    // if(this.entity == undefined){
    //   this.router.navigate(['/cloudvision/capacity'])
    // }

    // this.stats = [
    //   {
    //     title: 'SONAR LOC',
    //     amount: 1,
    //     subtitle: _ENTITY_PRICING_HELP.get('sonar'),
    //     color: 'bg-indigo-500'
    //   },
    //   {
    //     title: 'Artifactory Storage',
    //     subtitle: _ENTITY_PRICING_HELP.get('artifactory'),
    //     amount: 2,
    //     color: 'bg-blue-500'
    //   },
    //   {
    //     title: 'Bitbucket Contributors',
    //     subtitle: _ENTITY_PRICING_HELP.get('bitbucket'),
    //     amount: 3,
    //     color: 'bg-orange-500'
    //   },
    //   {
    //     title: 'Snyk Contributors',
    //     subtitle: _ENTITY_PRICING_HELP.get('snyk'),
    //     amount: 4,
    //     color: 'bg-orange-500'
    //   },
    //   {
    //     title: 'Checkmarx Contributors',
    //     subtitle: _ENTITY_PRICING_HELP.get('checkmarx'),
    //     amount: 5,
    //     color: 'bg-orange-500'
    //   },
    //   {
    //     title: 'OCP CPU',
    //     subtitle: _ENTITY_PRICING_HELP.get('ocp_cpu'),
    //     amount: 6,
    //     color: 'bg-red-500'
    //   }
    // ]
  }
}
