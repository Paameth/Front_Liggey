import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerecruteurComponent } from './pagerecruteur.component';

describe('PagerecruteurComponent', () => {
  let component: PagerecruteurComponent;
  let fixture: ComponentFixture<PagerecruteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagerecruteurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagerecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
