import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'one-record-front';
  menuPos : "bottom" | "top" | "left" | "right" = "bottom";
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Turkish Cargo',
        routerLink: 'stepper',
        icon: 'pi pi-fw pi-globe'
      },
      {
        label: 'Truck',
        routerLink: 'truck',
        icon: 'pi pi-fw pi-box'
      },
      {
        label: 'Forwarder',
        routerLink: 'forwarder',
        icon: 'pi pi-fw pi-directions'
      },
      {
        label: 'Customer',
        routerLink: 'customer',
        icon: 'pi pi-fw pi-user'
      },
      {
        label: 'Booking',
        routerLink: 'booking',
        icon: 'pi pi-fw pi-book'
      }
    ];
  }
}
