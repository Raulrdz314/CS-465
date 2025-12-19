import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Trip } from '../data/trips';
import { TripsData } from '../data/trips.data';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-trip.html',
  styleUrls: ['./add-trip.css']
})
export class AddTripComponent {
  trip: Trip = new Trip();

  constructor(
    private tripData: TripsData,
    private router: Router
  ) {}

  onSubmit(): void {
    this.tripData.addTrip(this.trip).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
