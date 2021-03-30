import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-table-caption-component',
  templateUrl: 'table.caption.component.html',
})
export class TableCaptionComponent implements OnInit {

  @Output() navChanged    = new EventEmitter<string>();
  @Output() searchChanged = new EventEmitter<string>();
  @Output() exportChanged = new EventEmitter<string>();

  @Input() showNavigation: boolean = true;
  @Input() showSearch: boolean = true;
  @Input() showExport: boolean = true;
  @Input() entities: any[];
  @Input() table: any;
  @Input() title: string = '';
  first = 0;
  rows = 10;
  ngOnInit(): void {
  }

  next() {
    this.navChanged.emit('next');
  }

  prev() {
    this.navChanged.emit('prev');
  }

  reset() {
    this.navChanged.emit('reset');
  }

  public isLastPage(): boolean {
    return this.entities ? this.first === this.entities.length - this.rows : true;
  }

  public isFirstPage(): boolean {
    return this.entities ? this.first === 0 : true;
  }

  exportExcel() {
    this.exportChanged.emit('excel');

  }
}
