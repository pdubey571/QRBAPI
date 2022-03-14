import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaasManageComponent } from './paas-manage.component';

describe('PaasManageComponent', () => {
  let component: PaasManageComponent;
  let fixture: ComponentFixture<PaasManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaasManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaasManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
