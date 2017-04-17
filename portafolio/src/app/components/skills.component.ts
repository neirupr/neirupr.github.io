import { Component } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: '../templates/skills.html'
})
export class SkillsComponent {
	public skills = [
		{name:'JavaScript',
			image:'../../assets/images/workExperience/javascript.png',
			description:'JavaScript for dynamic websites handling',
			workExperience: 'Yes'
		},
		{name:'HTML5',
			image:'../../assets/images/workExperience/html5.png',
			description:'HTML5 any description for the sample',
			workExperience: 'Yes'
		},
		{name:'CSS3',
			image:'../../assets/images/workExperience/css3.jpg',
			description:'Skillw with the latest version of css',
			workExperience: 'Yes'
		},
		{name:'Ember JS',
			image:'../../assets/images/workExperience/emberjs.png',
			description:'Social networks using EmberJS framework',
			workExperience: 'Yes'
		},
		{name:'JQuery',
			image:'../../assets/images/workExperience/jquery.png',
			description:'Javascript tools compilation for quick web developing.',
			workExperience: 'Yes'
		},
		{name:'Angular',
			image:'../../assets/images/workExperience/angular.jpg',
			description:'Autolearning coursed in Udemy. Skills growing up.',
			workExperience: 'No'
		},
		{name:'Material Design',
			image:'../../assets/images/workExperience/material-design.jpg',
			description:'CSS framework for google stylized components.',
			workExperience: 'Yes'
		},
		{name:'Bootstrap',
			image:'../../assets/images/workExperience/bootstrap.png',
			description:'CSS framework for components stylizing.',
			workExperience: 'Yes'
		},
		{name:'AS/400',
			image:'../../assets/images/workExperience/as400.jpg',
			description:'IBM operative system. Including Cobol language and RPG',
			workExperience: 'Yes'
		},
		{name:'PL/SQL',
			image:'../../assets/images/workExperience/oracle.jpg',
			description:'Autolearning and some work experience on Oracle SQL and PL/SQL',
			workExperience: 'Yes'
		},
		{name:'Java',
			image:'../../assets/images/workExperience/java.png',
			description:'Modern, scalable and mantainable applications using Java.',
			workExperience: 'No'
		},
		{name:'C++',
			image:'../../assets/images/workExperience/c++.png',
			description:'Intermediate level domain on this programming language.',
			workExperience: 'No'
		},
		{name:'Finacle',
			image:'../../assets/images/workExperience/finacle.jpg',
			description:"Banking solution System. Finacle Scripting for system customization.",
			workExperience: 'Yes'
		},
		{name:'VBA',
			image:'../../assets/images/workExperience/vba.png',
			description:"Macros for Microsoft Office documents' tasks automation",
			workExperience: 'Yes'
		}
	]
}
