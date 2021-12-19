import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterloginComponent } from './afterlogin.component';

describe('AfterloginComponent', () => {
  let component: AfterloginComponent;
  let fixture: ComponentFixture<AfterloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
