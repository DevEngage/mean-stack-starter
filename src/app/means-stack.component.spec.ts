import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MeansStackAppComponent } from '../app/means-stack.component';

beforeEachProviders(() => [MeansStackAppComponent]);

describe('App: MeansStack', () => {
  it('should create the app',
      inject([MeansStackAppComponent], (app: MeansStackAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'means-stack works!\'',
      inject([MeansStackAppComponent], (app: MeansStackAppComponent) => {
    expect(app.title).toEqual('means-stack works!');
  }));
});
