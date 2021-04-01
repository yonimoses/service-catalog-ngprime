import {Component, Inject, OnInit} from '@angular/core';
import {NetworkConnection} from '../../../entities';
import {HttpClient} from '@angular/common/http';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import {URL_SERVICE_DOMAIN_NETWORK} from '../../../consts';

@Component({
  selector: 'network-policy-sheet-component',
  template: `
    <mat-card>
      <mat-card-title class="f-s-12 f-w-100">
        Network Policy by CD
      </mat-card-title>  <!-- Statistics -->
      <mat-card-content>
        <mat-tab-group dynamicHeight>
          <mat-tab *ngFor="let tab of tabs" [disabled]="tab.disabled">
            <ng-template mat-tab-label>{{tab.label.toUpperCase()}}</ng-template>
            <mat-list>
              <mat-list-item *ngFor="let entry of getForEnv(tab.label)">
                <!--            <img matListAvatar [src]="message.img" alt="">-->
                <h3 matLine>
<!--                    <p-tag severity="info" value="{{entry.dns}}"></p-tag> &nbsp;-->
<!--                  &nbsp;<p-tag severity="info" value="{{entry.dns}}"></p-tag>-->

                  <mat-chip-list>
                    <mat-chip style="border-radius: 0" color="accent" selected="true">{{entry.dns}}</mat-chip>
                    <mat-chip style="border-radius: 0" color="accent" selected="true">{{entry.dns}}</mat-chip>
                  </mat-chip-list>
                </h3>
                <!--              <p matLine>-->
                <!--                <span>{{entry.address}} </span>-->
                <!--              </p>-->
              </mat-list-item>
            </mat-list>
          </mat-tab>
        </mat-tab-group>

      </mat-card-content>
    </mat-card>
  `,
})
export class NetworkPolicySheetComponent implements OnInit {
  tabs = [{label: 'dev'},
    { label: 'staging'},
    { label: 'preprod'},
    { label: 'prod'},
  ];
  network_connections: NetworkConnection[];
  domain_name: string;
  loading: boolean = true;

  constructor(private httpClient: HttpClient, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    console.log(data);
  }
  ngOnInit() {
    this.domain_name = this.data.domain_name;
    console.log(this.domain_name);

    this.httpClient.get<NetworkConnection[]>(URL_SERVICE_DOMAIN_NETWORK + this.domain_name).subscribe(res => {
      this.network_connections = res;
      this.loading = false;
    })
  }

  public getForEnv(env: string): NetworkConnection[] {
    if(this.network_connections){
      return this.network_connections.filter(a => a.env === env);
    }else{
      return [];
    }
  }

}
