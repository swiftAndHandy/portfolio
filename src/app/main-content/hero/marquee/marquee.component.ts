import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
// import { MarqueeItems } from '../../../interfaces/marquee.interface';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss'
})
export class MarqueeComponent {

  marqueeItems: string[] = [
    'remote',
    'skills',
    'location',
    'open-to-work'
  ];



}
