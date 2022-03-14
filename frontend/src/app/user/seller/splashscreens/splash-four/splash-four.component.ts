import { Component, OnInit } from '@angular/core';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

const optionsWithIcons: {name: string, icon: string}[] = [
  {'name': 'America', 'icon': 'icon001.svg'},
  {'name': 'India', 'icon': 'icon001.svg'},
  {'name': 'China', 'icon': 'icon001.svg'}
]

@Component({
  selector: 'app-splash-four',
  templateUrl: './splash-four.component.html',
  styleUrls: ['./splash-four.component.scss']
})
export class SplashFourComponent implements OnInit {
  avOptions = [
    {'id': 1, 'name': 'America', 'icon': 'icon001.svg'},
    {'id': 2, 'name': 'India', 'icon': 'icon001.svg'},
    {'id': 3, 'name': 'China', 'icon': 'icon001.svg'}
  ]
  selectedOption = this.avOptions[1].name;

  constructor() { }

  ngOnInit(): void {
  }

}
