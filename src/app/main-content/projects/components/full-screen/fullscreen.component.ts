import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProjectService } from '../../../../services/projects.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from "../../../../shared/components/buttons/buttons.component";

@Component({
  selector: 'app-project-fullscreen',
  standalone: true,
  imports: [TranslateModule, CommonModule, ButtonsComponent],
  templateUrl: './fullscreen.component.html',
  styleUrl: './fullscreen.component.scss'
})
export class ProjectFullScreenComponent {
  @ViewChild('project') scrollArea!: ElementRef;
  constructor(public projects: ProjectService) { }

  changeProject(method: 'previous' | 'next') {
    switch (method) {
      case 'previous':
        this.projects.previousProject();
        this.scrollArea.nativeElement.scrollTop = 0;
        break;
      case 'next':
        this.projects.nextProject();
        this.scrollArea.nativeElement.scrollTop = 0;
    }
  }
}
