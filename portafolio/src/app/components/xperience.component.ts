import { Component } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: '../templates/xperience.html'
})

export class XperienceComponent {
	public jobs = [
		{
			name:'Mercash Digital S.A.S.',
			role:'Front-end Web Developer',
			projects:[
				{name:'Tipon'}
			],
			from:'Jul, 2014', 
			to:'Mar, 2016'
		},
		{
			name:'Sophos Banking Solutions',
			role:'Implementation Consultant',
			projects:[
				{name:'CDT'},
				{name:'Indebtness'}
			],
			from:'Mar, 2016',
			to:'Actually'
		}
	]
}
