import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.scss']
})
export class MenuEditComponent implements OnInit {
  drinks = [
    { value: 'drinks', label: 'drinks' },
    { value: 'drinks', label: 'drinks' },
    { value: 'drinks', label: 'drinks' }
  ];
  categories = [
    { value: 'coffee', label: 'coffee' },
    { value: 'juice', label: 'juice' },
    { value: 'tea', label: 'tea' }
  ];

  min = [
    { value: 'min : 1', label: 'min : 1' },
    { value: 'min : 0', label: 'min : 0' },
  ];
  max = [
    { value: 'max : 0', label: 'max : 0' },
    { value: 'max : 1', label: 'max : 1' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
