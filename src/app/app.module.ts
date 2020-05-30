import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule} from '@angular/forms';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { EmploymentComponent } from './employment/employment.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { ViewskillsComponent } from './viewskills/viewskills.component';
import { ViewresumeComponent } from './viewresume/viewresume.component';
import { HighlightDirective } from './highlights/highlight.directive';
import { ProjectComponent } from './project/project.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'aboutme', component: AboutmeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'education', component: EducationComponent},
  {path: 'employment', component: EmploymentComponent},
  {path: 'contactme', component: ContactmeComponent},
  {path: 'viewskills', component: ViewskillsComponent},
  {path: 'viewresume', component: ViewresumeComponent},
  {path: 'project', component: ProjectComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutmeComponent,
    SkillsComponent,
    EducationComponent,
    ContactmeComponent,
    ViewskillsComponent,
    ViewresumeComponent,
    HighlightDirective,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
