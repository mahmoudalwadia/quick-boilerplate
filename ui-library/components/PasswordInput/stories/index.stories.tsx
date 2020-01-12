import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from '../../../../config';

import PasswordInput from '../';
import FullPage from '../../FullPage';

interface IStoryPasswordInput {
  placeholder: string;
  showShadow: boolean;
}

const CompWithProvider: FC<IStoryPasswordInput> = props => (
  <ThemeProvider theme={theme}>
    <FullPage>
      <PasswordInput {...props} />
    </FullPage>
  </ThemeProvider>
);

storiesOf('UI Library|core/Password TextField', module).add('Password', () => (
  <CompWithProvider placeholder="Enter your password" showShadow />
));
