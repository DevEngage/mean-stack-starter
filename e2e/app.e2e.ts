import { MeansStackPage } from './app.po';

describe('means-stack App', function() {
  let page: MeansStackPage;

  beforeEach(() => {
    page = new MeansStackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('means-stack works!');
  });
});
