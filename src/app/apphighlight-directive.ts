import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApphighlightDirective]'
})
export class ApphighlightDirective  implements OnInit {

  constructor( private element :ElementRef,private render:Renderer2) { }
  ngOnInit(): void {
   // (this.element.nativeElement as HTMLElement).style.color="green";
this.render.setStyle(this.element.nativeElement,"color","red");
  }

//   @HostListener('mouseenter') onclick(event: Event) {
// this.render.setStyle(this.element.nativeElement,"color","pink");
    
//   }

}