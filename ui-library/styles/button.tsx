import { css } from '@emotion/core';
import { ITheme } from '../../typescript/themeType';

/**
 * @author Mahmoud
 * @desc Gets the style for each button type
 * @return css styles to be injected in emotion styled api
 */
export default (theme: ITheme, type?: string) => {
  switch (type) {
    case 'contained':
      return css`
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
          0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      `;
    case 'outlined':
      return css`
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        background-color: transparent;
      `;
    case 'text':
      return css`
        color: ${theme.colors.primary};
        background-color: transparent;
      `;
    default:
      return css`
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
          0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      `;
  }
};
