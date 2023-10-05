import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NFormComponent } from './n-form.component';

describe('NFormComponent', () => {
  let component: NFormComponent;
  let fixture: ComponentFixture<NFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
