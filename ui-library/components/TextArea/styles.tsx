import { css } from '@emotion/core';

import StyledTheme from '../../../typescript/themeType';

import { stylesTypes } from '../../types';

export const TextAreaStyled = StyledTheme.textarea<
  stylesTypes.ITextAreaStyles
  >`
    outline: none;
    height: ${props => props.height};
    width: ${props => props.width};
    border: 1px solid ${props => props.theme.colors.veryLightGrey};
    resize: none;
    border-radius: 6px;

    &::placeholder {
        color: ${props => props.placeholderColor}
    }

      box-shadow: ${props =>
    props.showShadow && props.theme.shadows.inputUnfocused};

    ${props =>
    props.showShadow &&
    props.isFocused &&
    css`
        box-shadow: ${props.theme.shadows.inputFocused};
      `}
`;
