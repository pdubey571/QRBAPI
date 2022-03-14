import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-splash-three',
  templateUrl: './splash-three.component.html',
  styleUrls: ['./splash-three.component.scss']
})
export class SplashThreeComponent implements OnInit {
  // @ViewChild('dp') dp: NgbDatepicker | undefined;
  modelDate: NgbDateStruct | undefined;
  isActive: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleClass(){
    this.isActive = !this.isActive;
  }

}
