import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  constructor(private router:Router)
  {

  }
  GotoAbout()
  {
    // this.router.navigateByUrl('/about');
    this.router.navigate(['/about',1,'Bitu']);
  }
}
