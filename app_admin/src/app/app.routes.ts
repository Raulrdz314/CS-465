import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { TripListing} from './trip-listing/trip-listing';
import { AddTripComponent } from './add-trip/add-trip';

export const routes: Routes = [
  { path: '', component: TripListing },
  { path: 'add-trip', component: AddTripComponent },
  { path: 'login', component: LoginComponent }

];
