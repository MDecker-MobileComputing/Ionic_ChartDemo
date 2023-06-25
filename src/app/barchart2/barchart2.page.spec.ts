import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Barchart2Page } from './barchart2.page';

describe('Barchart2Page', () => {
  let component: Barchart2Page;
  let fixture: ComponentFixture<Barchart2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Barchart2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
