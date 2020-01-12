import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from '../../../../config';

import Card from '..';
import FullPage from '../../FullPage';

interface IStoryCheckbox {
  z: number;
  children: string;
}

const CompWithProvider: FC<IStoryCheckbox> = props => (
  <ThemeProvider theme={theme}>
    <FullPage>
      <Card z={props.z}>{props.children}</Card>
    </FullPage>
  </ThemeProvider>
);

storiesOf('UI Library|core/Card', module)
  .add('Card 0', () => <CompWithProvider z={0}>Card 0</CompWithProvider>)
  .add('Card 1', () => <CompWithProvider z={1}>Card 1</CompWithProvider>)
  .add('Card 2', () => <CompWithProvider z={2}>Card 2</CompWithProvider>)
  .add('Card 3', () => <CompWithProvider z={3}>Card 3</CompWithProvider>)
  .add('Card 4', () => <CompWithProvider z={4}>Card 4</CompWithProvider>)
  .add('Card 6', () => <CompWithProvider z={6}>Card 6</CompWithProvider>)
  .add('Card 8', () => <CompWithProvider z={8}>Card 8</CompWithProvider>)
  .add('Card 9', () => <CompWithProvider z={9}>Card 9</CompWithProvider>)
  .add('Card 12', () => <CompWithProvider z={12}>Card 12</CompWithProvider>)
  .add('Card 16', () => <CompWithProvider z={16}>Card 16</CompWithProvider>)
  .add('Card 24', () => <CompWithProvider z={24}>Card 24</CompWithProvider>);
