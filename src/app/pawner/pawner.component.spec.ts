import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PawnerComponent } from './pawner.component';

describe('PawnerComponent', () => {
  let component: PawnerComponent;
  let fixture: ComponentFixture<PawnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PawnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PawnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
