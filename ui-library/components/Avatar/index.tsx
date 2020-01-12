import React, { FC } from 'react';

import { componentsTypes } from '../../types';

import { AvatarImage } from './styles';

/**
 * @author Mahmoud
 * @prop src, string
 * @prop alt, string
 * @prop zIndex, string
 * @prop marginLeft number
 * @prop style, css style object
 * @prop children, component's children
 * @prop height, image height with unit included, e.g: 30px, 20%
 * @prop width, image width with unit included, e.g: 30px, 20%
 * @whenToUse Used when you need an image for user in a circle
 */
const Avatar: FC<componentsTypes.IAvatar> = props => {
  return <AvatarImage {...props} />;
};

export default Avatar;
