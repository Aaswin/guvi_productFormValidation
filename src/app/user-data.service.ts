
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  user_data=[
    {
      id:1,
      name:"pro1",
      image:"http://placehold.it/200*200",
      age:200,
      email:"abc@xyz.com",
      password:"abc123"

    },
    {
      id:2,
      name:"pro2",
      image:"http://placehold.it/200*200",
      age:200,
      email:"abc@xyz.com",
      password:"abc123"
    },
    {
      id:3,
      name:"pro3",
      image:"http://placehold.it/200*200",
      age:200,
      email:"abc@xyz.com",
      password:"abc123"
    },
    {
      id:4,
      name:"pro4",
      image:"http://placehold.it/200*200",
      age:200,
      email:"abc@xyz.com",
      password:"abc123"
    }
  ]

  constructor() { }
  getAllUsers():Array<Object>
  {
    return this.user_data;
  }
  getUsersById(id:number):any
  {
    return  this.user_data.find(p=>p.id==id);
  }
}
