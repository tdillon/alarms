export class AlarmsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('alarms-app h1')).getText();
  }
}
