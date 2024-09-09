import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SingleSkillComponent } from "./single-skill/single-skill.component";

interface Skill {
  name: string;
  container?: boolean;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule, SingleSkillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
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

  checkContainer(skill: Skill) {
    return skill.container ? true : false;
  }
}
