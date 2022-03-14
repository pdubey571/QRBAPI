import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.scss']
})
export class MenuViewComponent implements OnInit {
  thId = '';
  activeSearch: boolean = false;
  openMenu: boolean = false;

  activeTab = 'active'
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleHelper(event:any) {
    event.target.classList.toggle("active");
    event.target.parentElement.classList.toggle("active-submenu");
  }

  btnClick() {
    this.router.navigateByUrl('/user/seller/menu/menuedit');
  }

  toggleSearch() {
    this.activeSearch = !this.activeSearch;
  }

  toggleMenu() {
    this.openMenu = !this.openMenu;
  }

  mTab(activeTab:any) {
    this.activeTab = activeTab;
  }
}
