import React from 'react';

import { CardStyled } from './styles';

import { componentsTypes } from '../../types';

/**
 * @author Mahmoud
 * @prop z, number
 * @whenToUse When you need a card with some elevation
 *
 */
const Card: React.FunctionComponent<
  componentsTypes.ICard
> = props => {
  return <CardStyled {...props}>{props.children}</CardStyled>;
};

Card.defaultProps = {
  z: 3
};

export default Card;
