import { AlarmsPage } from './app.po';

describe('alarms App', function() {
  let page: AlarmsPage;

  beforeEach(() => {
    page = new AlarmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('alarms works!');
  });
});
