import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ssAppHighlightText]'
})
export class HighlightTextDirective {


  constructor(private el: ElementRef, private renderer: Renderer2) { 
    // this.renderer.setStyle(this.el.nativeElement,'text-decoration','underline');
  }

  // @HostBinding('style.color') underline: string = '';

  @HostListener('mouseover') onMouseOver() {
    this.highlightText();
    // this.el.nativeElement.textContent = "ONLINE";
    // this.renderer.setStyle(this.el.nativeElement,'color','green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.nothighlightText();
  }

  highlightText() {
    // this.underline = 'red';
    this.renderer.setStyle(this.el.nativeElement,'text-decoration','underline');
  }

  nothighlightText() {
    // this.underline = 'red';
    this.renderer.setStyle(this.el.nativeElement,'text-decoration','none');
  }

}
