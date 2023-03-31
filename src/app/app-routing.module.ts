import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';

const routes: Routes = [

  { path: '', redirectTo: 'reservation', pathMatch: 'full' },
  { path: 'reservations', component: ReservationListComponent },
  { path: 'add', component: CreateReservationComponent },
  { path: 'update/:id', component: UpdateReservationComponent },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
