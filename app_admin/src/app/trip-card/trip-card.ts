import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsData } from '../data/trips.data';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html'
})
export class TripCard {
  @Input() trip: any;

  constructor(private tripsData: TripsData) {}

  editTrip() {
    this.trip.name = this.trip.name + ' (Edited)';
    this.tripsData.updateTrip(this.trip.code, this.trip).subscribe();
  }

  deleteTrip() {
    this.tripsData.deleteTrip(this.trip.code).subscribe(() => {
      window.location.reload();
    });
  }
}
