import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from "./toggle/toggle.component";
import { BurgerMenuComponent } from "./burger-menu/burger-menu.component";
import { LinkListComponent } from "./link-list/link-list.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ToggleComponent, BurgerMenuComponent, LinkListComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  displayBurgerMenu: boolean = false;

  showBurgerMenu() {
    this.displayBurgerMenu = true;
  }

  hideBurgerMenu() {
    this.displayBurgerMenu = false;
  }
}
