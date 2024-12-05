import { AsyncPipe, NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '../../../appModule/material/material.module';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-tests',
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
    ButtonComponent
  ],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss'
})
export class TestsComponent {
  themeModel?:string='light';
  theme(){
    if(this.themeModel==='light'){
      document.body.classList.remove('dark-mode');
    }else{
      document.body.classList.add("dark-mode");
    }
  }

    // Button Toggle | Tabs
    fontStyle?: string;
    hideSingleSelectionIndicator = signal(false);
    toggleSingleSelectionIndicator() {
      this.hideSingleSelectionIndicator.update(value => !value);
    }
}
