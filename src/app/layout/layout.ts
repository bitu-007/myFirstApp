import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { App } from '../app';
import { About } from '../about/about';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink,RouterLinkActive,App,About,Contact],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
