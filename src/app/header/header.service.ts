import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  userLoginStatusChangedEmitter = new EventEmitter();

  constructor() { }

  userLoginStatusChanged() {
    return this.userLoginStatusChangedEmitter.emit();
  }

}
