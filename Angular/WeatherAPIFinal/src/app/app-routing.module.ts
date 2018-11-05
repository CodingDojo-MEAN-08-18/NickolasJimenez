import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';

const routes: Routes = [
  // Seattle, WA - 'http://localhost:4200/seattle'
  {path: 'seattle', component: SeattleComponent},
  // San Jose, CA - 'http://localhost:4200/sanjose'
  {path: 'sanjose', component: SanjoseComponent},
  // Burbank, CA - 'http://localhost:4200/burbank'
  {path: 'burbank', component: BurbankComponent},
  // Dallas, TX - 'http://localhost:4200/dallas'
  {path: 'dallas', component: DallasComponent},
  // Washington D.C. - 'http://localhost:4200/dc'
  {path: 'dc', component: DcComponent},
  // Chicago, IL - 'http://localhost:4200/chicago
  {path: 'chicago', component: ChicagoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
