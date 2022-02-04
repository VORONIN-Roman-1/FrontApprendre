import { ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[my]',
  host:{
  '(mouseenter)':'onMouseEnter()',
  '(mouseleave)':'onMouseLeave()'
  }
})
export class ThemeDirectiveDirective {

  constructor(private el:ElementRef, private render:Renderer2) { 
    this.render.setStyle(this.el.nativeElement, "fontWeight", "bold" )
    this.render.setStyle(this.el.nativeElement, "border", "solid 10px red" )
    this.render.setStyle(this.el.nativeElement, "height", "150px" )
    this.render.setStyle(this.el.nativeElement, "width", "150px" )
    // this.el.nativeElement.style.fontWeight="bold";
    // this.el.nativeElement.style.border="solid 10px red";
    // this.el.nativeElement.style.height="150px";
    // this.el.nativeElement.style.width="150px";
  }

  // @HostListener("mouseenter") 
  onMouseEnter(){
    this.el.nativeElement.style.backgroundColor="blue";
    this.el.nativeElement.style.color="white";
  }
  // @HostListener("mouseleave") 
  onMouseLeave(){
    this.el.nativeElement.style.backgroundColor="white";
    this.el.nativeElement.style.color="black";
  }
  // @HostBinding("style.cursor") get getCursor(){
  //   return "pointer";
  // }
  @HostBinding("style.cursor") 
    pointer:string="pointer";
  
}
