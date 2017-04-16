import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './templates/portfolio.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  public profilePicture:string;

  constructor(){
  	this.profilePicture='../assets/images/profile.jpg'
  }
}
