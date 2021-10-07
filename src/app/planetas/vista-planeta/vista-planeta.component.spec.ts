import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPlanetaComponent } from './vista-planeta.component';

describe('VistaPlanetaComponent', () => {
  let component: VistaPlanetaComponent;
  let fixture: ComponentFixture<VistaPlanetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPlanetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPlanetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
