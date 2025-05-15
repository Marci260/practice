import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelpoersComponent } from './develpoers.component';

describe('DevelpoersComponent', () => {
  let component: DevelpoersComponent;
  let fixture: ComponentFixture<DevelpoersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevelpoersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelpoersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
