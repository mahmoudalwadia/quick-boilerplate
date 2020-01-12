import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from '../../../../config';

import Avatar from '../';
import FullPage from '../../FullPage';

interface IStoryAvatar {
  children?: React.ReactNode;
  src: string;
  alt: string;
}

const CompWithProvider: FC<IStoryAvatar> = props => (
  <ThemeProvider theme={theme}>
    <FullPage>
      <Avatar {...props} />
    </FullPage>
  </ThemeProvider>
);

storiesOf('UI Library|core/Avatar', module).add('Avatar', () => (
  <CompWithProvider
    src="https://www.putneyhigh.gdst.net/wp-content/uploads/2018/06/person-placeholder-male-5.jpg"
    alt="Avatar"
  />
));
