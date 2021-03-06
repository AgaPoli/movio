import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPhotoComponent } from './details-photo.component';

describe('DetailsPhotoComponent', () => {
  let component: DetailsPhotoComponent;
  let fixture: ComponentFixture<DetailsPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
