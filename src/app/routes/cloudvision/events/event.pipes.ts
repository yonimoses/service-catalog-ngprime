import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of, isObservable } from 'rxjs';
import {DCEvent} from './events.component';
import {prettyTimeLaps} from './date.utils';
const KIND_MAP: Map<string, string> = new Map();
KIND_MAP.set('service_domain_clusters_change', 'Clusters Change');
KIND_MAP.set('service_domain_quota_change', 'Quota Change');


@Pipe({ name: 'asEventKind' })
export class KindPipe implements PipeTransform {
  transform(kind: string): string {
    let x = KIND_MAP.get(kind);
    return x !== undefined ? x : kind;
  }
}

@Pipe({ name: 'asPrettyDateDiff' })
export class PrettyDateDiff implements PipeTransform {
  transform(d1:string, d2:string): string {
    let d = prettyTimeLaps(new Date(d1), new Date(d2));
    return d;
  }
}
