import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { TabGroupAsyncExample } from '../../shared/tabs/tabs.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { TechnologiesComponent } from '../../shared/technologies/technologies.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, TabGroupAsyncExample, ContainerComponent, TechnologiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
