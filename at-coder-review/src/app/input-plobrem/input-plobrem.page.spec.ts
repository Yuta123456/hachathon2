import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputPlobremPage } from './input-plobrem.page';

describe('InputPlobremPage', () => {
  let component: InputPlobremPage;
  let fixture: ComponentFixture<InputPlobremPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPlobremPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputPlobremPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
