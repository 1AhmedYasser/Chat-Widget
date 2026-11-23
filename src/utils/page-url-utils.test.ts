import { getCurrentPageUrl } from './page-url-utils';

describe('getCurrentPageUrl', () => {
  it('returns the url of the page at the time of the call', () => {
    window.history.pushState({}, '', '/et');
    expect(getCurrentPageUrl()).toBe(`${window.location.origin}/et`);

    window.history.pushState({}, '', '/et/mingilink?a=1#b');
    expect(getCurrentPageUrl()).toBe(`${window.location.origin}/et/mingilink?a=1#b`);
  });
});
