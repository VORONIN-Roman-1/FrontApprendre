import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[employePreSelect]'
})
export class PourtourDirective {

  @Input('employePreSelect')
  borderColor: string;

  constructor(private el: ElementRef) {
    this.setBorder('#f5f5f5'); //bordure grise
    this.setHeight(180);
  }
  private setBorder(color: string) {
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }
  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || '#009688');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }
}
