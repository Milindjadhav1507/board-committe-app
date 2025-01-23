import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XsettingsComponent } from './xsettings.component';

describe('XsettingsComponent', () => {
  let component: XsettingsComponent;
  let fixture: ComponentFixture<XsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XsettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
