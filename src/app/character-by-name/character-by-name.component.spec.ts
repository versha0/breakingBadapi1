import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterByNameComponent } from './character-by-name.component';

describe('CharacterByNameComponent', () => {
  let component: CharacterByNameComponent;
  let fixture: ComponentFixture<CharacterByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
