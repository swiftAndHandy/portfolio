import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReferenceBoxComponent } from "./reference-box/reference-box.component";

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslateModule, CommonModule, ReferenceBoxComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  referenceGivers: [string, string, string] = [
    'Phillip Sauer',
    'Phillip Sauer',
    'Phillip Sauer',
  ];
  
  currentRef: number = 1;

  referenceId(index: number): string {
    return `reference-no${index}`;
  }

  updateCurrentReference(addValue: number, oldValue: number) {
    this.currentRef += addValue;
    if (this.currentRef >= this.referenceGivers.length) {
      this.currentRef = 0;
    } else if (this.currentRef < 0) {
      this.currentRef = this.referenceGivers.length - 1;
    }
    this.toggleQuotes(oldValue);
  }

  toggleQuotes(oldValue: number) {
    const quoteImages = document.querySelectorAll('[id^="quote"]') as NodeListOf<HTMLElement>;
    quoteImages.forEach(image => {
      let imageId = Number(image.id.split('quote')[1]);
      if ((this.currentRef - 2) * -1 === imageId) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }


    });

  }

  previous() {
    this.updateCurrentReference(-1, this.currentRef);
    const references = document.querySelectorAll('[id^="reference-"]') as NodeListOf<HTMLElement>;
    const lastRefId = references.length - 1;
    references.forEach(ref => {
      const id = Number(ref.id.split('no')[1]);
      let value = this.currentTranslateX(ref);
      value -= 100;
      this.animateReference(ref, id, value, lastRefId, 'prev');
    });
  }

  next() {
    this.updateCurrentReference(1, this.currentRef);
    const references = document.querySelectorAll('[id^="reference-"]') as NodeListOf<HTMLElement>;
    const lastRefId = references.length - 1;
    references.forEach(ref => {
      const id = Number(ref.id.split('no')[1]);
      let value = this.currentTranslateX(ref);
      value += 100;
      this.animateReference(ref, id, value, lastRefId, 'next');
    });
  }

  currentTranslateX(ref: HTMLElement): number {
    let value = Number(ref.style.transform.split(/[()%]/)[1]);
    value = Number.isNaN(value) ? 0 : value;
    return value;
  }

  animateReference(ref: HTMLElement, id: number, transX: number, lastRefId: number, direction: 'prev' | 'next') {
    const base = id + 1;
    if (direction === 'prev') {
      if (transX <= base * -100) {
        ref.style.transform = `translate(${(lastRefId * 100) - (id * 100)}%, 0%)`;
      } else {
        ref.style.transform = `translate(${(transX)}%, 0%)`;
      }
    } else if (direction === 'next') {
      if (transX >= (3 - id) * 100) {
        ref.style.transform = `translate(${-(lastRefId * 100) + ((3 - base) * 100)}%, 0%)`;
      } else {
        ref.style.transform = `translate(${(transX)}%, 0%)`;
      }
    }
  }
}
