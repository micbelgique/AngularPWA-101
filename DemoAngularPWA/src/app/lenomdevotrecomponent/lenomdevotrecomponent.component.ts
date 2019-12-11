import { Component, OnInit } from '@angular/core';
import { ThisisaserviceService } from '../thisisaservice.service';

@Component({
  selector: 'app-lenomdevotrecomponent',
  templateUrl: './lenomdevotrecomponent.component.html',
  styleUrls: ['./lenomdevotrecomponent.component.css']
})
export class LenomdevotrecomponentComponent implements OnInit {

  constructor(
    private thisIsAService: ThisisaserviceService
  ) { }

  ngOnInit() {
  }

}
