import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'lm-button',
  standalone: true,
  imports: [MatButtonModule,MatIcon],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = "Submit";
  @Input() type: "button" | "submit" = "button";
  @Input() color: "primary" | "accent" | "warn" = "primary";
  @Input() leftIcon: string | undefined;
  @Input() rightIcon: string | undefined;
  @Input() disabled: boolean = false;
}
