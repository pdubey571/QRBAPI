import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashFourComponent } from './splash-four.component';

describe('SplashFourComponent', () => {
  let component: SplashFourComponent;
  let fixture: ComponentFixture<SplashFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
