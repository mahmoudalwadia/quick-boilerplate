import React, { FC } from 'react';

import { componentsTypes } from '../../types';

import { OptionStyled } from './styles';

/**
 * @author Mahmoud
 * @prop label, string
 * @prop value, string
 * @prop renderOption, Function, used when you want to render custom option
 * @prop onClick, Function
 * @prop isSelected, boolean, used to controll option state
 * @whenToUse when you have a select component and need to render custom options
 */
const Option: FC<componentsTypes.IOption> = ({
  label,
  value,
  renderOption,
  onClick,
  isSelected
}) => {
  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (onClick) {
      onClick(value, e);
    }
  }

  return (
    <OptionStyled isSelected={isSelected} onClick={handleClick}>
      {renderOption ? renderOption({ label, value }) : label}
    </OptionStyled>
  );
};

export default Option;
