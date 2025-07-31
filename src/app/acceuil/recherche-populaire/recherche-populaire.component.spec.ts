import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchePopulaireComponent } from './recherche-populaire.component';

describe('RecherchePopulaireComponent', () => {
  let component: RecherchePopulaireComponent;
  let fixture: ComponentFixture<RecherchePopulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecherchePopulaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecherchePopulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
