import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { EventDTO } from 'src/models/eventdto';
import { UserDTO } from 'src/models/userdto';


@Component({
  selector: 'app-insert-event',
  templateUrl: './insert-event.component.html',
  styleUrls: ['./insert-event.component.css']
})
export class InsertEventComponent implements OnInit {

  constructor(private service: EventService) { }

    public event: EventDTO = new EventDTO();
    public user!: UserDTO;
  
    public name!: string;
    public placesAvailable: number;
    public maxCapacity!: number;
    public stadiumName!: string;
    public eventDate!: Date;
  
    ngOnInit(): void {

    }

    public handleSubmit(form: NgForm): void {
      if (form.invalid) {
        return;
      } else {
        console.log(this.event)
        this.service.createEvent(this.event).subscribe(event => {
          this.event = event
        })
      }
  
    }
  }


