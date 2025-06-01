import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEndpointComponent } from './main-endpoint.component';

describe('MainEndpointComponent', () => {
  let component: MainEndpointComponent;
  let fixture: ComponentFixture<MainEndpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainEndpointComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
