import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router'

@Component({
  selector: 'app-verify-pin',
  templateUrl: './verify-pin.component.html',
  styleUrls: ['./verify-pin.component.scss']
})
export class VerifyPinComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  btnClick(pType:any) {
    if(pType=='C')
    {
    this.router.navigateByUrl('/welcome');
    }
    else
    {this.router.navigateByUrl('/user/buyer/menu');}

  }
}
