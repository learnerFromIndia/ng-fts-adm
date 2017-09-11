import { NgFtsAdmPage } from './app.po';

describe('ng-fts-adm App', function() {
  let page: NgFtsAdmPage;

  beforeEach(() => {
    page = new NgFtsAdmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
