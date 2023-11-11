import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecisionService {

  constructor() { }
 result : string = ""
decisonMoy(moy:any):string{
     if (moy <10 && moy >=0){
      this.result='Refuser';
     }else if(moy>=10 && moy <12){
      this.result='Admis';
     }else if(moy>=12 && moy<14){
      this.result= 'Admis assez bien';
     }else if(moy>=14 && moy<=16){
      this.result= 'Admis Bien';
     }else if(moy>=16 && moy <=20){
      this.result= 'Tres Bien';
     }else{
      return 'invalide moy'
     }
  return this.result;
}
}
