import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarfullComponent } from './navbarfull.component';

describe('NavbarfullComponent', () => {
  let component: NavbarfullComponent;
  let fixture: ComponentFixture<NavbarfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarfullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
