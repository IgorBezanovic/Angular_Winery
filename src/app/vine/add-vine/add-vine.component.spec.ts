import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVineComponent } from './add-vine.component';

describe('AddVineComponent', () => {
  let component: AddVineComponent;
  let fixture: ComponentFixture<AddVineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
