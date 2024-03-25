import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { TabGroupAsyncExample } from '../../shared/tabs/tabs.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { TechnologiesComponent } from '../../shared/technologies/technologies.component';
import { CertificatesComponent } from '../../shared/certificates/certificates.component';
import { AboutMeComponent } from '../../shared/about-me/about-me.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, TabGroupAsyncExample, ContainerComponent, TechnologiesComponent, CertificatesComponent, AboutMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
