import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http'

export interface Student {
  id: number;
  name: string;
  age: number;
  imgUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
 
    
  

  students=[
    {
      id:1,
      name:'lebrouda',
      age:22,
      fku:true,
      imgUrl:'https://static-cdn.jtvnw.net/jtv_user_pictures/7a82a638-c68d-4d5e-bf2e-001936835d29-profile_image-70x70.png'
    },
    {
      id:2,
      name:'hedibrabidda',
      age:20,
      fku:false,
      imgUrl:'https://static-cdn.jtvnw.net/jtv_user_pictures/04c65db8-ef62-4fb5-8cff-09f0521de151-profile_image-70x70.png'
    },
    {
      id:3,
      name:'trashkercha',
      age:21,
      fku:false,
      imgUrl:'https://static-cdn.jtvnw.net/jtv_user_pictures/3a4c876e-1c4b-46ba-bf77-91e282202879-profile_image-70x70.jpeg'
    },
  ] 

}
