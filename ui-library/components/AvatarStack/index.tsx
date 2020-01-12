import React, { FC } from 'react';

import Avatar from '../Avatar';

import { componentsTypes } from '../../types';

import { Wrapper } from './styles';
/**
 * @author Mahmoud
 * @prop avatars, Array<Avatar>
 * @prop maxNumber, number
 * @prop imgStyl, css style object for each Avatar
 * @prop marginLeft, margin left style for each Avatar
 * @whenToUse Used when you need multiple avatars stacked on each others
 */
const AvatarStack: FC<componentsTypes.IAvatarStack> = ({
  avatars,
  maxNumber,
  imgStyle,
  marginLeft
}) => {
  const avatarsArr =
    avatars.length > maxNumber ? avatars.slice(0, maxNumber) : avatars;

  const firstAvatar = avatars[0];

  return (
    <Wrapper>
      <Avatar {...firstAvatar} style={imgStyle} />
      {avatarsArr.slice(1).map((avatar, i) => {
        return (
          <Avatar
            key={i}
            {...avatar}
            style={imgStyle}
            zIndex={i + 1}
            marginLeft={marginLeft}
          />
        );
      })}
    </Wrapper>
  );
};

export default AvatarStack;
