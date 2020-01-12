import { animated } from 'react-spring';

import StyledTheme from '../../../typescript/themeType';

import { stylesTypes } from '../../types';

export const SelectStyled = StyledTheme.div<
  stylesTypes.IOptionStyle
>`
    position: relative;
    overflow: visible;
    border-bottom: 1px solid ${props => props.theme.colors.charcoal};
`;

export const OptionsWrapper = StyledTheme(animated.div)`
    position: absolute;
    width: 100%;
    height: auto !important;
    top: 30px;
    left: 0;
    overflow-y: scroll;
    background-color: ${props => props.theme.colors.white};
    height: 250px;
    box-shadow: ${props => props.theme.shadows.fab};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    &::-webkit-scrollbar {
      display: none;
    }
`;

export const IconWrapper = StyledTheme(animated.div)`
    height: 100%;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Header = StyledTheme.div`
    display: flex;
    cursor: pointer;
`;

export const SelectText = StyledTheme.div`
    display: flex;
    flex: 1;
    cursor: pointer;
`;