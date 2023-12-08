import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {DetailComponent} from "./component/detail/detail.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HomeComponent, DetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'examen-front';
}
