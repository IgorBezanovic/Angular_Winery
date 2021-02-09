import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VineComponent } from './vine.component';

describe('VineComponent', () => {
  let component: VineComponent;
  let fixture: ComponentFixture<VineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
