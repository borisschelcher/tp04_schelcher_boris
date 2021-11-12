import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapDataComponent } from './recap-data.component';

describe('RecapDataComponent', () => {
  let component: RecapDataComponent;
  let fixture: ComponentFixture<RecapDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
