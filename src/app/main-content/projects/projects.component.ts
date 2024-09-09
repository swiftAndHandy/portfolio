import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from '../../interfaces/projects.interface';
import { ButtonsComponent } from "../../shared/components/buttons/buttons.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule, ButtonsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      name: 'Join',
      technologies: [
        'Javascript',
        'Firebase',
        'HTML',
        'CSS'
      ],
      liveserver: 'https://join.veltens.info',
      github: 'https://github.com/swiftAndHandy/Join'
    }
  ];

  returnDescription(project: Project, variant: 'short' | 'long'): string {
    return `portfolio.project.${project.name}.description.${variant}`.toLocaleLowerCase();
  }
}
