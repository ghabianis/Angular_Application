import { Component } from '@angular/core';
import { CalculateService } from '../services/calculate.service';
import { CalculeModule } from '../module/calcule/calcule.module';
import { DecisionService } from '../services/decision.service';

@Component({
  selector: 'app-calcule',
  templateUrl: './calcule.component.html',
  styleUrls: ['./calcule.component.css']
})
export class CalculeComponent {
  constructor(private readonly calculService:CalculateService , private readonly desisionService:DecisionService){}
   resp:any
   resp1:any
   resp2:any
   calculModule = new CalculeModule();

   Addition(){
      this.resp = this.calculService.add(this.calculModule.note1,this.calculModule.note2) 
      return this.resp;
   } 

   multiple(){
    this.resp1 = this.calculService.multiple(this.calculModule.note1,this.calculModule.note2) 
    return this.resp1;
 } 


 takeDes(){
    this.resp2 = this.desisionService.decisonMoy(this.calculModule.moy)
    return this.resp2;
 }

 vider(){
  this.resp = "";
  this.resp1 = "";
  this.resp2 = "";
 }

   
}
