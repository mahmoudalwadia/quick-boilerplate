import React from 'react';

import { CheckboxStyled, CheckboxOrigin, Container } from './styles';

import { componentsTypes } from '../../types';

/**
 * @author Mahmoud
 * @prop onCick, Function
 * @prop labelProps, object, used when you want to send props for label inner component
 * @prop label, string
 * @prop checked, boolean, used when you to controll the component checked state
 */
const Checkbox: React.FunctionComponent<
  componentsTypes.ICheckBox
> = ({ onClick, labelProps, label, checked }) => {
  function handleClick(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    if (onClick) {
      onClick(e);
    }
  }

  return (
    <Container type="body1" onClick={handleClick} {...labelProps}>
      {label}
      <CheckboxOrigin type="checkbox" checked={checked} />
      <CheckboxStyled />
    </Container>
  );
};

export default Checkbox;
