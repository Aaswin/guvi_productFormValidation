import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  data=[
    {
      id:1,
      name:"pro1",
      image:"http://placehold.it/200*200",
      price:200
    },
    {
      id:2,
      name:"pro2",
      image:"http://placehold.it/200*200",
      price:300
    },
    {
      id:3,
      name:"pro3",
      image:"http://placehold.it/200*200",
      price:250
    },
    {
      id:4,
      name:"pro4",
      image:"http://placehold.it/200*200",
      price:310
    }
  ]

  constructor() { }
  getAllProducts():Array<Object>
  {
    return this.data;
  }
  getProductById(id:number):any
  {
    return  this.data.find(p=>p.id==id);
  }
}
