import { Component } from '@angular/core';
import { ButtonsComponent } from "../../shared/components/buttons/buttons.component";
import { TranslateModule } from '@ngx-translate/core';
import { MarqueeComponent } from "./marquee/marquee.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonsComponent, TranslateModule, MarqueeComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss', './hero-link-bar.scss']
})
export class HeroComponent {

}
