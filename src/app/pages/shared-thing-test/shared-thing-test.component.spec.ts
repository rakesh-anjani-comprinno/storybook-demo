import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedThingTestComponent } from './shared-thing-test.component';

describe('SharedThingTestComponent', () => {
  let component: SharedThingTestComponent;
  let fixture: ComponentFixture<SharedThingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedThingTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedThingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
