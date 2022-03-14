import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerverifypin',
  templateUrl: './customerverifypin.component.html',
  styleUrls: ['./customerverifypin.component.scss']
})
export class CustomerverifypinComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  btnClick(pType:any) {
    this.router.navigateByUrl('/user/buyer/menu');
  }
}
