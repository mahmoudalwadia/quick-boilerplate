import StyledTheme from '../../../typescript/themeType';
import { typography } from '../../styles';

import { stylesTypes } from '../../types';

export const Text = StyledTheme.span<
  stylesTypes.ITypography
  >`
  ${props => typography.mixins[props.type]}
  margin: 0;
  padding: 0;
  display: block;
  color: ${props => props.color};
`;
