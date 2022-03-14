import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  active = 1;
  activeTab = "general";
  constructor() { }

  ngOnInit(): void {
  }

  tabSwitch(currentVal: string) {
    this.activeTab = currentVal;
  }
}
