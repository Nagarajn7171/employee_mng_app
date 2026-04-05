import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deshboard } from './deshboard';

describe('Deshboard', () => {
  let component: Deshboard;
  let fixture: ComponentFixture<Deshboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deshboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deshboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
