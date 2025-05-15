import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelpoersComponent } from './develpoers/develpoers.component';
import { JobComponent } from './job/job.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  //{path:'',redirectTo: 'app', pathMatch:'full'},
  {path:'developers',component: DevelpoersComponent},
  {path:'jobs',component: JobComponent},
  {path:'skills',component:SkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
