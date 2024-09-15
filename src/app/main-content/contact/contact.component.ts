import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonsComponent } from '../../shared/components/buttons/buttons.component';
import { ContactFormPlaceholders } from '../../interfaces/contact-placeholders.interface';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, ButtonsComponent, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './formular.scss']
})
export class ContactComponent {

  contactData = {
    name: '',
    email: '',
    msg: '',
    privacy: false
  }

  placeholders: ContactFormPlaceholders = {
    name: {
      state: 'regular'
    },
    email: {
      state: 'regular'
    },
    msg: {
      state: 'regular'
    },
    privacy: {
      state: 'regular'
    }
  }

  mailTest = false;
  http = inject(HttpClient);

  post = {
    endPoint: 'https://veltens.info/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  translatePlaceholderState(field: 'name' | 'email' | 'msg' | 'privacy'): string {
    return `contact.form.placeholder.${this.placeholderState(field)}.${field}`;
  }

  placeholderState(field: 'name' | 'email' | 'msg' | 'privacy'): 'regular' | 'error' {
    return this.placeholders[field].state;
  }

  checkMailPattern(ngForm: NgForm) {
    if (this.placeholderState('email') === 'error') {
      if (ngForm.form.controls['email'].valid) {
        return 'mail-pattern-fixed';
      }
    }
    return '';
  }

  resizeTextarea(event: Event) {
    const textArea = event.target as HTMLTextAreaElement;
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
  };

  onSubmit(ngForm: NgForm) {

    for (const key in ngForm.form.controls) {
      if (ngForm.form.controls[key].valid) {
        this.placeholders[key].state = 'regular';
      } else {
        this.placeholders[key].state = 'error';
      }
    }
    

    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log(response);        
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }

  }
}
