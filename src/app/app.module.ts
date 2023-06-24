import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StepsModule} from "primeng/steps";
import {StepperComponent} from './component/stepper/stepper.component';
import {ConfirmComponent} from './component/confirm/confirm.component';
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DynamicDialogModule} from "primeng/dynamicdialog";
import {TruckComponent} from './component/truck/truck.component';
import {ForwarderComponent} from './component/forwarder/forwarder.component';
import {CustomerComponent} from './component/customer/customer.component';
import {DockModule} from "primeng/dock";
import {RadioButtonModule} from "primeng/radiobutton";
import {MenubarModule} from "primeng/menubar";
import {BookingComponent} from './component/booking/booking.component';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {CalendarModule} from "primeng/calendar";
import {TableModule} from "primeng/table";
import {HttpClientModule} from "@angular/common/http";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    ConfirmComponent,
    TruckComponent,
    ForwarderComponent,
    CustomerComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StepsModule,
    ButtonModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    DockModule,
    RadioButtonModule,
    MenubarModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    CalendarModule,
    TableModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
