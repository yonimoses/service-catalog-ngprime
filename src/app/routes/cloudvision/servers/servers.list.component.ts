import {Component, Inject, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractTableList} from '../abstract.table.list';
import {Server} from '../entities';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ApexChart, ApexFill, ApexNonAxisChartSeries, ApexResponsive, ApexStroke, ChartComponent} from 'ng-apexcharts';
// import * as data from 'customers.json';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  stroke: ApexStroke;
  fill: ApexFill;
};

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-servers-list-component',
  templateUrl: 'servers.list.component.html',
  styleUrls: ['../table-styles.scss', 'servers.list.component.scss'],
})
export class ServersListComponent extends AbstractTableList<Server> {
  cpu = 0;
  mem = 0;
  storage = 0;


  constructor(httpClient: HttpClient, public dialog: MatDialog, public snackBar: MatSnackBar) {
    super(httpClient);
  }

  ngOnInit() {

    // this.cpu = this.servers.map(aa => aa.cpu * 1). reduce((server, currentValue) => server + currentValue,0);
    // this.mem = this.servers.map(aa => aa.mem * 1).reduce((server, currentValue) => server + currentValue,0);
    // this.storage = this.servers.map(aa => aa.storage * 1).reduce((server, currentValue) => server + currentValue,0);
  }

  getFilters() {
    return ['group', 'hostname', 'ipaddress'];
  }

  getExportedColumns(): string[] {


    return ['dns', 'cpu', 'mem', 'storage', 'group', 'hostname', 'ipaddress'];
  }


  newServer() {
    /**
     * @todo yoni - should we implement this?
     */
    this.snackBar.open('Not implemented yet', '', {duration: 2000});
    // this.dialog.open(AddNewServerFormComponent);
  }

  openPlot() {
    /**
     * @todo yoni - should we implement this?
     */
    // this.snackBar.open('Not implemented yet', '', {duration: 2000});
    this.dialog.open(ServersPlotComponent, {
      height: '600px',
      width: '600px', data: this.entities
    });
  }
}

@Component({
  selector: 'add-new-server-form',
  styles: [
      `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: 'add-new-server-form.html',
})
export class AddNewServerFormComponent {
}

@Component({
  selector: 'servers-plot-component',
  styles: [
      `
      .demo-full-width {
        width: 100%;
      }
    `,
  ],
  templateUrl: 'servers-plot-component.html',
})
export class ServersPlotComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Server[]) {

    let series = new Map<string, number>();
    console.log(this.data);
    this.data.forEach(server => {
      if (series.get(server.group) === undefined) {
        series.set(server.group, 1);
      } else {
        series.set(server.group, series.get(server.group) + 1);
      }
    });

    console.log(series);

    this.chartOptions = {
      series: Array.from(series.values()),
      labels: Array.from(series.keys()),
      chart: {
        width: 500,
        height: 500,
        type: 'polarArea'
      },
      stroke: {
        colors: ['#fff']
      },
      fill: {
        opacity: 0.8
      },
      responsive: [
        {
          breakpoint: 2000,
          options: {
            chart: {
              width: 500,
              height: 500,
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    };
  }

  // data: any;
  //
  // constructor(data: any) {
  //   console.log(data);
  //   this.data = {
  //     datasets: [{
  //       data: [
  //         11,
  //         16,
  //         7,
  //         3,
  //         14
  //       ],
  //       backgroundColor: [
  //         "#FF6384",
  //         "#4BC0C0",
  //         "#FFCE56",
  //         "#E7E9ED",
  //         "#36A2EB"
  //       ],
  //       label: 'My dataset'
  //     }],
  //     labels: [
  //       "Red",
  //       "Green",
  //       "Yellow",
  //       "Grey",
  //       "Blue"
  //     ]
  //   }
  // }
}
