import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAnimalDataDialogComponent } from './user-animal-data-dialog.component';

describe('UserAnimalDataDialogComponent', () => {
  let component: UserAnimalDataDialogComponent;
  let fixture: ComponentFixture<UserAnimalDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAnimalDataDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAnimalDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
