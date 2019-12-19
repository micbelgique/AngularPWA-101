import { Component, OnInit } from '@angular/core';
import { ThisisaserviceService } from '../thisisaservice.service';

@Component({
  selector: 'app-lenomdevotrecomponent',
  templateUrl: './lenomdevotrecomponent.component.html',
  styleUrls: ['./lenomdevotrecomponent.component.css']
})
export class LenomdevotrecomponentComponent implements OnInit {
  public datas = [];
  public currentData = '';
  constructor(
    private thisIsAService: ThisisaserviceService
  ) { }

  ngOnInit() {
  }
  getDatas() {
    this.datas = this.thisIsAService.getData();
  }
  addData() {
    this.thisIsAService.addData(this.currentData);
    this.currentData = '';
    this.getDatas();
    console.log(this.currentData);
  }
}
