import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/bike.service'
import { SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})

export class ProductDetailPageComponent implements OnInit {
  

  constructor() { }
  categories =[
    { Name: "Dairy-Eggs",img:"assets/img/icon-1.svg"},
  {Name:"Beverages",img:"assets/img/icon-2.svg"},
  {Name:"Snacks",img:"assets/img/icon-3.svg"},
  {Name:"Home Care",img:"assets/img/icon-4.svg"},
  {Name:"Noodles&Sauces",img:"assets/img/icon-5.svg"},
  {Name:"Personal Care",img:"assets/img/icon-6.svg"},
  {Name:"Pet Care",img:"assets/img/icon-7.svg"} ,
  {Name:"Meat & Seafood",img:"assets/img/icon-8.svg"} ,
  {Name:"Electronics",img:"assets/img/icon-9.svg"} ,
  {Name:"Vegetables & Fruits",img:"assets/img/icon-10.svg"} ,
  {Name:"Grocery & Staples",img:"assets/img/icon-11.svg"} ,
  {Name:"Herbel Cleaning",img:"assets/img/icon-1.svg"} ,

  ];

   filterArray: any[] = [];
   

  ngOnInit(): void {
    this.categories.map((item: any, i ) => {
      item.i = i ;
      if ( i < 6){
        this.filterArray.push(item);
      }
    });
    console.log(this.filterArray);
  }
  prevClick(){
    
    let lastEl= this.filterArray[0].i;
    if(lastEl != 0){
      this.filterArray.unshift(this.categories[lastEl-1])
      this.filterArray.pop()
    }
    
    

  }
  nextClick(){
   
    let lastEl= this.filterArray[this.filterArray.length-1].i;
    if(lastEl != 11){
    this.filterArray.push(this.categories[lastEl+1])
    this.filterArray.shift()
    console.log(this.filterArray)
    }
  }

}
