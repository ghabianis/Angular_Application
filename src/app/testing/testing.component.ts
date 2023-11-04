import { Component, OnInit } from '@angular/core';
import { SnapfaceModel } from '../module/snapface.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit  {
  title!: "Angular title";
  description!:  "this a description"; 
  createdDate!: Date;
  snaps!:6;
  imageUrl!:'url'

  snapModel = new SnapfaceModel(this.title, this.description , this.createdDate , this.snaps , this.imageUrl);
  injectData : any = []

  buttonName = "oh snap!"
  x = 0

  ngOnInit() {
    this.data()
  }
  
  snap(){
    if(this.x >=0){
      if(this.x == 0){
        this.x+=1
        this.buttonName = "oops!"
      }else{
        this.x-=1
        this.buttonName="oh snap!"
      }
    }
  }

  data(){
    this.injectData = [
      { 
        id:1,
      title : 'hello description',
      description:'desc1',
      createdDate: new Date('December 17, 1995 03:24:00'),
      snaps:5,
      imageUrl:'../../assets/bear.jpg'
      },
      { 
        id:2,
        title : 'hello description',
        description:'desc1',
        createdDate: new Date('December 17, 1995 03:24:00'),
        snaps:5,
        imageUrl:'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w='
        },
        { 
          id:3,
          title : 'hello description',
          description:'desc1',
          createdDate: new Date('December 17, 1995 03:24:00'),
          snaps:5,
          imageUrl:'../../assets/bear.jpg'
          },     { 
            id:4,
            title : 'hello description',
            description:'desc1',
            createdDate: new Date('December 17, 1995 03:24:00'),
            snaps:5,
            imageUrl:'https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg'
            }
            
    ]

    return this.injectData;
  }

  edit(id:any,data:any){
    alert(`this is the element number ${id}`)
    console.log(data)
      for (let index = 0; index < this.injectData.length; index++) {
        if(this.injectData[index].id == id){
          this.injectData[index].title = data.title
          this.injectData[index].description = data.description
          this.injectData[index].createdDate = data.createdDate
          alert('updated successfully')
        }

      }
  }

  delete(id:any){
    for (let index = 0; index < this.injectData.length; index++) {
      if(this.injectData[index].id == id){
        this.injectData[index].remove()
        alert('deleted successfully')
      }

    }
  }

  showId(id:any){
    alert(id)
  }



}
