import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector:'[choixJoli]'
})
export class ChoixDirective{
    private colorBorderInitial:string= "#5555f5";
    private colorBorderDefault:string= "#c0c0c0";
    private colorBackgroundInitial:string= "#555555";

    constructor(private el: ElementRef){
        this.setBorder(this.colorBorderInitial, 17);
        this.setBack(this.colorBackgroundInitial);
    }
    private setBorder(color:string, tail:number):void{
        let border='solid ' + tail+'px '+color;
        this.el.nativeElement.style.border=border;
    }
    private setBack(backgroundColor:string):void{
        this.el.nativeElement.style.backgroundColor= backgroundColor;
    }
    @Input('choixJolie') colorBorder:string;
  //  @Input('choixJoli') colorBorder:string;
    @HostListener('mouseenter')
    onMouseEnter(){
       this.setBorder(this.colorBorder||this.colorBorderDefault , 5);
    }
    @HostListener('mouseleave')
    onMouseLeave(){
        this.setBorder(this.colorBorderInitial, 17);
    }
}