import StyledTheme from '../../../typescript/themeType';

import { stylesTypes } from '../../types';

export const OptionStyled = StyledTheme.div<
  stylesTypes.IOptionStyle
  >`
  padding: 5px;
  cursor: pointer;
  transition: background 0.2s;
  background: ${props => props.isSelected && props.theme.colors.whisper};

  &:hover {
    background: ${props => props.theme.colors.veryLightGrey};
  }
`;
