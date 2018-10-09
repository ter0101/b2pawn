import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PawnerPledgeComponent } from './pawner-pledge.component';

describe('PawnerPledgeComponent', () => {
  let component: PawnerPledgeComponent;
  let fixture: ComponentFixture<PawnerPledgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PawnerPledgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PawnerPledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
