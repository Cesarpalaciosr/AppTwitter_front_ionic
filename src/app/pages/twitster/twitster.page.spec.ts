import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwitsterPage } from './twitster.page';

describe('TwitsterPage', () => {
  let component: TwitsterPage;
  let fixture: ComponentFixture<TwitsterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TwitsterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
