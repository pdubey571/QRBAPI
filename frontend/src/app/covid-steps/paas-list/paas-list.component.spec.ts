import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaasListComponent } from './paas-list.component';

describe('PaasListComponent', () => {
  let component: PaasListComponent;
  let fixture: ComponentFixture<PaasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
