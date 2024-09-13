import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss'
})
export class ToggleComponent {
  constructor(public translate: TranslateService) {
  }

  toggleLanguage() {
    if (this.translate.currentLang === 'de') {
      this.translate.use('en');
    } else {
      this.translate.use('de');
    }
  }
}
