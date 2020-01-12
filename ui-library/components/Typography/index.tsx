import React from 'react';

import { Text } from './styles';

import { componentsTypes } from '../../types';

/**
 * @author Mahmoud
 * @prop type, string, typography type
 * @prop style, css style object;
 * @prop color, text color
 */
const Typography: React.FunctionComponent<
  componentsTypes.ITypography
> = props => {
  return <Text {...props}>{props.children}</Text>;
};

export default Typography;
