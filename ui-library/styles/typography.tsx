import { css, SerializedStyles } from '@emotion/core';

const generateMixin = (
  fontSize: string,
  fontWeight: string,
  letterSpacing: string
) => css`
  font-size: ${fontSize}px;
  letter-spacing: ${letterSpacing}px;
  font-weight: ${fontWeight};
`;

interface IMixin {
  [key: string]: SerializedStyles;
}

/**
 * @author Mahmoud
 * @desc Get styles for typography component
 * @return a map that have all typography styles
 */
const mixins: IMixin = {
  h1: generateMixin('96', 'lighter', '-1.5'),
  h2: generateMixin('60', 'lighter', '-0.5'),
  h3: generateMixin('48', 'normal', '0'),
  h4: generateMixin('34', 'normal', '0.25'),
  h5: generateMixin('24', 'bold', '0.15'),
  h6: generateMixin('20', 'normal', '0.15'),
  subtitle1: generateMixin('16', 'normal', '0.15'),
  subtitle2: generateMixin('14', 'bold', '0.1'),
  body1: generateMixin('16', 'normal', '0.5'),
  body2: generateMixin('14', 'normal', '0.25'),
  button: generateMixin('14', 'bold', '1.25'),
  caption: generateMixin('12', 'normal', '0.4'),
  overline: generateMixin('10', 'normal', '1.5')
};

export default {
  mixins
};
