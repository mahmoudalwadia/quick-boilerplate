import React, { FC, CSSProperties } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from '../../../../config';

import AvatarStack from '../';
import FullPage from '../../FullPage';

type TAvatar = {
  src: string;
  alt: string;
};

interface IStoryAvatarStack {
  children?: React.ReactNode;
  avatars: Array<TAvatar>;
  maxNumber: number;
  imgStyle: CSSProperties;
  marginLeft: number;
}

const CompWithProvider: FC<IStoryAvatarStack> = props => (
  <ThemeProvider theme={theme}>
    <FullPage>
      <AvatarStack {...props} />
    </FullPage>
  </ThemeProvider>
);

const avatars: Array<TAvatar> = [
  {
    src:
      'https://www.putneyhigh.gdst.net/wp-content/uploads/2018/06/person-placeholder-male-5.jpg',
    alt: 'avatar'
  },
  {
    src:
      'https://www.putneyhigh.gdst.net/wp-content/uploads/2018/06/person-placeholder-male-5.jpg',
    alt: 'avatar'
  },
  {
    src:
      'https://www.putneyhigh.gdst.net/wp-content/uploads/2018/06/person-placeholder-male-5.jpg',
    alt: 'avatar'
  }
];

storiesOf('UI Library|core/Avatar Stack', module)
  .add('Full', () => (
    <CompWithProvider
      avatars={avatars}
      imgStyle={{ height: 30, width: 30 }}
      marginLeft={5}
      maxNumber={3}
    />
  ))
  .add('Not Filled', () => (
    <CompWithProvider
      avatars={avatars.slice(0, 2)}
      imgStyle={{ height: 30, width: 30 }}
      marginLeft={-10}
      maxNumber={3}
    />
  ))
  .add('Over Filled', () => (
    <CompWithProvider
      avatars={avatars.concat(avatars)}
      imgStyle={{ height: 30, width: 30 }}
      marginLeft={-5}
      maxNumber={5}
    />
  ));
