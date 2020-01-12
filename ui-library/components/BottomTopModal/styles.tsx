import { animated } from 'react-spring';

import StyledTheme from '../../../typescript/themeType';

import { stylesTypes } from '../../types';

export const Overlay = StyledTheme(animated.div) <
  stylesTypes.IBottomTopModalOverlayStyle
  >`
    height: 100%;
    background-color: ${props => props.theme.colors.overlay};
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    padding: 0;
    z-index: 5;
    overflow: hidden; 
`;

export const Content = StyledTheme(animated.div)`
    background-color: ${props => props.theme.colors.white};
    height: 80%;
    top: 20%;
    width: 100%;
    position: absolute;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    z-index: 6;
`;
