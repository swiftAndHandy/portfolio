import { Component } from '@angular/core';
import { ProjectService } from '../../projects.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-fullscreen',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './fullscreen.component.html',
  styleUrl: './fullscreen.component.scss'
})
export class ProjectFullScreenComponent {

  constructor(public projects: ProjectService){}

  project = this.projects.projects[this.projects.projectDetails.projectIndex];

}
