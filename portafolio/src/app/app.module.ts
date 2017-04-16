import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

//Components
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact.component';
import { OverviewComponent } from './components/overview.component';
import { SkillsComponent } from './components/skills.component';
import { XperienceComponent } from './components/xperience.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    OverviewComponent,
    SkillsComponent,
    XperienceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
