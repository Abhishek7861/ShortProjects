import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'; 




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,
    private flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {
    if(localStorage.getItem("authValue")=='0'){
      this.router.navigate(['/login']);
      this.flashMessagesService.show("Please login to view My Listing",{cssClass: 'alert-danger', timeout: 3000});
    }
  }

}
