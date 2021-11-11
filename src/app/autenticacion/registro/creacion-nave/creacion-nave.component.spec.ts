import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionNaveComponent } from './creacion-nave.component';

describe('CreacionNaveComponent', () => {
  let component: CreacionNaveComponent;
  let fixture: ComponentFixture<CreacionNaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionNaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionNaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
