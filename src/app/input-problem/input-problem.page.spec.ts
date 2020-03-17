import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputProblemPage } from './input-problem.page';

describe('InputProblemPage', () => {
  let component: InputProblemPage;
  let fixture: ComponentFixture<InputProblemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputProblemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputProblemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
