import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEstrellaComponent } from './info-estrella.component';

describe('InfoEstrellaComponent', () => {
  let component: InfoEstrellaComponent;
  let fixture: ComponentFixture<InfoEstrellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoEstrellaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEstrellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
