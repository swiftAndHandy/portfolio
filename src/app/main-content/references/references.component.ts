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

  referenceGivers: string[] = [
    'Phillip Sauer',
    'Phillip Sauer',
    'Phillip Sauer',
  ];

  returnActiveBullet(): boolean {
    return false;
  }

  referenceId(index: number): string {
    return `reference-no${index}`;
  }

  previous() {
    const references = document.querySelectorAll('[id^="reference-"]') as NodeListOf<HTMLElement>;
    references.forEach(ref => {
      const id = Number(ref.id.split('no')[1]);
      let value = this.currentTranslateX(ref);
      value -= 100;
      this.animateReference(ref, id, value, 'prev');

      //ref.style.transform = `translateX(${value}%)`;
    });
  }

  next() {
    const references = document.querySelectorAll('[id^="reference-"]') as NodeListOf<HTMLElement>;
    references.forEach(ref => {
      const id = Number(ref.id.split('no')[1]);
      let value = this.currentTranslateX(ref);
      value += 100;
      this.animateReference(ref, id, value, 'next');
    });
  }

  currentTranslateX(ref: HTMLElement): number {
    let value = Number(ref.style.transform.split(/[()%]/)[1]);
    value = Number.isNaN(value) ? 0 : value;
    return value;
  }

  animateReference(ref: HTMLElement, id: number, transX: number, direction: 'prev' | 'next') {
    const base = id + 1;
    if (direction === 'prev') {
      if (transX <= base * -100) {
        ref.style.transform = `translate(${200 - (id * 100)}%, 0%)`;
      } else {
        ref.style.transform = `translate(${(transX)}%, 0%)`;
      }
    } else if (direction === 'next') {
      if (transX >= (3 - id) * 100) {
        ref.style.transform = `translate(${-200 + ((3 - base) * 100)}%, 0%)`;
      } else {
        ref.style.transform = `translate(${(transX)}%, 0%)`;
      }
    }
  }
}
