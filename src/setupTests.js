// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';

// Applying changes to speed up tests locally.
// These changes are not applied on the Continuous Integration environment.
if (!process.env.CI) {
  // Skipping the checks on elements visibility for ByRole queries, since this is quite slow.
  configure({ defaultHidden: true });

  // Setting defaultHidden is not enough to improve performance when using ByRole with big DOM structures,
  // since a lot of time is also spent checking visibilities for determining accessible names.
  // Therefore, we override getComputedStyle to make elements always visible.
  // See: https://github.com/eps1lon/dom-accessibility-api/discussions/605
  Object.defineProperty(window, 'getComputedStyle', {
    value: () => ({
      getPropertyValue: (prop) => {
        if (prop === 'display') {
          return 'block';
        } else if (prop === 'visibility') {
          return 'visible';
        } else {
          return '';
        }
      },
    }),
  });
}
