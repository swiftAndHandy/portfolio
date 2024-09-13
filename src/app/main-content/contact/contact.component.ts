import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonsComponent } from '../../shared/components/buttons/buttons.component';
import { ContactFormPlaceholders } from '../../interfaces/contact-placeholders.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, ButtonsComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  placeholders: ContactFormPlaceholders = {
    name: {
      state: 'error'
    },
    email: {
      state: 'error'
    },
    msg: {
      state: 'error'
    },
    privacy: {
      state: 'error'
    }
  }

  translatePlaceholderState(field: 'name' | 'email' | 'msg' | 'privacy') {
    return `contact.form.placeholder.${this.placeholderState(field)}.${field}`;
  }

  placeholderState(field: 'name' | 'email' | 'msg' | 'privacy'): 'regular' | 'error' {
    return this.placeholders[field].state;
  }

  togglePlaceholderState(field: 'name' | 'email' | 'msg' | 'privacy'){
    switch (this.placeholders[field].state) {
      case 'regular':
        return this.placeholders[field].state = 'error';
      case 'error':
        return this.placeholders[field].state = 'regular';
    }
  }

  resizeTextarea(event: Event) {
    const textArea = event.target as HTMLTextAreaElement;
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
  };

}
