import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeHabitudesComponent } from './liste-habitudes.component';

describe('ListeHabitudesComponent', () => {
  let component: ListeHabitudesComponent;
  let fixture: ComponentFixture<ListeHabitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeHabitudesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeHabitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
