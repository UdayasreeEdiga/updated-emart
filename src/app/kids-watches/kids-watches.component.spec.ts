import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsWatchesComponent } from './kids-watches.component';

describe('KidsWatchesComponent', () => {
  let component: KidsWatchesComponent;
  let fixture: ComponentFixture<KidsWatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsWatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsWatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
