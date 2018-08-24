import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { postingDescriptionComponent } from './posting-description.component';

describe('postingDescriptionComponent', () => {
  let component: postingDescriptionComponent;
  let fixture: ComponentFixture<postingDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ postingDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(postingDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
