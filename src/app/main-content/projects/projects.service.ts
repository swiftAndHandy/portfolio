import { Injectable } from '@angular/core';
import { Project } from '../../interfaces/projects.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  visibleFullscreen: boolean = false;

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
}
