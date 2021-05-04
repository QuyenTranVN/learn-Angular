import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  age = 10;
  constructor() {}

  increase() {
    this.age++;
  }
}
