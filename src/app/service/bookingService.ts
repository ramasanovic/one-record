import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

export const BASE_URI: string = "http://localhost:8080/spring/offline"

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private httpClient: HttpClient) {
  }

  getAirports(): Observable<any> {
    return this.httpClient.get<any>(BASE_URI + "/getAirports", httpOptions);
  }
}
