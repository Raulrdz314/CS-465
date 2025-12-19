import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TripsData {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  // Helper: JWT Auth Header
  private getAuthOptions() {
    const token = this.authService.getToken();
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  // PUBLIC ROUTES
  getTrips() {
    return this.http.get(this.apiBaseUrl + '/trips');
  }

  getTrip(tripCode: string) {
    return this.http.get(this.apiBaseUrl + '/trips/' + tripCode);
  }

  // PROTECTED ADMIN ROUTES
  addTrip(trip: any) {
    return this.http.post(
      this.apiBaseUrl + '/trips',
      trip,
      this.getAuthOptions()
    );
  }

  updateTrip(tripCode: string, trip: any) {
    return this.http.put(
      this.apiBaseUrl + '/trips/' + tripCode,
      trip,
      this.getAuthOptions()
    );
  }

  deleteTrip(tripCode: string) {
    return this.http.delete(
      this.apiBaseUrl + '/trips/' + tripCode,
      this.getAuthOptions()
    );
  }
}
