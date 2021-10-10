import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/bike.service'
import { SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {
  carousel = [
    {img: 'assets/img/used car_3.jpg', name: ''},
    {img: 'assets/img/used car_3.jpg', name: ''},
    {img: 'assets/img/used car_3.jpg', name: ''},
    {img: 'assets/img/used car_3.jpg', name: ''},
    {img: 'assets/img/used car_3.jpg', name: ''},
    {img: 'assets/img/used car_3.jpg', name: ''},
    {img: 'assets/img/used car_3.jpg', name: ''},
    {img: 'assets/img/used car_3.jpg', name: ''},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
