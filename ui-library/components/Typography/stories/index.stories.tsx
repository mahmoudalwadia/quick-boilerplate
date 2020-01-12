import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from '../../../../config';

import Typography from '../';
import FullPage from '../../FullPage';

interface IStoryTypography {
  type: string;
  children: string;
}

const CompWithProvider: FC<IStoryTypography> = props => (
  <ThemeProvider theme={theme}>
    <FullPage>
      <Typography type={props.type}>{props.children}</Typography>
    </FullPage>
  </ThemeProvider>
);

storiesOf('UI Library|core/Typography', module)
  .add('Heading 1', () => (
    <CompWithProvider type="h1">Heading 1</CompWithProvider>
  ))
  .add('Heading 2', () => (
    <CompWithProvider type="h2">Heading 2</CompWithProvider>
  ))
  .add('Heading 3', () => (
    <CompWithProvider type="h3">Heading 3</CompWithProvider>
  ))
  .add('Heading 4', () => (
    <CompWithProvider type="h4">Heading 4</CompWithProvider>
  ))
  .add('Heading 5', () => (
    <CompWithProvider type="h5">Heading 5</CompWithProvider>
  ))
  .add('Heading 6', () => (
    <CompWithProvider type="h6">Heading 6</CompWithProvider>
  ))
  .add('Subtitle 1', () => (
    <CompWithProvider type="subtitle1">Subtitle 1</CompWithProvider>
  ))
  .add('Subtitle 2', () => (
    <CompWithProvider type="subtitle2">Subtitle 2</CompWithProvider>
  ))
  .add('Body 1', () => <CompWithProvider type="body1">Body 1</CompWithProvider>)
  .add('Body 2', () => <CompWithProvider type="body2">Body 2</CompWithProvider>)
  .add('Button', () => (
    <CompWithProvider type="button">Button</CompWithProvider>
  ))
  .add('Caption', () => (
    <CompWithProvider type="caption">Caption</CompWithProvider>
  ))
  .add('Overlay', () => (
    <CompWithProvider type="overlay">Overlay</CompWithProvider>
  ));
