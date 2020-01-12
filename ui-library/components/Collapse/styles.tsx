import { animated } from 'react-spring';

import StyledTheme from '../../../typescript/themeType';

import { stylesTypes } from '../../types';

export const Wrapper = StyledTheme(animated.div)<
  stylesTypes.ICollapseWrapperStyle
>`
    cursor: pointer;
`;

export const CollapseContent = StyledTheme(animated.div)<
  stylesTypes.ICollapseContentStyle
>`
    overflow: hidden;
`;

export const CollapseTitle = StyledTheme(animated.div)<
  stylesTypes.ICollapseTitleStyle
>`
`;
