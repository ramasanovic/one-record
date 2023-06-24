import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  cityList: City[] | undefined;
  booking: Booking = {};

  ngOnInit(): void {
    this.cityList = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

  }

}

interface Booking {

  origin?: City | undefined;
  destination?: City | undefined;
  date?: Date | undefined;
  piece?: number;
  weight?: number;
  dimension?: number;
}

interface City {
  name: string;
  code: string;
}
