import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrooperComponent } from './trooper.component';

describe('TrooperComponent', () => {
  let component: TrooperComponent;
  let fixture: ComponentFixture<TrooperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrooperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrooperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
