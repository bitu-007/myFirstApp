import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-example',
  imports: [],
  templateUrl: './view-child-example.html',
  styleUrl: './view-child-example.css'
})
export class ViewChildExample {
  @ViewChild('rrr') rinput!: ElementRef;

  ShowAlert()
  {
    alert(this.rinput.nativeElement.value);
  }
}
