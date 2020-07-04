import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VolumeListPage } from './volume-list.page';

describe('VolumeListPage', () => {
  let component: VolumeListPage;
  let fixture: ComponentFixture<VolumeListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VolumeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
