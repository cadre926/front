import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {

  id!: number;
  reservation: Reservation=new Reservation();
  submitted=false;

  constructor(private route: ActivatedRoute,private router: Router,
    private reservationService: ReservationService) { }

  ngOnInit() {
    this.reservation = new Reservation();

    this.id = this.route.snapshot.params['id'];
    
    this.reservationService.getReservation(this.id)
      .subscribe(data => {
        console.log(data)
        this.reservation = data;
      }, error => console.log(error));
  }

  updateReservation() {
    this.reservationService.updateReservation(this.id, this.reservation)
      .subscribe(data => {
        console.log(data);
        this.reservation = new Reservation();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateReservation();    
  }

  gotoList() {
    this.router.navigate(['/reservations']);
  }
}