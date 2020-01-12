import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from '../../../../config';

import { useDisclosure } from '../../../../hooks';

import Drawer from '../';
import Button from '../../Button';
import FullPage from '../../FullPage';

interface IStoryDrawer {
  placement?: string;
}

const CompWithProvider: FC<IStoryDrawer> = ({ placement }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ThemeProvider theme={theme}>
      <FullPage>
        <Button onClick={() => onOpen()}>Toggle Drawer</Button>
        <Drawer open={isOpen} width='300' placement={placement} onClose={() => onClose()}>
          <Button variant="outline" onClick={() => onClose()}>
            Close
          </Button>
        </Drawer>
      </FullPage>
    </ThemeProvider>
  );
};

storiesOf('UI Library|core/Drawer', module).add('Left', () => (
  <CompWithProvider />
)).add('Right', () => (
  <CompWithProvider placement='right' />
));
