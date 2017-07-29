import { AirBnbPage } from './app.po';

describe('air-bnb App', () => {
  let page: AirBnbPage;

  beforeEach(() => {
    page = new AirBnbPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
