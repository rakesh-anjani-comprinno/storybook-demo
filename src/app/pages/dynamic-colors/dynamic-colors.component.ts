import { Component } from '@angular/core';
import { MaterialModule } from '../../../appModule/material/material.module';

@Component({
  selector: 'app-dynamic-colors',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './dynamic-colors.component.html',
  styleUrl: './dynamic-colors.component.scss'
})
export class DynamicColorsComponent {

}
