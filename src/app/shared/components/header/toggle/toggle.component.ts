import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RefService } from '../../../../services/ref.service';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss'
})
export class ToggleComponent {
  constructor(public translate: TranslateService, public refs: RefService) {
  }

  toggleLanguage() {
    if (this.translate.currentLang === 'de') {
      this.translate.use('en');
    } else {
      this.translate.use('de');
    }
  }

  returnNewLanguage():string {
    switch (this.translate.currentLang) {
      case 'de': 
        return 'language.english';
      case 'en':
        return 'language.german';
      default:
        return 'language.german';
    }
  }
}
