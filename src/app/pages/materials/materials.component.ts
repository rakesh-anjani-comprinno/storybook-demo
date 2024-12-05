import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MaterialModule } from '../../../appModule/material/material.module';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AsyncPipe, NgFor } from '@angular/common';
import { FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { map, Observable, startWith } from 'rxjs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ErrorStateMatcher, provideNativeDateAdapter } from '@angular/material/core';
import { TableComponent } from '../shared/table/table.component';
import { StatusComponent } from '../shared/status/status.component';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

// checkbox
export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'app-materials',
  standalone: true,
  imports: [
    MaterialModule,
    FormsModule,
    // FormControl,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatBadgeModule, 
    MatButtonModule,     
    MatIconModule,
    AsyncPipe,
    ReactiveFormsModule,
    NgFor,
    TableComponent,
    StatusComponent
  ],
  templateUrl: './materials.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './materials.component.scss',
 
})
export class MaterialsComponent  implements OnInit{

  themeModel?:string='light';
  theme(){
    if(this.themeModel==='light'){
      document.body.classList.remove('dark-mode');
    }else{
      document.body.classList.add("dark-mode");
    }
  }

  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

  //autocomp;lete
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  // Button Toggle | Tabs
  hideSingleSelectionIndicator = signal(false);
  toggleSingleSelectionIndicator() {
    this.hideSingleSelectionIndicator.update(value => !value);
  }

  //Badge
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  //Button
  fontStyleControl = new FormControl('');
  fontStyle?: string;

  //Card
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;


  // Checkbox
  readonly task = signal<Task>({
    name: 'Parent task',
    completed: false,
    subtasks: [
      {name: 'Child task 1', completed: false},
      {name: 'Child task 2', completed: false},
      {name: 'Child task 3', completed: false},
    ],
  });

  readonly partiallyComplete = computed(() => {
    const task = this.task();
    if (!task.subtasks) {
      return false;
    }
    return task.subtasks.some(t => t.completed) && !task.subtasks.every(t => t.completed);
  });

  update(completed: boolean, index?: number) {
    this.task.update(task => {
      if (index === undefined) {
        task.completed = completed;
        task.subtasks?.forEach(t => (t.completed = completed));
      } else {
        task.subtasks![index].completed = completed;
        task.completed = task.subtasks?.every(t => t.completed) ?? true;
      }
      return {...task};
    });
  }

  // Selection List
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];


  // Input

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  //Table

  ELEMENT_DATA  = [
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
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  displayedColumnsObj  = [
    {label:'Position',value:"position"},
    {label:"Name",value:"name"},
    {label:"weight",value:"weight"},
    {label:"symbol",value:"symbol"}
  ];

  displayedColumns = this.displayedColumnsObj.map((e)=>e.value);

  dataSource = this.ELEMENT_DATA;  
}


@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  standalone:true,
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
  imports: [MatListModule],
})
export class BottomSheetOverviewExampleSheet {
  private _bottomSheetRef =
    inject<MatBottomSheetRef<BottomSheetOverviewExampleSheet>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
