import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonsComponent } from '../../shared/components/buttons/buttons.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, ButtonsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
