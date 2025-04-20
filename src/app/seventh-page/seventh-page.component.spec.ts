import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhPageComponent } from './seventh-page.component';

describe('SeventhPageComponent', () => {
  let component: SeventhPageComponent;
  let fixture: ComponentFixture<SeventhPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeventhPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeventhPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
