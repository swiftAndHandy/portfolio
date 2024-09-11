import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StringUtils } from '../../../utils/string-utils.utils';

@Component({
  selector: 'app-reference-box',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './reference-box.component.html',
  styleUrl: './reference-box.component.scss'
})
export class ReferenceBoxComponent {
  @Input() referenceGiver: string = '';

  returnReferenceTranslation(prefix: string = '', suffix: string =''):string {
    const giverResult = StringUtils.cleanStr(this.referenceGiver);
    return `references.single-reference.${prefix}${giverResult}${suffix}`;
  }
}