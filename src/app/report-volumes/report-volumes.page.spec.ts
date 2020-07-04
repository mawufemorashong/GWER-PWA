import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportVolumesPage } from './report-volumes.page';

describe('ReportVolumesPage', () => {
  let component: ReportVolumesPage;
  let fixture: ComponentFixture<ReportVolumesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportVolumesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportVolumesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
