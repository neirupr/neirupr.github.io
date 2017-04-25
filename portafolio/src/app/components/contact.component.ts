import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: '../templates/contact.html'
})

export class ContactComponent {
	public name:string = "Neiro Andres Torres Castro";
	public email:string = "neiroandres@yahoo.com.co";
	public mobile:string = "(+57) 3044834004";
	public location:string = "Medellín, Colombia";
	
	public emailTitle:string = "Email:";
	public mobileTitle:string = "Móvil:";
	public locationTitle:string = "Ubicación:";
}
