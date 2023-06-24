import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem, PrimeIcons} from "primeng/api";
import {Router} from "@angular/router";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConfirmComponent} from "../confirm/confirm.component";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers:[DialogService]
})
export class StepperComponent implements OnInit, OnDestroy {

  constructor(private router: Router, public dialogService: DialogService) {

  }

  items: MenuItem[] | undefined;
  activeIndex: number = 0;
  ref: DynamicDialogRef | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Reservation',
      },
      {
        label: 'Truck',
      },
      {
        label: 'Warehouse',
      },
      {
        label: 'Departure',
      },
      {
        label: 'Arrival',
      },
      {
        label: 'Unload',
      },
      {
        label: 'Delivery',
      }
    ];
  }

  onActiveIndexChange(event: number) {
    //this.activeIndex = event;
  }

  onConfirmBtn(){
    this.router.navigateByUrl('/confirm')
  }

  openDialog() {
    this.ref = this.dialogService.open(ConfirmComponent,
      {
        width: '50%',
        height: '35%',
        header: 'Confirmation of this process',
      });

    this.ref.onClose.subscribe((res: boolean)=>{
      if(res){
        this.activeIndex++;
      }
    })
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
