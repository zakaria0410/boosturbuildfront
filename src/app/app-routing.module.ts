import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorienroulantComponent } from './categorieengin/categorienroulant/categorienroulant.component';
import { CategorieroulantComponent } from './categorieengin/categorieroulant/categorieroulant.component';
import { EnginnrComponent } from './engin/enginnr/enginnr.component';
import { EnginrComponent } from './engin/enginr/enginr.component';
import { HomeComponent } from './home/home.component';
import { PanneComponent } from './panne/panne.component';
import { CentreinvistissementComponent } from './parametrage/centreinvistissement/centreinvistissement.component';
import { ParametragemmComponent } from './parametragemm/parametragemm.component';
import { PlanmaintenanceComponent } from './planmaintenance/planmaintenance.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'users',component:UserComponent},
{path:'catsnr',component:CategorienroulantComponent},
{path:'catsr',component:CategorieroulantComponent},
{path:'egr',component:EnginrComponent},
{path:'egnr',component:EnginnrComponent},
{path:'cis',component:CentreinvistissementComponent},
{path:'paramMM/:idmm',component:ParametragemmComponent},
{path:'plm',component:PlanmaintenanceComponent},
{path:"pannes",component:PanneComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
