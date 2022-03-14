import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.scss']
})
export class MenuViewComponent implements OnInit {
  constructor(private router: Router) { }
  thId = '';
  activeSearch: boolean = false;
  openMenu: boolean = false;
  ngOnInit(): void {
  }

  toggleHelper(event:any) {
    event.target.classList.toggle("active");
    event.target.parentElement.classList.toggle("active-submenu");
  }

  btnClick() {
    this.router.navigateByUrl('/user/seller/menu/menuedit');
  }

  slides = [
    {img: "./assets/images/gallery001.jpg"},
    {img: "./assets/images/gallery002.jpg"},
    {img: "./assets/images/gallery003.jpg"},
    {img: "./assets/images/gallery004.jpg"}
  ];
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "dots": true
  };
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e:any) {
    console.log(e);
   
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    // console.log(e.currentSlide)
    // if(e.currentSlide != 0) {
    //   e.event.target.parentElement.parentElement.parentElement.classList.add('hideTumb');
    // }else {
    //   e.event.target.parentElement.parentElement.parentElement.classList.remove('hideTumb');
    // }
  }
  
  beforeChange(e:any) {
    console.log(e.currentSlide)
  }

  toggleSearch() {
    this.activeSearch = !this.activeSearch;
  }

  toggleMenu() {
    this.openMenu = !this.openMenu;
  }
  
}

