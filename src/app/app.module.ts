import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StepsModule} from "primeng/steps";
import { StepperComponent } from './component/stepper/stepper.component';
import { ConfirmComponent } from './component/confirm/confirm.component';
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DynamicDialogModule} from "primeng/dynamicdialog";

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StepsModule,
    ButtonModule,
    BrowserAnimationsModule,
    DynamicDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
