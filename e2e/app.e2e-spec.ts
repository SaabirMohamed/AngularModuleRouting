import { AngularModuleRoutingPage } from './app.po';

describe('angular-module-routing App', function() {
  let page: AngularModuleRoutingPage;

  beforeEach(() => {
    page = new AngularModuleRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
