import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingWrapperComponent } from './floating-wrapper.component';

describe('FloatingWrapperComponent', () => {
  let component: FloatingWrapperComponent;
  let fixture: ComponentFixture<FloatingWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
