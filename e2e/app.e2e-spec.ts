import { GraphQlPage } from './app.po';

describe('graph-ql App', () => {
  let page: GraphQlPage;

  beforeEach(() => {
    page = new GraphQlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
