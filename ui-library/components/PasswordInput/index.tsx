import React, { FC, useState } from 'react';

import { componentsTypes } from '../../types';

import TextField from '../TextField';
import InputIcon from './InputIcon';

/**
 * @author Mahmoud
 * @prop props, all Input props are applicable
 * @whenToUse when you need a password input
 */
const PasswordInput: FC<
  componentsTypes.IPasswordInput
> = props => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisible() {
    setIsVisible(!isVisible);
  }

  return (
    <TextField
      {...props}
      type={isVisible ? 'text' : 'password'}
      rightIcon={
        <InputIcon visible={isVisible} toggleVisible={toggleVisible} />
      }
    />
  );
};

export default PasswordInput;
