import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }
  url=environment.baseUrl;
  header=[
    {menuName:"Home",routerlink:"/home",active:true},
  {menuName:"Car",routerlink:"/car",active:false},
  {menuName:"Contact us",routerlink:"/register",active:false},


  ]
  // url = 'http://localhost:8000/';

  getCarList() {
    return this.http.post(this.url+"getCarList", null);

  }
getHeader(){
  return this.header;
}
  activeHeader(xyz: string){
    this.header.map((item) =>{
      if(item.active){
        item.active=false;
      }
     if(xyz == item.routerlink){
      item.active=true;
     }
      
    })
  }
  private newCar = new BehaviorSubject<any>({
   
    vehicleNumber:'',
    brand:'',
    model:'',
    makingYear: '',
    price:'',
    kilometer: '',
    insurance:'',
    fuelType:'',
    carType:'',
    img1:'',
    img2:'',
    img3:'',
    img4:''
  });

  setNewUserInfo(user: any) {
    debugger;
    console.log(user)
    this.newCar.next(user);
  }

  getNewCarInfo() {
    return this.newCar.asObservable();
  }
}
