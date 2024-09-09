import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  @Input() text: string = 'Demo-Button';
  @Input() type: 'regular' | 'link' = 'regular';
  @Input() bg: 'transparent' | 'dark' = 'transparent';
}
