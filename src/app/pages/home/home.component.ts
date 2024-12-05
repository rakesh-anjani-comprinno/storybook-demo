import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { CardComponent } from '../card/card.component';
import { ChipsComponent } from '../chips/chips.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputComponent,ButtonComponent,CardComponent,ChipsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
