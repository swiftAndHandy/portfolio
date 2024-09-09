import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Skill } from '../../../interfaces/skill.interface';


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

  returnSkillNameHtml(): string {
    return this.skill.name.split(' ').join('\n')
  }

  returnImgPath(popup: boolean = false): string {
    const imageName: string = this.skill.name.split(' ').join('-').toLowerCase();
    return popup ? `./assets/icons/${this.skill.category}/${imageName}-popup.svg` : `./assets/icons/${this.skill.category}/${imageName}.svg`;
  }
}
