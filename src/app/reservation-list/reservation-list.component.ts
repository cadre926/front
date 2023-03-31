import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';
import { Observable } from 'rxjs';

@Component({
  selector: "app-reservation-list",
  templateUrl: "./reservation-list.component.html",
  styleUrls: ["./reservation-list.component.css"]
})
export class ReservationListComponent {

   
  reservations!: Observable<Reservation[]>;

  constructor(private reservationService: ReservationService,
    private router: Router) {}


    ngOnInit() {
      this.reloadData();
    }

    reloadData() {
      this.reservations = this.reservationService.getReservationsList();
    }

    deleteReservation(id: number) {
      this.reservationService.deleteReservation(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  
    
}

