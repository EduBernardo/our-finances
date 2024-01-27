import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  getCurrentMoment(): string {
    const hours = new Date().getHours()
    let periodOfTheDay = this.verifyPeriodOfTheDay(hours)
    return periodOfTheDay
  }

  private verifyPeriodOfTheDay(hours: number): string {
    let morning = (hours >= 0 && hours < 12)
    let afternoon = (hours >= 12 && hours < 18)
    let periodOfTheDay: string

    if (morning) {
      periodOfTheDay = 'Bom Dia'
    } else if (afternoon) {
      periodOfTheDay = 'Boa Tarde'
    } else {
      periodOfTheDay = 'Boa Noite'
    }
    return periodOfTheDay
  }
  
}
