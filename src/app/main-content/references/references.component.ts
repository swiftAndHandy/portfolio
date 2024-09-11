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
}
