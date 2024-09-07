import { Component } from '@angular/core';
import { ButtonsComponent } from "../../shared/components/buttons/buttons.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonsComponent, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
