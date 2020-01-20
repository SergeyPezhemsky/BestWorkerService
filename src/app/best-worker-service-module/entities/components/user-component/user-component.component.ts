import { Component, OnInit } from '@angular/core';
import {workers} from '../../../../../mock/workersMock';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  public worker: BestWorker[];

  constructor() {
  }

  ngOnInit() {
    this.worker = workers;
  }

}
