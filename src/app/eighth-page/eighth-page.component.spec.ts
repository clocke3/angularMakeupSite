import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EighthPageComponent } from './eighth-page.component';

describe('EighthPageComponent', () => {
  let component: EighthPageComponent;
  let fixture: ComponentFixture<EighthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EighthPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EighthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
