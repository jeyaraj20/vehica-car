import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  header=[
    {manuName:"Pre owned",img:"assets/img/preowned.png",scriptEdien:"Address", address:["Velachery Main Road,","Kaiveli,","Pallikaranai,","Chennai","PIN:600100."],NO:["9176792777"]},
    {manuName:"Car Painting",img:"assets/img/detailing (1).png",scriptEdien:"Address", address:["Velachery Main Road,","Kaiveli,","Pallikaranai,","Chennai","PIN:600100."],NO:["9962472777"]},
    {manuName:"Service",img:"assets/img/service.png",scriptEdien:"Address",address:["Velachery Main Road,","Kaiveli,","Pallikaranai,","Chennai","PIN:600100."],NO:["9962272777"]},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
