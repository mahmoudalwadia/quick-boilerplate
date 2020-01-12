import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from '../../../../config';

import Checkbox from '../';
import FullPage from '../../FullPage';

interface IStoryCheckbox {
  label: string;
  checked?: boolean;
}

const CompWithProvider: FC<IStoryCheckbox> = props => (
  <ThemeProvider theme={theme}>
    <FullPage>
      <Checkbox {...props} />
    </FullPage>
  </ThemeProvider>
);

storiesOf('UI Library|core/Checkbox', module)
  .add('Checkbox empty', () => <CompWithProvider label="checkbox" />)
  .add('Checkbox checked', () => (
    <CompWithProvider label="checkbox checked" checked />
  ));
