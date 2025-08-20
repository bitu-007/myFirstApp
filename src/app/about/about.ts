import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  FirstName = 'Bitu Kumar';

  @Input() parentdata: string = '';
  @Output() childdata = new EventEmitter<string>();

  ChildToParent()
  {
    this.childdata.emit('Good Morning');
  }
}
