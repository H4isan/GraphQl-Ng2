import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApolloPruebaComponent } from './apollo-prueba.component';

describe('ApolloPruebaComponent', () => {
  let component: ApolloPruebaComponent;
  let fixture: ComponentFixture<ApolloPruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApolloPruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApolloPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
