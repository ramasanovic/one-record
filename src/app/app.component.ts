import {Component, OnInit} from '@angular/core';
import {Booking} from "./model/Booking";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit{
  title = 'one-record-front';
  menuPos : "bottom" | "top" | "left" | "right" = "bottom";
  items: MenuItem[] | undefined;
  bookings: Booking[] = [];



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
        label: 'Freight Forwarder',
        routerLink: 'freight-forwarder',
        icon: 'pi pi-fw pi-arrow-circle-right'
      },
      {
        label: 'Forwarder',
        routerLink: 'booking',
        icon: 'pi pi-fw pi-book'
      }
    ];

    this.bookings.push({
      origin: 'ADA',
      destination: 'IST',
      date: '23.06.2023',
      dimension: 3,
      weight: 50,
      piece: 2,
      status: 1
    });
    this.bookings.push({
      origin: 'ADA',
      destination: 'IST',
      date: '23.06.2023',
      dimension: 3,
      weight: 50,
      piece: 2,
      status: 1
    });
    this.bookings.push({
      origin: 'ADA',
      destination: 'IST',
      date: '23.06.2023',
      dimension: 3,
      weight: 50,
      piece: 2,
      status: 1
    });
    this.bookings.push({
      origin: 'ADA',
      destination: 'IST',
      date: '23.06.2023',
      dimension: 3,
      weight: 50,
      piece: 2,
      status: 1
    });
    this.bookings.push({
      origin: 'ADA',
      destination: 'IST',
      date: '23.06.2023',
      dimension: 3,
      weight: 50,
      piece: 2,
      status: 1
    });
    this.bookings.push({
      origin: 'ADA',
      destination: 'IST',
      date: '23.06.2023',
      dimension: 3,
      weight: 50,
      piece: 2,
      status: 1
    });
    this.bookings.push({
      origin: 'ADA',
      destination: 'IST',
      date: '23.06.2023',
      dimension: 3,
      weight: 50,
      piece: 2,
      status: 1
    });
  }

}
