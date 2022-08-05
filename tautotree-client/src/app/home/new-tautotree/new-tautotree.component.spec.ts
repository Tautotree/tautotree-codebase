import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTautotreeComponent } from './new-tautotree.component';

describe('NewTautotreeComponent', () => {
  let component: NewTautotreeComponent;
  let fixture: ComponentFixture<NewTautotreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTautotreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTautotreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
