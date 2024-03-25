import { Component, ElementRef } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { CardComponent } from '../card/card.component';
import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ContainerComponent, CardComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private scrollService: ScrollService) { }

  scrollTo(anchor: string): void {
    this.scrollService.scrollTo(anchor);
  }
}
