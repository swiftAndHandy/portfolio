import { Component } from '@angular/core';
import { ToggleComponent } from "../toggle/toggle.component";
import { LinkListComponent } from "../link-list/link-list.component";

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [ToggleComponent, LinkListComponent],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {

}
