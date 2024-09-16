import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReferenceBoxComponent } from "./reference-box/reference-box.component";
import { RefService } from '../../services/ref.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslateModule, CommonModule, ReferenceBoxComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  @ViewChildren(ReferenceBoxComponent) referenceBoxes!: QueryList<ReferenceBoxComponent>;

  constructor(public refService: RefService) { }

  updateCurrentReference(addValue: number) {
    this.refService.currentRef += addValue;
    if (this.refService.currentRef >= this.refService.referenceGivers.length) {
      this.refService.currentRef = 0;
    } else if (this.refService.currentRef < 0) {
      this.refService.currentRef = this.refService.referenceGivers.length - 1;
    }
  }

  updateTranslateX(id: number): any {
    let currentTranslateX: number;
    const base = id + 1;
    const lastRefId = this.refService.referenceGivers.length - 1;
    currentTranslateX = this.referenceBoxes ? this.referenceBoxes.get(id)!.currentTranslateX() : 0;
    switch (this.refService.direction) {
      case 'prev':
        return this.translatePrev(currentTranslateX, lastRefId, id);
      case 'next':
        return this.translateNext(currentTranslateX, lastRefId, id);
    }
  }

  translatePrev(currentTranslateX: number, lastRefId: number, id: number) {
    let modificator: number = id + 1;
    let updatedTranslateX = currentTranslateX + 100;
    if (updatedTranslateX >= (lastRefId + 1 - id) * 100) {
      return { transform: `translateX(${-(lastRefId * 100) + ((lastRefId + 1 - modificator) * 100)}%)` };
    } else {
      return { transform: `translateX(${(updatedTranslateX)}%)` };
    }
  }

  translateNext(currentTranslateX: number, lastRefId: number, id: number) {
    let modificator: number = id + 1;
    let updatedTranslateX = currentTranslateX - 100;
    if (updatedTranslateX <= modificator * -100) {
      return { transform: `translateX(${(lastRefId * 100) - (id * 100)}%)` };
    } else {
      return { transform: `translateX(${(updatedTranslateX)}%)` };
    }
  };

  previousButton() {
    this.updateCurrentReference(-1);
    this.refService.direction = 'prev';
  }

  nextButton() {
    this.updateCurrentReference(1);
    this.refService.direction = 'next';
  }

  currentTranslateX(ref: HTMLElement): number {
    let value = Number(ref.style.transform.split(/[()%]/)[1]);
    value = Number.isNaN(value) ? 0 : value;
    return value;
  }

}
