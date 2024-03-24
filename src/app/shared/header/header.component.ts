import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ContainerComponent, CardComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
