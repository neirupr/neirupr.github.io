import { Component } from '@angular/core';

@Component({
  selector: 'overview',
  templateUrl: '../templates/overview.html'
})
export class OverviewComponent {
	public careers = [
		{career: "Ingeniero de Sistemas e Informática"},
		{career: "Especialista en Mercados de Energía"}
	];
	public about = "HOL";
	public university:string="Universidad Nacional de Colombia"
}
