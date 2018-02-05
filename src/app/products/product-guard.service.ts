import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
@Injectable()
export class ProductGuardService implements CanActivate{

  constructor(private _router : Router) { 

  }

canActivate(route : ActivatedRouteSnapshot): boolean{
    console.log(route.url[1].path); //for products/10   -----> o/p is 10 since 10 is url[1] & products is url[0]
    let id = +route.url[1].path; // '+' is used to make strin to number
    if(isNaN(id) || id<1){
          alert("Invalid product id");
          this._router.navigate(['/products']);
          return false;
    }      
 return true
}

}
