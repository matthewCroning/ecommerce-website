import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { AlertService } from '../../services/alert.service';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ anchor: 'enterFade', duration: 1500}),
  ]
})
export class AlertComponent implements OnInit {

  alertMessage;
  
  constructor( private AlertService: AlertService ){
    this.AlertService.alert.subscribe(message => {
      this.alertMessage = message;
    });
  }

  ngOnInit(): void {
   
  }

}
