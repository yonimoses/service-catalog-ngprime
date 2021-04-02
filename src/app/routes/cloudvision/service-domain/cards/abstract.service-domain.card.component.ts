import {Directive, Input, OnInit} from '@angular/core';
import {ServiceDomain} from '../../entities';
import {HttpClient} from '@angular/common/http';

@Directive()
export abstract class AbstractServiceDomainCardComponent implements OnInit {

  @Input() entity: ServiceDomain;

  constructor(httpClient: HttpClient) {
  }

  ngOnInit() {


  }

  abstract getCardHeader(): string;
}
