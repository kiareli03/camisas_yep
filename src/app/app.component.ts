import { Component } from '@angular/core';
import { HeaderComponentComponent } from './shared/header/header-component/header-component.component';
import { HomeComponentComponent } from './features/home/home-component/home-component.component';
import { FooterComponentComponent } from "./shared/footer/footer-component/footer-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponentComponent, FooterComponentComponent, HomeComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'camisas-yep';
}
