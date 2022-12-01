import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponents } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponents;
  let fixture: ComponentFixture<MenuComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
