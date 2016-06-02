import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AlarmsAppComponent } from '../app/alarms.component';

beforeEachProviders(() => [AlarmsAppComponent]);

describe('App: Alarms', () => {
  it('should create the app',
      inject([AlarmsAppComponent], (app: AlarmsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'alarms works!\'',
      inject([AlarmsAppComponent], (app: AlarmsAppComponent) => {
    expect(app.title).toEqual('alarms works!');
  }));
});
