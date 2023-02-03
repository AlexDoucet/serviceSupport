import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cocktail2Component } from './cocktail2.component';

describe('Cocktail2Component', () => {
  let component: Cocktail2Component;
  let fixture: ComponentFixture<Cocktail2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cocktail2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cocktail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
