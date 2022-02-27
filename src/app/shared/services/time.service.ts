import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  getCurrentTime(): number {
    let currentDateTime = new Date
    return currentDateTime.getTime()
  }
}
