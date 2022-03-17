import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConComponent } from './delete-con.component';

describe('DeleteConComponent', () => {
  let component: DeleteConComponent;
  let fixture: ComponentFixture<DeleteConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
