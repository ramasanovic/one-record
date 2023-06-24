import {Component, OnInit} from '@angular/core';
import {BookingService} from "../../service/bookingService";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  providers: [MessageService]
})
export class BookingComponent implements OnInit {
  cityList: City[] | undefined;
  booking: Booking = {};

  constructor(private bookingService: BookingService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.cityList = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

  }

  onClick(){
    this.bookingService.getAirports().subscribe((data) => {
      this.messageService.add({severity:'success', summary:'Success', detail:'Airport Service'});
      console.log(data)
    })
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
