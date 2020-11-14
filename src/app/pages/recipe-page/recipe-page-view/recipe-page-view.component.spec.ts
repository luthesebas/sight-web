import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipePageViewComponent } from './recipe-page-view.component';

describe('RecipePageViewComponent', () => {
  let component: RecipePageViewComponent;
  let fixture: ComponentFixture<RecipePageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipePageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipePageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
