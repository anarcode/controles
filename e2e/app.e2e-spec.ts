import { PrimeroDesdeDockerPage } from './app.po';

describe('primero-desde-docker App', () => {
  let page: PrimeroDesdeDockerPage;

  beforeEach(() => {
    page = new PrimeroDesdeDockerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
