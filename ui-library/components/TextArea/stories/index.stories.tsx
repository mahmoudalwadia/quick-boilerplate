import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from '../../../../config';

import TextArea from '../';
import FullPage from '../../FullPage';

interface IStoryTextArea {
  placeholder: string;
  placeholderColor?: string;
  value?: string;
  showShadow?: boolean;
  height?: string;
  width?: string;
  onChange?: (val: string) => void;
}

const CompWithProvider: FC<IStoryTextArea> = props => (
  <ThemeProvider theme={theme}>
    <FullPage>
      <TextArea {...props} />
    </FullPage>
  </ThemeProvider>
);

storiesOf('UI Library|core/TextArea', module)
  .add('TextArea with Shadow', () => (
    <CompWithProvider
      placeholder="Fill This Text area"
      value="this value from props"
      onChange={(val: string) => {
        alert(`new value is: ${val}`);
      }}
      showShadow
      height="200px"
      width="440px"
    />
  ))
  .add('Basic', () => <CompWithProvider placeholder="placeholder" />)
  .add('Basic with placeholder color', () => (
    <CompWithProvider placeholder="placeholder" placeholderColor="#F0F" />
  ));
