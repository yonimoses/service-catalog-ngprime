import {Directive, Input, OnInit} from '@angular/core';
import {Table} from 'primeng/table';
import {HttpClient} from '@angular/common/http';
import {TableRow} from './entities';
import * as autoTable from 'jspdf-autotable';
declare let jsPDF;
@Directive()
export abstract class AbstractTableList<T extends TableRow> implements OnInit {
  @Input() entities: T[];

  @Input() loading: boolean = true;
  first = 0;
  rows = 10;

  constructor(public httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  abstract getFilters(): string[];

  abstract getExportedColumns(): string[];

  public clear(table: Table) {
    table.clear();
  }

  public next() {
    this.first = this.first + this.rows;
  }

  public prev() {
    this.first = this.first - this.rows;
  }

  public reset() {
    this.first = 0;
  }

  public isLastPage(): boolean {
    return this.entities ? this.first === this.entities.length - this.rows : true;
  }

  public isFirstPage(): boolean {
    return this.entities ? this.first === 0 : true;
  }


  public getExportedFileName() :string{
    return 'entities.pdf';
  }

  exportPdf() {

    // debugger;
    // const doc = new jsPDF();
    // doc.autoTable(this.getExportedColumns(), this.entities);
    // doc.save(this.getExportedFileName());
  }

  exportExcel() {
    import('xlsx').then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.entities);
      const workbook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
      const excelBuffer: any = xlsx.write(workbook, {bookType: 'xlsx', type: 'array'});
      this.saveAsExcelFile(excelBuffer, 'entities');
    });
  }

  navChanged(obj) {
    switch (obj) {
      case 'prev' :
        this.prev();
        break;
      case 'next' :
        this.next();
        break;
      case 'reset' :
        this.reset();
        break;
      default :
        console.log('navChanged with ' + obj);
    }
  }

  exportChanged(obj) {
    switch (obj) {
      case 'excel' :
        this.exportExcel();
        break;
      case 'pdf' :
        this.exportPdf();
        break;
      default :
        console.log('exportChanged with ' + obj);
    }
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then(FileSaver => {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
  }
}
