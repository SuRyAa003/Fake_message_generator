import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidMessagerComponent } from './android-messager.component';

describe('AndroidMessagerComponent', () => {
  let component: AndroidMessagerComponent;
  let fixture: ComponentFixture<AndroidMessagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndroidMessagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AndroidMessagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
