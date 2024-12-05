import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicColorsComponent } from './dynamic-colors.component';

describe('DynamicColorsComponent', () => {
  let component: DynamicColorsComponent;
  let fixture: ComponentFixture<DynamicColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicColorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
