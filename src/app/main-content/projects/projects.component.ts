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
      liveserver: 'https://pokedex.veltens.info',
      github: 'https://github.com/swiftAndHandy/Join'
    },
  ];

  returnDescription(project: Project, variant: 'short' | 'long'): string {
    const nameResult = this.purgeName(project.name);
    return `portfolio.project.${nameResult}.description.${variant}`.split(' ').join('-').toLocaleLowerCase();
  }

  returnLiveServer(project: Project): string {
    if (!project.liveserver) {
      const nameResult = this.purgeName(project.name);
      return `https://${nameResult}.veltens.info`;
    } else {
      return project.liveserver;
    }
  }

  returnImage(project: Project): string {
    const nameResult = this.purgeName(project.name);
    return `./assets/img/${nameResult}.webp`;
  }

  purgeName(name: string): string {
    const nameResult = this.removeDiacritics(name);
    return nameResult.split(' ').join('-').toLowerCase();
  }

  removeDiacritics(str: string):string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
}
