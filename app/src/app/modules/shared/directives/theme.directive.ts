import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';
import { UserThemeService } from '../services/user-theme.service'

@Directive({
  selector: '[Theme]'
})
export class ThemeDirective {

  @HostBinding('style.backgroundColor') get color() {
    return this.themeService.theme.backgroundColor;
  };

   constructor(renderer: Renderer2, hostElement: ElementRef, private themeService: UserThemeService) {
     renderer.addClass(hostElement.nativeElement, 'main-class');
   }

}
