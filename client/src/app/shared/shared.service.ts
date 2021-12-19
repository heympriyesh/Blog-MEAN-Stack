import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public navColor = new BehaviorSubject<string>('');
  constructor() {}

  public setNavColor() {
    this.navColor.next('#f9f4f0');
  }

  public resetNavColor() {
    this.navColor.next('');
  }
}
