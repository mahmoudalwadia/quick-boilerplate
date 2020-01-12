import { css } from '@emotion/core';
import { SerializedStyles } from '@emotion/css';

const injectCss = (value: string) => css`
  box-shadow: ${value};
`;

interface IStyle {
  [x: number]: SerializedStyles;
}

/**
 * @author Mahmoud
 * @desc Gets Card component shadow styles
 * @return css styles to be injected in card component
 */
const styles: IStyle = {
  0: injectCss('none'),
  1: injectCss(
    '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.05)'
  ),
  2: injectCss(
    '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.05)'
  ),
  3: injectCss(
    '0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.05)'
  ),
  4: injectCss(
    '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.05)'
  ),
  6: injectCss(
    '0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.05)'
  ),
  8: injectCss(
    '0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.05)'
  ),
  9: injectCss(
    '0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.05)'
  ),
  12: injectCss(
    '0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12), 0 7px 8px -4px rgba(0,0,0,0.05)'
  ),
  16: injectCss(
    '0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.05)'
  ),
  24: injectCss(
    '0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.05)'
  )
};

export default styles;
