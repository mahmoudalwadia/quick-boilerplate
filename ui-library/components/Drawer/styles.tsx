import StyledTheme from '../../../typescript/themeType';
import { animated } from 'react-spring';

import { stylesTypes } from '../../types';

export const Content = StyledTheme(animated.div) <
  stylesTypes.IDrawerChildStyle
  >`
    position: absolute;
    left: -100%;
    opacity: 1;
    z-index: 999;
    width: ${props => `${props.width}px` || '80%'};
    height: 100%;
    background-color: ${props => props.theme.colors.white};
`;

export const Overlay = StyledTheme(animated.div) <
  stylesTypes.IDrawerChildStyle
  >`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    background-color: ${props => props.theme.colors.overlay};
    overflow: hidden;
`;
