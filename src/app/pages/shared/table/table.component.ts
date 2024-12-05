import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { NgTemplateOutlet } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'lm-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,MatSortModule,NgTemplateOutlet],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {

  @Input() data!: any[];
  @Input() headers!: any[];
  @Input() templates = {} as any;
  @Input() apiList!:any;
  $api;
  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  public columns!: any[];

  // Related to Paginator
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() pageSize: number = 10;
  @Input() pageLength!: number;
  @Input() pageSizeOptions: number[] = [5, 10, 20];
  @Input() showFirstLastButtonsVisible: boolean = true;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(

  ) { }

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource(this.data);
    // this.columns = this.headers.map((e) => e?.value);
    this.listRequest();
  }

  rowData(row) {
    console.log("rowDataClicked", row);
  }

  applyFilterToDataSource(filterValue){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private listRequest() {
    // this.$api = this.apiList({ page: this.paginator.page, size: this.paginator.pageSize,  sort:this.sort. }).pipe(
    //   tap((e: any[]) => {
    //     if (this.isListCount && e) {
    //       this.$countApi = of(e.length);
    //     }
    //   })
    // );
  }

}
