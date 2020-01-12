import StyledTheme from '../../../typescript/themeType';

import { stylesTypes } from '../../types';

export const AvatarImage = StyledTheme.img<
  stylesTypes.IAvatarStyle
  >`
    border-radius: 50%;
    z-index: ${props => props.zIndex || 'auto'};
    margin-left: ${props =>
    `${props.marginLeft ? `${props.marginLeft}px` : 'auto'}`}
    height: ${props => props.height};
    width: ${props => props.width};
`;
