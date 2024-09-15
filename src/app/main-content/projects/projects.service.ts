import { Injectable } from '@angular/core';
import { Project } from '../../interfaces/projects.interface';

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

  constructor() { }

  openProjectDetails(projectIndex: number) {
    this.projectDetails.visibleFullscreen = true;
  }

  closeProjectDetails(project: Project) {
    this.projectDetails.visibleFullscreen  = false;
  }
}
