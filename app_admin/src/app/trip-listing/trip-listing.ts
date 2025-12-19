import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TripCard } from '../trip-card/trip-card';
import { TripsData } from '../data/trips.data';


@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrls: ['./trip-listing.css']
})
export class TripListing implements OnInit {
  trips: any;

  constructor(private tripData: TripsData) {}

  ngOnInit(): void {
    console.log('TripListing ngOnInit fired');

    this.tripData.getTrips().subscribe({
      next: (data: any) => {
        console.log('TRIPS:', data);
        this.trips = data;
      },
      error: (err) => {
        console.log('API ERROR:', err);
      }
    });
  }
}

