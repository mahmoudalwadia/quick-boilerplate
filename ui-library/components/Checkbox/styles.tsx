import Typography from '../Typography';
import StyledTheme from '../../../typescript/themeType';

import { stylesTypes } from '../../types';

export const Container = StyledTheme(Typography) <
  stylesTypes.ICheckBox
  >`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover input ~ span {
    background-color: ${props => props.theme.colors.veryLightGrey};
  }

  & input:checked ~ span {
    background-color: ${props => props.theme.colors.primary};
  }

  & input:checked ~ span:after {
    display: block;
  }

  & span:after {
    left: 8px;
    top: 1px;
    width: 5px;
    height: 15px;
    border: solid ${props => props.theme.colors.white};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const CheckboxOrigin = StyledTheme.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CheckboxStyled = StyledTheme.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: ${props => props.theme.colors.whisper};
  border-radius: 3px;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;
