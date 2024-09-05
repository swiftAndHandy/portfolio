import { Component } from '@angular/core';
import { ButtonsComponent } from "../../shared/components/buttons/buttons.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonsComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
