import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface Skill {
  name: string;
  category: string;
}

@Component({
  selector: 'app-single-skill',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './single-skill.component.html',
  styleUrl: './single-skill.component.scss'
})
export class SingleSkillComponent {
  @Input() name: string = '';
  @Input() category: string = '';
  @Input() container: boolean = false;

skill!: Skill;

ngOnInit() {
  this.skill = {
    name: this.name,
    category: this.category.toLowerCase()
  };
}

returnSkillNameHtml() {
  return this.skill.name.split(' ').join('\n')
}

returnImgPath() {
  const imageName: string = this.skill.name.split(' ').join('-').toLowerCase();
  return `./assets/icons/${this.skill.category}/${imageName}.svg`;
}
}
