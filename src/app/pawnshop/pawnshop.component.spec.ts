import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PawnshopComponent } from './pawnshop.component';

describe('PawnshopComponent', () => {
  let component: PawnshopComponent;
  let fixture: ComponentFixture<PawnshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PawnshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PawnshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
