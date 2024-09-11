import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from '../../interfaces/projects.interface';
import { ButtonsComponent } from "../../shared/components/buttons/buttons.component";
import { StringUtils } from '../../utils/string-utils.utils';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule, ButtonsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  visiblePopup: boolean = false;

  projects: Project[] = [
    {
      name: 'Join',
      technologies: [
        'Javascript',
        'Firebase',
        'HTML',
        'CSS'
      ],
      github: 'https://github.com/swiftAndHandy/Join'
    },
    {
      name: 'El Pollo Loco',
      technologies: [
        'Javascript',
        'Firebase',
        'HTML',
        'CSS'
      ],
      github: 'https://github.com/swiftAndHandy/Join'
    },
    {
      name: 'Pokédex',
      technologies: [
        'Javascript',
        'HTML',
        'CSS'
      ],
      github: ''
    },
  ];

  returnDescription(project: Project, variant: 'short' | 'long'): string {
    const nameResult = StringUtils.cleanStr(project.name);
    return `portfolio.project.${nameResult}.description.${variant}`.split(' ').join('-').toLocaleLowerCase();
  }

  returnLiveServer(project: Project): string {
    if (!project.liveserver) {
      const nameResult = StringUtils.cleanStr(project.name);
      return `https://${nameResult}.veltens.info`;
    } else {
      return project.liveserver;
    }
  }

  returnImage(project: Project): string {
    const nameResult = StringUtils.cleanStr(project.name);
    return `./assets/img/${nameResult}.webp`;
  }

  openPopup() {
    this.visiblePopup = true;
  }

  closePopup() {
    this.visiblePopup = false;
  }
}
