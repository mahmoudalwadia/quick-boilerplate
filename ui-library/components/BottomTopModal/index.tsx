import React, { FC } from 'react';
import { useSpring, useTransition } from 'react-spring';

import { componentsTypes } from '../../types';

import { Overlay, Content } from './styles';

/**
 * @author Mahmoud
 * @prop open, boolean
 * @prop onClose, Function, get called when the modal closes
 * @prop children, ReactNode | Array<ReactNode>
 * @whenToUse In mobile views, when you need a modal pops up from the bottom side
 */
const BottomTopModal: FC<componentsTypes.IBottomTopModal> = ({
  open,
  onClose,
  children
}) => {
  function onClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
  }

  const contentSpring = useSpring({
    transform: open ? 'translateY(0%)' : 'translateY(100%)'
  });

  const transitions = useTransition(open, null, {
    from: { backgroundColor: 'rgba(0,0,0,0)' },
    enter: { backgroundColor: 'rgba(0,0,0,0.5)' },
    leave: { backgroundColor: 'rgba(0,0,0,0)' }
  });

  return (
    <>
      {transitions.map(
        ({ key, props, item }) =>
          item && (
            <Overlay key={key} style={props} onClick={() => onClose()}>
              <Content style={contentSpring} onClick={onClick}>
                {children}
              </Content>
            </Overlay>
          )
      )}
    </>
  );
};

export default BottomTopModal;
