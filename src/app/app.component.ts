import { Component } from '@angular/core';
import { HeaderComponentComponent } from './shared/header/header-component/header-component.component';
import { FooterComponentComponent } from "./shared/footer/footer-component/footer-component.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponentComponent, FooterComponentComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'camisas-yep';
}
