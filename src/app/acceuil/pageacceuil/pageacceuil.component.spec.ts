import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageacceuilComponent } from './pageacceuil.component';

describe('PageacceuilComponent', () => {
  let component: PageacceuilComponent;
  let fixture: ComponentFixture<PageacceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageacceuilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageacceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
