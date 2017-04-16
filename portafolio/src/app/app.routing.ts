import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Components
import { ContactComponent } from './components/contact.component';
import { OverviewComponent } from './components/overview.component';
import { SkillsComponent } from './components/skills.component';
import { XperienceComponent } from './components/xperience.component';

const appRoutes: Routes = [
  {path:'',redirectTo:'/overview', pathMatch:'full'},
  {path:'overview',component:OverviewComponent},
  {path:'contact',component:ContactComponent},
  {path:'skills',component:SkillsComponent},
  {path:'experience',component:XperienceComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);