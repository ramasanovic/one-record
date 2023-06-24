import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StepperComponent} from "./component/stepper/stepper.component";
import {ConfirmComponent} from "./component/confirm/confirm.component";

const routes: Routes = [
  {path: 'stepper', component: StepperComponent},
  {path: 'confirm', component: ConfirmComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
