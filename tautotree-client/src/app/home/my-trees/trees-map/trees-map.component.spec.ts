import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreesMapComponent } from './trees-map.component';

describe('TreesMapComponent', () => {
  let component: TreesMapComponent;
  let fixture: ComponentFixture<TreesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreesMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
