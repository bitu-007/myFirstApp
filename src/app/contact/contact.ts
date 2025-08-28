import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ApphighlightDirective } from '../apphighlight-directive';
import { ViewChildExample } from '../view-child-example/view-child-example';

@Component({
  selector: 'app-contact',
  imports: [RouterOutlet, RouterLink, ApphighlightDirective, ViewChildExample],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  constructor(private router: Router) {}
  GotoAbout() {
    // this.router.navigateByUrl('/about');
    this.router.navigate(['/about', 1, 'Bitu']);
  }
}
