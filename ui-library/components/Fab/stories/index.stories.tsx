import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from '../../../../config';

import Fab from '../';
import FullPage from '../../FullPage';

interface IStoryCheckbox {
  children: string;
}

const CompWithProvider: FC<IStoryCheckbox> = props => (
  <ThemeProvider theme={theme}>
    <FullPage>
      <Fab onClick={() => { }}>{props.children}</Fab>
    </FullPage>
  </ThemeProvider>
);

storiesOf('UI Library|core/Fab', module).add('Basic', () => (
  <CompWithProvider>ic_someicon</CompWithProvider>
));
