import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StringUtils } from '../../../utils/string-utils.utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reference-box',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './reference-box.component.html',
  styleUrl: './reference-box.component.scss'
})
export class ReferenceBoxComponent {
  @Input() referenceGiver: string = '';
  @Input() count: number = 0;

  returnReferenceTranslation(prefix: string = '', suffix: string =''):string {
    const giverResult = StringUtils.cleanStr(this.referenceGiver);
    return `references.single-reference.${prefix}${giverResult}${suffix}`;
  }
}