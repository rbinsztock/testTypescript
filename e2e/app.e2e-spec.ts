import { TestTypescriptPage } from './app.po';

describe('test-typescript App', () => {
  let page: TestTypescriptPage;

  beforeEach(() => {
    page = new TestTypescriptPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
