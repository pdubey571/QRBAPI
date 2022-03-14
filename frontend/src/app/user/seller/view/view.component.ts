import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  showInfo : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleInfo() {
    this.showInfo = !this.showInfo;
  }
  
}
