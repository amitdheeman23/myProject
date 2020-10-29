import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myPizza';

  arr=['a','b',['c','d']]; ;   
  ngOnInit(){
    this.ok('')
  }
  ok(value){
    // var result=this.arr.flatMap(x=>[[x/2]]));  
    // console.log('array',result)

  }
}
