import { Component, Input, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  @Input() text: string = 'Demo-Button';
  @Input() type: 'regular' | 'link' = 'regular';

  @ViewChildren('spanElement') spans!: QueryList<ElementRef>;

  translateXOfLabelA: number = 0;
  translateXOfLabelB: number = 0;

  hover(event: Event) {
    this.spans.forEach((span: ElementRef) => {
      const style = window.getComputedStyle(span.nativeElement);
      const matrix = style.transform;

      if (matrix && matrix !== 'none') {
        const matchedValues = matrix.match(/matrix.*\((.+)\)/);

        if (matchedValues) {
          const values = matchedValues[1].split(', ');
          const translateX = parseFloat(values[4]);
          console.log('Aktueller translateX-Wert:', translateX);
        }

      }

    });

  }

  endHover(event: Event) {

  }

  selectLabels() {
  }
}
