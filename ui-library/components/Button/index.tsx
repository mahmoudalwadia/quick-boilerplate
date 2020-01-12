import React from 'react';

import { ButtonStyled, Typography } from './styles';

import { componentsTypes } from '../../types';

/**
 * @author Mahmoud
 * @prop variant, string
 * @prop onClick, Function
 * @prop children, ReactNode | Array<ReactNode>
 */
const Button: React.FunctionComponent<
  componentsTypes.IButton
> = ({ variant, onClick, children, ...props }) => {
  return (
    <ButtonStyled variant={variant} onClick={onClick} {...props}>
      <Typography
        type="button"
      >
        {children}
      </Typography>
    </ButtonStyled>
  );
};

export default Button;
