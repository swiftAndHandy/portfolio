import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SingleSkillComponent } from "./single-skill/single-skill.component";
import { ButtonsComponent } from "../../shared/components/buttons/buttons.component";
import { Skill } from '../../interfaces/skill.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule, SingleSkillComponent, ButtonsComponent, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  displayedSkillSet: 'frontend' | 'backend' = 'frontend';
  displayedSkillToggle: boolean = false;

  frontendSkills: Skill[] = [
    {'name': 'Angular'},
    {'name': 'TypeScript'},
    {'name': 'JavaScript'},
    {'name': 'Firebase'},
    {'name': 'Git'},
    {'name': 'Rest-API'},
    {'name': 'Material Design'},
    {'name': 'Scrum'},
    {'name': 'HTML'},
    {'name': 'CSS'},
    {'name': 'Growth mindset', container: true}
  ];

  backendSkills: Skill[] = [
    {'name': 'Cloud'},
    {'name': 'Django'},
    {'name': 'Docker'},
    {'name': 'Flask'},
    {'name': 'Heroku'},
    {'name': 'Linux'},
    {'name': 'Postgre-SQL'},
    {'name': 'Python'},
    {'name': 'Redis'},
    {'name': 'RXJS'},
    {'name': 'SQL'},
  ];

  checkContainer(skill: Skill) {
    return skill.container ? true : false;
  }

  contactMe() {
    console.log('klappt');
    
  }

  toggleSkillset() {
    switch (this.displayedSkillSet) {
      case 'frontend':
        this.displayedSkillSet = "backend";
        break;
      case 'backend':
        this.displayedSkillSet = "frontend";
        break;
    }
  }
}
