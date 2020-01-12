import React, { FC } from 'react';

import { componentsTypes } from '../../types';

import VisibleIcon from '../../../public/ic_password_visible.svg';
import HiddenIcon from '../../../public/ic_password_hidden.svg';

const InputIcon: FC<componentsTypes.IPasswordInputIcon> = ({
  visible,
  toggleVisible
}) => {
  return visible ? (
    <HiddenIcon onClick={toggleVisible} />
  ) : (
    <VisibleIcon onClick={toggleVisible} />
  );
};

export default InputIcon;
