import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayFinderComponent } from './play-finder.component';

describe('PlayFinderComponent', () => {
  let component: PlayFinderComponent;
  let fixture: ComponentFixture<PlayFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
