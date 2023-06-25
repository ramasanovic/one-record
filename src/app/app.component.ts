import {Component, OnInit} from '@angular/core';
import {Booking} from "./model/Booking";
import {MenuItem} from "primeng/api";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LogisticsEventService} from "./service/logisticsEventService";

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
  messageList: [] = [];

  constructor(public http: HttpClient, private logisticService: LogisticsEventService) {
  }

  ngOnInit(): void {
    const api_key = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ik1RZFRjMENlbHRlS0N2bkpVQm5RSWd2ckZySUVEbWtDM0FJVTJPUUd1VHMiLCJ0eXAiOiJKV1QifQ.eyJsb2dpc3RpY3NBZ2VudFVSSSI6Imh0dHBzOi8vdGsub25lLXJlY29yZC5saGluZC5kZXYvbG9naXN0aWNzLW9iamVjdHMvMjdmYzZiOWMiLCJ0aWQiOiJiOGE3NDZhNi1jNTQwLTQzZjQtOTJmMy02MTUwYWQwNTcyMTUiLCJhenBhY3IiOiIxIiwic3ViIjoiMGUzNmI2NzctZDE4Mi00NTk2LWJlNDAtZDFmZGIxNTcwNGZlIiwiYXVkIjoiNWI1MDA1YTktN2JmNS00YTlhLWEzMmItYTYyN2QwYmU4M2I5Iiwib2lkIjoiMGUzNmI2NzctZDE4Mi00NTk2LWJlNDAtZDFmZGIxNTcwNGZlIiwidmVyIjoiMi4wIiwiYXpwIjoiNWI1MDA1YTktN2JmNS00YTlhLWEzMmItYTYyN2QwYmU4M2I5IiwiaWF0IjoxNjg3NjI5MDUzLCJleHAiOjE2ODc2MzI2NTMsImlzcyI6Imh0dHBzOi8vYXV0aC5vbmUtcmVjb3JkLmxoaW5kLmRldi9iOGE3NDZhNi1jNTQwLTQzZjQtOTJmMy02MTUwYWQwNTcyMTUvdjIuMC8iLCJuYmYiOjE2ODc2MjkwNTN9.ChjZXeULVT3bXzHceTisU2Vk5tHusn7HS_8FKf5UlmquEedce2SJbPJOSrrfvoaqXhO4KYN5_WH9KBd3Xq0Lur1-LDQ_nyBbNf0-Tbyb5J6RTPOYXRkQiQaqcnjWkkAHdGuBEySdit7QpdknfR355G-XxBjbdcLaFtpCbp_4M3Ugak0O8ES7RUrhzl6HVP9S3LvtWAfJeZr1OkeXgLodnUDJC93QL9plUglOVNlkZPr0XhFo_Et00I6UiMahfQ4T_KzXs2E-Q4MOUbx_m9s9hh9Xmm6w_FrPyD3U4FKsR6cKXbXjgUA2MLfDeJl88h_GFBDrr8CbIFDibibU-UnG9g";

    const headers = new HttpHeaders({
      'Content-Type': 'application/ld+json',
      'Authorization': `Bearer ${api_key}`
    });
    this.getMessageList();

    const requestOptions = { headers: headers };

/*    this.http.get('https://tk.one-record.lhind.dev/logistics-objects/23524062023', requestOptions)
      .subscribe((res: any) => {
        console.log(res);
      });*/

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
  }

  getMessageList() {
    this.logisticService.getMessageList().subscribe(res => {
      console.log(res);
      this.messageList = res;
    })
  }

}
