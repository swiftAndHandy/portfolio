import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StringUtils } from '../../../utils/string-utils.utils';
import { CommonModule } from '@angular/common';
import { RefService } from '../ref.service';

@Component({
  selector: 'app-reference-box',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './reference-box.component.html',
  styleUrl: './reference-box.component.scss'
})
export class ReferenceBoxComponent {
  @Input() count: number = 0;

  constructor(public refService: RefService) { }

  isActive(): boolean {
    return true;
  }

  returnReferenceTranslation(prefix: string = '', suffix: string = ''): string {
    const giverResult = StringUtils.cleanStr(this.refService.referenceGivers[this.count]);
    return `references.single-reference.${prefix}${giverResult}${suffix}`;
  }

  ngOnChange() {
    console.log('blub');

  }

  toggleQuotes() {
      if ((this.refService.currentRef - 2) * -1 === this.count) {
        return true;
      } else {
        return false;
      }
  }
}