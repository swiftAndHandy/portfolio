import { Injectable } from '@angular/core';
import { Project } from '../../interfaces/projects.interface';
import { StringUtils } from '../../utils/string-utils.utils';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectDetails = {
    visibleFullscreen: false,
    projectIndex: 0,
  }

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
      github: 'https://github.com/swiftAndHandy/El-Pollo-Loco'
    },
    {
      name: 'Pokédex',
      technologies: [
        'Javascript',
        'HTML',
        'CSS'
      ],
      github: 'https://github.com/swiftAndHandy/Pokedex'
    },
  ];

  openProjectDetails(projectIndex: number) {
    this.projectDetails.visibleFullscreen = true;
    this.projectDetails.projectIndex = projectIndex;
    document.body.style.overflow = 'hidden';
  }

  closeProjectDetails() {
    this.projectDetails.visibleFullscreen = false;
    document.body.style.overflow = 'auto';
  }

  returnImage(project: Project): string {
    const nameResult = StringUtils.cleanStr(project.name);
    return `./assets/img/${nameResult}.webp`;
  }

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
}
