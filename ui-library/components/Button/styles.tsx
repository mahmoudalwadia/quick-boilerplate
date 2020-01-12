import { button } from '../../styles';
import StyledTheme from '../../../typescript/themeType';

import TypographyOrigin from '../Typography';

import { stylesTypes } from '../../types';

export const ButtonStyled = StyledTheme.button<
  stylesTypes.IButton
  >`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  height: ${props => props.height};
  width: ${props => props.width};
  ${props => button(props.theme, props.variant)};

  & * {
    user-select: none;
  }
`;

export const Typography = StyledTheme(TypographyOrigin)`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
