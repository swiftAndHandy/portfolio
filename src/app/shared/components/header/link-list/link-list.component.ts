import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../header.component';

@Component({
  selector: 'app-link-list',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './link-list.component.html',
  styleUrl: './link-list.component.scss'
})
export class LinkListComponent {
  constructor(public burgerMenu: HeaderComponent) {
  }
}
