import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSnippetComponent } from './view-sinppet.component';

describe('ViewSinppetComponent', () => {
  let component: ViewSnippetComponent;
  let fixture: ComponentFixture<ViewSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSnippetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
