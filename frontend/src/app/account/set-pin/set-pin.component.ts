import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-pin',
  templateUrl: './set-pin.component.html',
  styleUrls: ['./set-pin.component.scss']
})
export class SetPinComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  btnClick() {
    this.router.navigateByUrl('/user/seller/splash/splashone');
  }
}
