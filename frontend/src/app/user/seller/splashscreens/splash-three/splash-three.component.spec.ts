import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashThreeComponent } from './splash-three.component';

describe('SplashThreeComponent', () => {
  let component: SplashThreeComponent;
  let fixture: ComponentFixture<SplashThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
