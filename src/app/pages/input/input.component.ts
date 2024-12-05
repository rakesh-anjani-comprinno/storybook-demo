import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatSelectModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input() label: string = 'Enter Text';
  @Input() placeholder: string = 'Type here...';
  @Input() value: string = '';
  
  @Output() valueChange = new EventEmitter<string>();

  isDisabled : Boolean = false;

  onInputChange(event:Event){
    const target = event.target as HTMLInputElement;
    console.log("this is input value",target.value)
  }

}
