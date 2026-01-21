import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { MouseComponent } from "./shared/components/mouse/mouse.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, MouseComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private translate: TranslateService, private meta: Meta) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use(navigator.language.split('-')[0]);
    this.setMetaDescription();
  }

  setMetaDescription() {
    const descriptionDe = 'Erfahrener Frontend-Entwickler mit fundierten Kenntnissen in Angular, TypeScript und modernen Webtechnologien. Profitieren Sie von meiner Projekterfahrung und lassen Sie uns gemeinsam Ihre Vision verwirklichen.';
    const descriptionEn = 'Experienced frontend developer with expertise in Angular, TypeScript, and modern web technologies. Benefit from my project experience and let’s bring your vision to life.';

    const description = this.translate.currentLang === 'de' ? descriptionDe : descriptionEn;
    this.meta.updateTag({ name: 'description', content: description });
  }
}
