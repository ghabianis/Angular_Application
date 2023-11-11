import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }


  add(a:any,b:any){
    return a+b;
  }

  
  multiple(a:any,b:any){
    return a*b;
  }
}
