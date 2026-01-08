import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacMessagerComponent } from './mac-messager.component';

describe('MacMessagerComponent', () => {
  let component: MacMessagerComponent;
  let fixture: ComponentFixture<MacMessagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacMessagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacMessagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
