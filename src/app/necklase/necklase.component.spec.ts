import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NecklaseComponent } from './necklase.component';

describe('NecklaseComponent', () => {
  let component: NecklaseComponent;
  let fixture: ComponentFixture<NecklaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NecklaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NecklaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
