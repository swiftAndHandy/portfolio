import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse',
  standalone: true,
  imports: [],
  templateUrl: './mouse.component.html',
  styleUrl: './mouse.component.scss'
})
export class MouseComponent {

  trackCursor(event: MouseEvent) {
    console.log('bla');

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const spotlightX = (mouseX / window.innerWidth) * 100;
    const spotlightY = (mouseY / window.innerHeight) * 100;
    console.log(mouseX);

    const spotlight = document.querySelector(".spotlight") as HTMLElement;
    if (spotlight) {
      spotlight.style.background = `radial-gradient(
      circle 5dvw at ${spotlightX}% ${spotlightY}%,
      #3DCFB6 10%,
      rgba(0, 0, 0, 0.1)
    )`;
    }
  }
}
