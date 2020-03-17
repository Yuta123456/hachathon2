import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProblemListPage } from './problem-list.page';

describe('ProblemListPage', () => {
  let component: ProblemListPage;
  let fixture: ComponentFixture<ProblemListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProblemListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
