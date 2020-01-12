import React, { FC, useState, useRef, useLayoutEffect } from 'react';
import { useSpring } from 'react-spring';

import { componentsTypes } from '../../types';

import { Wrapper, CollapseContent, CollapseTitle } from './styles';

/**
 * @author Mahmoud
 * @prop title, ReactNode | string
 * @prop ReactNode | Array<ReactNode>
 * @whenToUse When you want collapsible content
 */
const Collapse: FC<componentsTypes.ICollapse> = ({
  title,
  children
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const childRef = useRef<HTMLDivElement>(document.createElement('div'));

  useLayoutEffect(() => {
    if (childRef) {
      const bounds = childRef.current.getBoundingClientRect();
      setHeight(bounds.height);
    }
  });

  const collapseProps = useSpring({
    height: isExpanded ? height : 0
  });

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  return (
    <Wrapper>
      <CollapseTitle onClick={toggleExpanded}>{title}</CollapseTitle>
      <CollapseContent style={collapseProps}>
        {children(childRef)}
      </CollapseContent>
    </Wrapper>
  );
};

export default Collapse;
