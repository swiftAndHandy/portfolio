import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectService } from './projects.service';
import { ProjectFullScreenComponent } from "./components/full-screen/fullscreen.component";
import { ProjectPreviewComponent } from './components/project-preview/project-preview.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule, ProjectFullScreenComponent, ProjectPreviewComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor(public project: ProjectService) { }

}
