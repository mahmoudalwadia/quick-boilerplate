import React, { FC } from 'react';

import { componentsTypes } from '../../types';

import { Wrapper, Button } from './styles';

/**
 * @author Mahmoud
 * @prop onClick, Function
 * @prop children, ReactNode | Array<ReactNode>
 * @whenToUse when you need float action button at the bottom right of the screen
 */
const Fab: FC<componentsTypes.IFab> = ({
  children,
  onClick,
  ...props
}) => {
  return (
    <Wrapper>
      <Button onClick={onClick} {...props}>
        {children}
      </Button>
    </Wrapper>
  );
};

export default Fab;
