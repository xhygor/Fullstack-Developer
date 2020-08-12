import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemMenuNavBarComponent} from './item-menu-nav-bar.component';

describe('ItemMenuNavBarComponent', () => {
  let component: ItemMenuNavBarComponent;
  let fixture: ComponentFixture<ItemMenuNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemMenuNavBarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMenuNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
