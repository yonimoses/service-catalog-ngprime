import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ArisUsageEntity} from '../entities';
import {ActivatedRoute, Router} from '@angular/router';
import {URL_CAPACITY_ARIS_URL, URL_COST_ARIS, URL_COST_SERVICES} from '../consts';
import {AbstractTableList} from '../abstract.table.list';

// import * as data from 'customers.json';

export interface ServiceCost {
  serviceName: string;
  prettyName: string;
  serviceType: string;
  help: string;
  quantity: number;
  pricePerUnit: number;
  total: number;
}

export interface ArisCost {
  arisName: string;
  arisCode: string;
  arisOwner: string;
  services: ServiceCost[];
}

export interface CostStats {
  total: number;
  type: string;
  color: string;
}

@Component({
  selector: 'app-aris-cost-component',
  templateUrl: 'aris.cost.component.html',
})
export class ArisCostComponent extends AbstractTableList<ServiceCost> {
  total = 0;

  getFilters(): string[] {
    return [];
  }

  getExportedColumns(): string[] {
    return ['serviceName', 'serviceType', 'prettyName', 'help', 'quantity', 'pricePerUnit', 'total'];
  }

  entity: ArisUsageEntity;
  loading: boolean = true;
  entities: ServiceCost[] = [];
  arisCost: ArisCost;
  stats: CostStats[];

  constructor(httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
    super(httpClient);
  }

  ngOnInit() {


    const aris = this.route.snapshot.paramMap.get('aris');

    super.ngOnInit();
    console.log('Loading data from  ' + (URL_CAPACITY_ARIS_URL + aris) + ', and ' + URL_COST_SERVICES);
    this.httpClient.get<ArisCost>(URL_COST_ARIS + aris).subscribe(res => {
      this.arisCost = res;
      this.entities = this.arisCost.services;
      this.doStats();
      this.loading = false;
    });


  }

  // private calculateTotal() {
  //   this.entities.forEach(obj => {
  //     this.total += obj.total;
  //   })
  // }

  private calculate(type: string) {
    let _total = 0;
    for (let i = 0; i < this.entities.length; i++) {
      if (type === null || this.entities[i].serviceType === type) {
        _total += this.entities[i].total;
      }
    }
    return _total;
    // this.entities.forEach(obj => {
    //   this.total += obj.total;
    // })
  }

  private doStats() {
    this.stats = [
      {
        total: this.calculate('hardware'),
        color: 'bg-brown-500',
        type: 'hardware',
      },
      {
        total: this.calculate('software'),
        type: 'software',
        color: 'bg-orange-500',

      },
      {
        total: this.calculate(null),
        color: 'bg-green-500',
        type: 'total',
      }
    ];
  }
}
