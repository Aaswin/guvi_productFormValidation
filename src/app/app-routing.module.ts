import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HeadevComponent } from './headev/headev.component';
import { HomeComponent } from './home/home.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductComponent } from './product/product.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'productlist',
    component:ProductListingComponent
  },
  {
    path:"product/:id",
    component:ProductComponent
  },
  {
    path:"create-product",
    component:CreateProductComponent
  },  
  {
    path:'userlist',
    component:UserListingComponent
  },
  {
    path:'user/:id',
    component:UserComponent
  },
  {
    path:'create-user',
    component:CreateUserComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
