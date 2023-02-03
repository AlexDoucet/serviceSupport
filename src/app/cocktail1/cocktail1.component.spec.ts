import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cocktail1Component } from './cocktail1.component';

describe('Cocktail1Component', () => {
  let component: Cocktail1Component;
  let fixture: ComponentFixture<Cocktail1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cocktail1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cocktail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
