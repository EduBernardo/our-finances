import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from '../interfaces/theme.interface';

/* An interface that represents your data model */
export interface IUserId {
  id: string;
}

export const themes: Theme[] = [
  {
    name: 'Dark theme',
    backgroundColor: '#74898a'
  },
  {
    name: 'Light theme',
    backgroundColor: '#ffffff'
  }
]

@Injectable({
  providedIn: 'root'
})

export class UserThemeService {

  
  currentThemeSubject: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(themes[0])

  get theme() {
    return this.currentThemeSubject.value;
  }

  set theme(theme: Theme) {
    this.currentThemeSubject.next(theme);
  }
}





