import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepnoteComponent } from './keepnote.component';

describe('KeepnoteComponent', () => {
  let component: KeepnoteComponent;
  let fixture: ComponentFixture<KeepnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeepnoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
