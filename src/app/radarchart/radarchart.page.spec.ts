import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadarchartPage } from './radarchart.page';

describe('RadarchartPage', () => {
  let component: RadarchartPage;
  let fixture: ComponentFixture<RadarchartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarchartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
