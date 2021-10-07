import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNaveComponent } from './info-nave.component';

describe('InfoNaveComponent', () => {
  let component: InfoNaveComponent;
  let fixture: ComponentFixture<InfoNaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoNaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
