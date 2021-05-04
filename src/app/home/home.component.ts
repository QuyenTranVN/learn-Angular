import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name: string = 'quyen';
  age;
  vehicles = ['Honda', 'Toyota', 'Huyndai ', 'Ford'];
  constructor(private common: CommonService) {
    this.age = common.age;
  }

  ngOnInit(): void {}
  increase() {
    this.common.age++;
    this.age = this.common.age;
    // if (this.age === 20) {
    this.vehicles.push(this.name + ':' + this.age);
  }

  // }
}
