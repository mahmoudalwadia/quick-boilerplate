import React, { FC, CSSProperties } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from '../../../../config';

import Button from '../';
import FullPage from '../../FullPage';

interface IStoryButton {
  variant?: string;
  children?: string;
  style?: CSSProperties;
  onClick: () => void;
}

const CompWithProvider: FC<IStoryButton> = props => (
  <ThemeProvider theme={theme}>
    <FullPage>
      <Button {...props} />
    </FullPage>
  </ThemeProvider>
);

function onClick() { }

storiesOf('UI Library|core/Button', module)
  .add('Button Contained(Default)', () => (
    <CompWithProvider variant="contained" onClick={onClick}>Button Contained</CompWithProvider>
  ))
  .add('Button Outlined', () => (
    <CompWithProvider variant="outlined" onClick={onClick}>Button Outlined</CompWithProvider>
  ))
  .add('Button Text', () => (
    <CompWithProvider variant="text" onClick={onClick}>Button Text</CompWithProvider>
  ))
  .add('Button Text Custom style', () => (
    <CompWithProvider onClick={onClick} style={{ height: 30, width: 120 }}>
      Button Text
    </CompWithProvider>
  ));
