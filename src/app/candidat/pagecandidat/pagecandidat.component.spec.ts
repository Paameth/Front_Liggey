import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecandidatComponent } from './pagecandidat.component';

describe('PagecandidatComponent', () => {
  let component: PagecandidatComponent;
  let fixture: ComponentFixture<PagecandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagecandidatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagecandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
