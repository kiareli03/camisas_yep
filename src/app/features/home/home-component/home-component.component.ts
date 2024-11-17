import { Component } from '@angular/core';
import { HeaderComponentComponent } from "../../../shared/header/header-component/header-component.component";

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [HeaderComponentComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {

}
