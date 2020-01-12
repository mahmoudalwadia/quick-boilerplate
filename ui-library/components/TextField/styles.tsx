import { css } from '@emotion/core';
import StyledTheme from '../../../typescript/themeType';

import { stylesTypes } from '../../types';

export const Wrapper = StyledTheme.div<
  stylesTypes.ITextFieldStyle
  >`
  display: flex;
  padding: 5px;
  border-radius: 5px;
  width: 100%;
  transition: 0.3s;
  height: ${props => props.height};
  width: ${props => props.width};
  box-shadow: ${props =>
    props.showShadow && props.theme.shadows.inputUnfocused};

    ${props =>
    props.showShadow &&
    props.isFocused &&
    css`
        box-shadow: ${props.theme.shadows.inputFocused};
      `}
`;

export const TextInput = StyledTheme.input<
  stylesTypes.ITextInputStyle
  >`
    border: none;
    outline: none;
    flex: 1;

    &::placeholder {
        color: ${props => props.placeholderColor};
    }
`;

export const IconWrapper = StyledTheme.span`
    align-self: center;
`;
