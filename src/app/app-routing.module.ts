import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StepperComponent} from "./component/stepper/stepper.component";
import {TruckComponent} from "./component/truck/truck.component";
import {FreightForwarderComponent} from "./component/freight-forwarder/freight-forwarder.component";
import {CustomerComponent} from "./component/customer/customer.component";
import {BookingComponent} from "./component/booking/booking.component";

const routes: Routes = [
  {path: 'stepper', component: StepperComponent},
  {path: 'truck', component: TruckComponent},
  {path: 'freight-forwarder', component: FreightForwarderComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'booking', component: BookingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
