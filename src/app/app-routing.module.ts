import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { CurriculumVComponent } from './curriculum-v/curriculum-v.component';
import { LanguagesComponent } from './languages/languages.component';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [
  { path: 'About', component: AboutComponent },
  { path: 'Resume', component: ResumeComponent },
  { path: 'CurriculumV', component: CurriculumVComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Languages', component: LanguagesComponent },
  { path: 'Education', component: EducationComponent },
  { path: 'Technologies', component: TechnologiesComponent },
  { path: '', redirectTo: '/About', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
