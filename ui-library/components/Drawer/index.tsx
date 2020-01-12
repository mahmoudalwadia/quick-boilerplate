import React, { FC } from 'react';
import { useSpring, useTransition } from 'react-spring';

import { componentsTypes } from '../../types';

import { Content, Overlay } from './styles';

/**
 * @author Mahmoud
 * @prop open, boolean , used to control drawer open/close state
 * @prop onClose, Function, gets called when you close the drawer
 * @prop width, number, drawer width
 * @prop placement string <left | right>, determines whether the drawer should be in left or right side
 * @prop children, ReactNode | Array<ReactNode>
 * @whenToUse when you need sidebar
 */
const Drawer: FC<componentsTypes.IDrawer> = ({
  open,
  onClose,
  children,
  width,
  placement
}) => {
  // let contentWidth: number | string = window.innerWidth - parseInt(width);
  let contentWidth: number = parseInt(width);
  let valueWhenOpen: number = 0;
  const isRightPlacement = placement === 'right';

  function onClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
  }

  if (!contentWidth) {
    contentWidth = window.innerWidth * 0.8;
  }
  if (isRightPlacement) {
    valueWhenOpen = window.innerWidth - parseInt(width);
    contentWidth = window.innerWidth;
  }

  const transitions = useTransition(open, null, {
    from: { backgroundColor: 'rgba(0,0,0,0)' },
    enter: { backgroundColor: 'rgba(0,0,0,0.5)' },
    leave: { backgroundColor: 'rgba(0,0,0,0)' }
  });

  const contentStyle = useSpring({
    left: open ? valueWhenOpen : isRightPlacement ? contentWidth : -contentWidth
  });

  return (
    <>
      {transitions.map(
        ({ key, props, item }) =>
          item && (
            <Overlay key={key} onClick={() => onClose()} style={props}>
              <Content width={width} style={contentStyle} onClick={onClick}>
                {children}
              </Content>
            </Overlay>
          )
      )}
    </>
  );
};

Drawer.defaultProps = {
  width: '300'
};

export default Drawer;
