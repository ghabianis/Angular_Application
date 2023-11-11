import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSiteWebComponent } from './contact-site-web.component';

describe('ContactSiteWebComponent', () => {
  let component: ContactSiteWebComponent;
  let fixture: ComponentFixture<ContactSiteWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSiteWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSiteWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
