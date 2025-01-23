import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XintegrationwithAppComponent } from './xintegrationwith-app.component';

describe('XintegrationwithAppComponent', () => {
  let component: XintegrationwithAppComponent;
  let fixture: ComponentFixture<XintegrationwithAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XintegrationwithAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XintegrationwithAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
