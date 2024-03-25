import { Component } from '@angular/core';
import { ScrollService } from '../../scroll.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  constructor(private scrollService: ScrollService) { }

  scrollTo(anchor: string): void {
    this.scrollService.scrollTo(anchor);
  }
}
