import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubmittedTransactionComponent } from './view-submitted-transaction.component';

describe('ViewSubmittedTransactionComponent', () => {
  let component: ViewSubmittedTransactionComponent;
  let fixture: ComponentFixture<ViewSubmittedTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSubmittedTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSubmittedTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
