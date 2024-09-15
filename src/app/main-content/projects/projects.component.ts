import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from '../../interfaces/projects.interface';
import { ButtonsComponent } from "../../shared/components/buttons/buttons.component";
import { StringUtils } from '../../utils/string-utils.utils';
import { ProjectService } from './projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule, ButtonsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor(public project: ProjectService) { }

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
    this.project.visibleFullscreen = true;
  }

  closePopup() {
    this.project.visibleFullscreen  = false;
  }
}
