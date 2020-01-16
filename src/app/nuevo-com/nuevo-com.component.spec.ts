import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoComComponent } from './nuevo-com.component';

describe('NuevoComComponent', () => {
  let component: NuevoComComponent;
  let fixture: ComponentFixture<NuevoComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
