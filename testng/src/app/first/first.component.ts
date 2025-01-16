import { NgIf } from '@angular/common';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{


  // name = 'lebrouda they come they go';
  // age = 22;
  // fku ='true';
  // imgUrl='https://v17.angular.io/assets/images/logos/angular/logo-nav@2x.png';
  
  //  text ='hide';
  // user={
  //   name:'lebrouda',
  //   age:22,
  //   fku:true,
  //   imgUrl:'https://static-cdn.jtvnw.net/jtv_user_pictures/7a82a638-c68d-4d5e-bf2e-001936835d29-profile_image-70x70.png'
  // }
  // changename(){
  //   this.user.fku= !this.user.fku;
  //   if(this.user.fku==false){
  //     this.text = 'show';
  //   }else{
  //     this.text = 'hide';
  //   }
  // }
  // cars=[
  //   'bmw',
  //   'toyouta',
  //   'lairabich',
  //   'raslambout'
  // ]
  
  
  id=0;
  

  constructor(){}
  
  ngOnInit():void{}
}
