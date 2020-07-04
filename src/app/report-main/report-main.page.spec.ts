import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportMainPage } from './report-main.page';

describe('ReportMainPage', () => {
  let component: ReportMainPage;
  let fixture: ComponentFixture<ReportMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportMainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
