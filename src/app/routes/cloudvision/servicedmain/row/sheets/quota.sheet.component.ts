import {Component, Inject, OnInit} from '@angular/core';
import {Quota} from '../../../entities';
import {HttpClient} from '@angular/common/http';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import {URL_SERVICE_DOMAIN_QUOTA} from '../../../consts';

@Component({
  selector: 'quota-sheet-component',
  template: `
    <mat-card>
      <mat-card-title class="f-s-12 f-w-100">
        Quota by CD
      </mat-card-title>  <!-- Statistics -->
      <mat-card-content>
        <mat-tab-group dynamicHeight>
          <mat-tab *ngFor="let tab of tabs" [disabled]="tab.disabled">
            <ng-template mat-tab-label>{{tab.label.toUpperCase()}}</ng-template>
            <mat-list>
              <mat-list-item *ngFor="let entry of getForEnv(tab.label)">
                <h3 matLine>
                  <mat-chip-list>
                    <mat-chip style="border-radius: 0" color="{{tab.label === 'dev' || tab.label === 'staging' ? 'accent' : 'primary'}}"  selected="true">CPU : {{entry.cpu}}</mat-chip>
                    <mat-chip style="border-radius: 0" color="{{tab.label === 'dev' || tab.label === 'staging' ? 'accent' : 'primary'}}"  selected="true">MEMORY : {{entry.memory}}</mat-chip>
                    <mat-chip style="border-radius: 0" color="{{tab.label === 'dev' || tab.label === 'staging' ? 'accent' : 'primary'}}"  selected="true">STORAGE : {{entry.storage}}</mat-chip>
                  </mat-chip-list>
                </h3>
              </mat-list-item>
            </mat-list>
          </mat-tab>
        </mat-tab-group>

      </mat-card-content>
    </mat-card>
  `,
})
export class QuotaSheetComponent implements OnInit {
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
  quotas: Quota[];
  domain_name: string;
  loading: boolean = true;

  constructor(private httpClient: HttpClient, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    console.log(data);
  }

  ngOnInit() {
    this.domain_name = this.data.domain_name;
    this.httpClient.get<Quota[]>(URL_SERVICE_DOMAIN_QUOTA + this.domain_name).subscribe(res => {
      this.quotas = res;
      this.loading = false;
    })
  }

  public getForEnv(env: string): Quota[] {
    if (this.quotas) {
      return this.quotas.filter(a => a.env === env);

    } else {
      return [];
    }
  }

}
