import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseBagsComponent } from './surprise-bags.component';

describe('SurpriseBagsComponent', () => {
  let component: SurpriseBagsComponent;
  let fixture: ComponentFixture<SurpriseBagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurpriseBagsComponent]
    });
    fixture = TestBed.createComponent(SurpriseBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
