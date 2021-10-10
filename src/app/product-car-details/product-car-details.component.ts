import { Component, OnInit, ViewChild } from '@angular/core';
import { CarService } from '../car.service';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { NgxCaptureService } from 'ngx-capture';

@Component({
  selector: 'app-product-car-details',
  templateUrl: './product-car-details.component.html',
  styleUrls: ['./product-car-details.component.css']
})
export class ProductCarDetailsComponent implements OnInit {
  carInfo: any;
  viewedBike: any;
  imgList: string[] = [] ;

  myImg="";
  // tslint:disable-next-line:variable-name
  constructor( public _carService: CarService, private spinner: SpinnerVisibilityService,private captureService: NgxCaptureService) { }
  @ViewChild('screen', { static: true }) screen: any;

  ngOnInit(): void {  
    this.spinner.show();

    this._carService.getNewCarInfo().subscribe(info => {
     
      this.spinner.hide();
      
      this.carInfo = info;
     if(this.carInfo.vehicleNumber== ""){
      this.carInfo = JSON.parse(localStorage.getItem('carData') || '{}');
     }
     this.viewedBike=this.carInfo.car.img1
     this.imgList.push(this.carInfo.car.img1)

     this.imgList.push(this.carInfo.car.img2)

     this.imgList.push(this.carInfo.car.img3)

     this.imgList.push(this.carInfo.car.img4)

     localStorage.setItem("carData", JSON.stringify(this.carInfo));

    })

  }
  // tslint:disable-next-line:typedef
  capture()
  {
this.captureService.getImage(this.screen.nativeElement, true).subscribe(img =>{
this.myImg=img;
const downloadLink = document.createElement("a");
     downloadLink.href = img;
     downloadLink.download = "myImg.jpg";
     downloadLink.click();
    })
    
  }

  
  selectBike(getName:any){
this.imgList.map((item,i)=>{
if(item == this.viewedBike){
if(getName == "prev" && i !=0){
  this.viewedBike= this.carInfo.car["img"+(i-1+1)]
}else if(getName == "next" && i !=3){
  this.viewedBike= this.carInfo.car["img"+(i+1-1)]
}
}
})


  }
  previewCar(img: any){
    
    this.viewedBike=img
}
 nextimg(img: any){
    
}


}

