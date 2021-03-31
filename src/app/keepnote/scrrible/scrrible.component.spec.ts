import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrribleComponent } from './scrrible.component';

describe('ScrribleComponent', () => {
  let component: ScrribleComponent;
  let fixture: ComponentFixture<ScrribleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrribleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrribleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
