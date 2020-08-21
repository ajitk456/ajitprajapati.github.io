import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { ViewresumeComponent } from './viewresume/viewresume.component';
import { HighlightDirective } from './highlights/highlight.directive';
import { ProjectComponent } from './project/project.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { HomepagecomponentComponent } from './homepagecomponent/homepagecomponent.component';

const appRoutes: Routes = [
  {path: 'homepage' , component: HomepagecomponentComponent},
  {path: 'aboutme', component: AboutmeComponent},
  { path: 'assets/Ajit_Prajapati_Resume.pdf', redirectTo: '../assets/Ajit_Prajapati_Resume.pdf'},
  {path: 'skills', component: SkillsComponent},
  {path: 'education', component: EducationComponent},
  {path: 'employment', component: EmploymentComponent},
  {path: 'contactme', component: ContactmeComponent},
  {path: 'viewresume', component: ViewresumeComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'screenshots', component: ScreenshotsComponent},
  {path: '', redirectTo: '/homepage', pathMatch: 'full'}
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
    ViewresumeComponent,
    HighlightDirective,
    ProjectComponent,
    ScreenshotsComponent,
    EmploymentComponent,
    HomepagecomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
