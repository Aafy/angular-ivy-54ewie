import { Component, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  
  complaints = ['Oil Problem','Brake failure in machine'];
  add(str) {
    console.log(str);
    this.complaints.push(str);    
  }
}
