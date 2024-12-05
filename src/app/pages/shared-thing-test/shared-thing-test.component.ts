import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { StatusComponent } from '../shared/status/status.component';
import { TableComponent } from '../shared/table/table.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shared-thing-test',
  standalone: true,
  imports: [ButtonComponent,StatusComponent,
    TableComponent

  ],
  templateUrl: './shared-thing-test.component.html',
  styleUrl: './shared-thing-test.component.scss'
})
export class SharedThingTestComponent {


  constructor(private httpClient:HttpClient){

  }

  // table
  tableData  = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  $api = (e) => {
    this.httpClient.get('https://dummyjson.com/products',{params:{}})
  }
  headers = [
    {label:'Position',value:'position',sort:true,order:'asc'},
    {label:'Name',value:'name'},
    {label:'Weight',value:'weight'},
    {label:'Symbol',value:'symbol'},
  ]
  
}
