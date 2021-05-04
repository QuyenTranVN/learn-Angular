import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  name = '';
  password = '';
  vehicles = ['Honda', 'Toyota', 'Huyndai ', 'Ford'];

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    console.log('onSubmit');
    console.log('name = ' + this.name);
    console.log('password = ' + this.password);
    console.log('Selected vehicle = ' + this.selectVehicle);
  }
  selectVehicle(event: any) {
    // console.log('selectVehicle', event.target.value);
    this.selectVehicle = event.target.value;
  }
}
