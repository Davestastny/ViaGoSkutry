import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NolicenseComponent } from './nolicense.component';

describe('NolicenseComponent', () => {
  let component: NolicenseComponent;
  let fixture: ComponentFixture<NolicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NolicenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NolicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
