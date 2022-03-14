import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paas-list',
  templateUrl: './paas-list.component.html',
  styleUrls: ['./paas-list.component.scss']
})
export class PaasListComponent implements OnInit {
  timings = [
    { value: 'today', label: 'today' },
    { value: 'tomorrow', label: 'tomorrow' },
    { value: 'yesterday', label: 'yesterday' }
];

selectedOption = this.timings[0].value;
  constructor() { }

  ngOnInit(): void {
  }

}
