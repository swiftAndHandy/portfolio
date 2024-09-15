import { Component, Input } from '@angular/core';
import { Project } from '../../../../interfaces/projects.interface';
import { StringUtils } from '../../../../utils/string-utils.utils';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonsComponent } from '../../../../shared/components/buttons/buttons.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-preview',
  standalone: true,
  imports: [TranslateModule, ButtonsComponent, CommonModule],
  templateUrl: './project-preview.component.html',
  styleUrl: './project-preview.component.scss'
})
export class ProjectPreviewComponent {
  @Input() project!: Project;
  @Input() last!: boolean;

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

}
