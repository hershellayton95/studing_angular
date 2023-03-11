import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]',
})
export class HightlightDirective {
  @Input() appHightlight = '';
  @Input() defaultColor = '';

  constructor(private element: ElementRef) {
    this.cambiaColore('yellow');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.cambiaColore(this.appHightlight || this.defaultColor || 'gray');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.cambiaColore('yellow');
  }

  cambiaColore(colore: string) {
    this.element.nativeElement.style.backgroundColor = colore;
  }
}
