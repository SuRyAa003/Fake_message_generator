import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalnavbarComponent } from './globalnavbar.component';

describe('GlobalnavbarComponent', () => {
  let component: GlobalnavbarComponent;
  let fixture: ComponentFixture<GlobalnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalnavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlobalnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
