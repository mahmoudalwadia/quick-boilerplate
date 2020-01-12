import { card } from '../../styles';
import StyledTheme from '../../../typescript/themeType';

import { stylesTypes } from '../../types';

export const CardStyled = StyledTheme.div<
  stylesTypes.ICard
  >`
  padding: ${props => props.noPadding ? '10px 0 0.5px' : '10px'};
  border-radius: 5px;
  margin: ${props => props.noMargin ? '10px 0' : '10px'};
  background-color: ${props => props.theme.colors.white};
  transition: 0.3s;
  ${props => card[props.z]};
`;
