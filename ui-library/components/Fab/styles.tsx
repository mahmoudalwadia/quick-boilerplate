import StyledTheme from '../../../typescript/themeType';

import ButtonOrigin from '../Button';

export const Wrapper = StyledTheme.div`
    position: absolute;
    height: 70px;
    width: 70px;
    right: 5%;
    bottom: 5%;
`;

export const Button = StyledTheme(ButtonOrigin)`
    border-radius: 50%;
    height: 90%;
    width: 90%;
    position: absolute;
    box-shadow: ${props => props.theme.shadows.fab};
`;
