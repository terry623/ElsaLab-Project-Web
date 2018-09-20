import { css } from 'styled-components';

const sizes = {
  desktop: 1600,
  notebook: 1200,
};

// TODO: 要搞懂
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export { media };
