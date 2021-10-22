import { Component } from '@angular/core';
const RESPONSE_API: any[] = [
  { id: 1, info1: 'A', info2: 1.1, info3: 'A', info4: '1' },
  { id: 2, info1: 'B', info2: 2.2, info3: 'B', info4: null },
  { id: 3, info1: 'C', info2: 3.3, info3: 'C', info4: '-' },
  { id: 4, info1: 'D', info2: 4.4, info3: 'D', info4: '+' },
  { id: 5, info1: 'E', info2: 5.5, info3: 'E', info4: '/' },
];
@Component({
  selector: 'table-dynamic-columns-example',
  styleUrls: ['table-dynamic-columns-example.css'],
  templateUrl: 'table-dynamic-columns-example.html',
})
export class TableDynamicColumnsExample {
  displayedColumns: string[] = [];
  data: any[] = RESPONSE_API;
  ngOnInit() {
    this.definirColunas();
  }
  definirColunas() {
    RESPONSE_API.length > 0
      ? (this.displayedColumns = Object.keys(RESPONSE_API[0]))
      : (this.displayedColumns = ['nenhum registro encontrado!']);
  }
}
