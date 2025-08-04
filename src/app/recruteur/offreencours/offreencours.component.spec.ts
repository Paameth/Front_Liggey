import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreencoursComponent } from './offreencours.component';

describe('OffreencoursComponent', () => {
  let component: OffreencoursComponent;
  let fixture: ComponentFixture<OffreencoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffreencoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreencoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
