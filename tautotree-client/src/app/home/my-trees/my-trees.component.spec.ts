import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTreesComponent } from './my-trees.component';

describe('MyTreesComponent', () => {
  let component: MyTreesComponent;
  let fixture: ComponentFixture<MyTreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTreesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
