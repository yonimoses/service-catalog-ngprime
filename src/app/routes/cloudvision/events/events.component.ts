import {Component} from '@angular/core';
import {Table} from 'primeng/table';
import {HttpClient} from '@angular/common/http';
import {AbstractTableDataFetcher} from '../abstract.table.data.fetcher';
import {prettyTimeLaps} from './date.utils';


// import * as data from 'customers.json';
export interface EventPayload {
  service_domain: string;
  env: string;
}

// import * as data from 'customers.json';
export interface EventMessage {
  text: string;
}

// import * as data from 'customers.json';
export interface DCEvent {
  kind: string;
  service_domain?: string;
  status: string;
  payload: EventPayload;
  clusters: string[];
  submitted: string;
  finished: string;
  error_code: string;
  message: EventMessage;
  started: string;
  startedAfter: string;
  took: string;
}


/**
 * {
    "id": 522,
    "kind": "service_domain_quota_change",
    "status": "finished",
    "payload": {
      "env": "dev",
      "after": {
        "spec": {
          "quota": {
            "hard": {
              "requests": {
                "cpu": "600m",
                "memory": "3.6G"
              }
            }
          }
        }
      },
      "quota": null,
      "before": {
        "spec": {
          "quota": {
            "hard": {
              "requests": {
                "cpu": "600m",
                "memory": "3.6Gi"
              }
            }
          }
        }
      },
      "clusters": [
        "aaa",
        "bbb"
      ],
      "service_domain": "card-order"
    },
    "submitted": "2021-04-12T07:06:24.758489",
    "started": "2021-04-12T07:07:32.152",
    "finished": null,
    "error_code": 0,
    "message": {
      "text": ""
    }
  },
 */

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'events-component',
  templateUrl: 'events.component.html',
})
export class EventsComponent extends AbstractTableDataFetcher<DCEvent> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    console.log('ServersComponent ');
  }

  clear(table: Table) {
    table.clear();
  }


  afterDataLoaded() {
    super.afterDataLoaded();
    // this.entities.forEach(entity => {
    //   try {
    //     entity.service_domain = entity.payload.service_domain;
    //     let d = prettyTimeLaps(new Date(entity.submitted), new Date(entity.started));
    //     entity.startedAfter = d;
    //   } catch (e) {
    //     console.log(e)
    //   }
    // });
  }

  public getUrl(): string {
    return 'http://localhost:8080/events';
  }
}
