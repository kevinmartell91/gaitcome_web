import { GaitcomeWebPage } from './app.po';

describe('gaitcome-web App', function() {
  let page: GaitcomeWebPage;

  beforeEach(() => {
    page = new GaitcomeWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
