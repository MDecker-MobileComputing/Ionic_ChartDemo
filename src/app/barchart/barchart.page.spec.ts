import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarchartPage } from './barchart.page';

describe('BarchartPage', () => {
  let component: BarchartPage;
  let fixture: ComponentFixture<BarchartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
