export class MeansStackPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('means-stack-app h1')).getText();
  }
}
