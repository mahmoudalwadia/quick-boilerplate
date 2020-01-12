import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from '../../../../config';

import { useDisclosure } from '../../../../hooks';

import Button from '../../Button';
import FullPage from '../../FullPage';
import BottomTopModal from '../';

interface IStoryBottomTopModal { }

const CompWithProvider: FC<IStoryBottomTopModal> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ThemeProvider theme={theme}>
      <FullPage>
        <Button onClick={() => onOpen()}>Toggle</Button>
        <BottomTopModal open={isOpen} onClose={onClose}>
          <Button onClick={() => onClose()}>Close</Button>
        </BottomTopModal>
      </FullPage>
    </ThemeProvider>
  );
};

storiesOf('UI Library|core/Bottom Top Modal', module).add('Basic', () => (
  <CompWithProvider />
));
