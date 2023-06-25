import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinechartPage } from './linechart.page';

describe('LinechartPage', () => {
  let component: LinechartPage;
  let fixture: ComponentFixture<LinechartPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LinechartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
