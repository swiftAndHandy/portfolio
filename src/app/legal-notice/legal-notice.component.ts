import { Component } from '@angular/core';
import { FooterComponent } from "../shared/components/footer/footer.component";

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
