import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from '../../../../config';

import TextField from '../';
import FullPage from '../../FullPage';

interface IStoryTextField {
  placeholder: string;
  showShadow?: boolean;
  value?: string;
  onChange?: (val: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}

const CompWithProvider: FC<IStoryTextField> = props => (
  <ThemeProvider theme={theme}>
    <FullPage>
      <TextField {...props} />
    </FullPage>
  </ThemeProvider>
);

storiesOf('UI Library|core/TextField', module)
  .add('TextField ', () => (
    <CompWithProvider placeholder="Enter you text here..." />
  ))
  .add('TextField with shadow ', () => (
    <CompWithProvider
      showShadow
      placeholder="Enter you text here..."
      value="aa"
      onChange={(val: string, e: React.ChangeEvent<HTMLInputElement>) => {
        console.log({ val, e });
      }}
    />
  ))
  .add('TextField with Left Icon', () => (
    <CompWithProvider
      placeholder="Enter you text here..."
      leftIcon={<div>ic_left</div>}
    />
  ))
  .add('TextField with Right Icon', () => (
    <CompWithProvider
      placeholder="Enter you text here..."
      rightIcon={<div>ic_right</div>}
    />
  ))
  .add('TextField with Left and Right Icons', () => (
    <CompWithProvider
      placeholder="Enter you text here..."
      leftIcon={<div>ic_left</div>}
      rightIcon={<div>ic_right</div>}
    />
  ))
  .add('TextField with Left Icon and shadow', () => (
    <CompWithProvider
      placeholder="Enter you text here..."
      leftIcon={<div>ic_left</div>}
      showShadow
    />
  ))
  .add('TextField with Right Icon and shadow', () => (
    <CompWithProvider
      placeholder="Enter you text here..."
      rightIcon={<div>ic_right</div>}
      showShadow
    />
  ))
  .add('TextField with Left and Right Icons and shadow', () => (
    <CompWithProvider
      placeholder="Enter you text here..."
      leftIcon={<div>ic_left</div>}
      rightIcon={<div>ic_right</div>}
      showShadow
    />
  ));
