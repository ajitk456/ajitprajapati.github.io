/* import { Directive } from '@angular/core'; */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

constructor(private elref: ElementRef) { }

@HostListener('mouseover')

onMouse() { this.elref.nativeElement.style.backgroundColor = '#87CEEB';
}

@HostListener('mouseleave')
onLeave() { this.elref.nativeElement.style.backgroundColor = null;

}

}
