import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenomdevotrecomponentComponent } from './lenomdevotrecomponent.component';

describe('LenomdevotrecomponentComponent', () => {
  let component: LenomdevotrecomponentComponent;
  let fixture: ComponentFixture<LenomdevotrecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenomdevotrecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenomdevotrecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
