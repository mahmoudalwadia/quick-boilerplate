import React, { FC, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from '../../../../config';

import Select from '../';
import FullPage from '../../FullPage';

export interface IOption {
  label?: string;
  value?: string;
  onClick?: Function;
  isSelected?: boolean;
  renderOption?: (option: {
    label?: string;
    value?: string;
  }) => React.ReactNode;
}

interface IStorySelect {
  label: string;
  options: Array<IOption>;
  renderOption?: (option: IOption) => React.ReactNode;
}

const options: Array<IOption> = [
  {
    label: 'Option 1',
    value: 'option1'
  },
  {
    label: 'Option 2',
    value: 'option2'
  },
  {
    label: 'Option 3',
    value: 'option3'
  },
  {
    label: 'Option 4',
    value: 'option4'
  },
  {
    label: 'Option 5',
    value: 'option5'
  },
  {
    label: 'Option 6',
    value: 'option6'
  }
];

const CompWithProvider: FC<IStorySelect> = props => {
  const [value, setValue] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <FullPage>
        <Select
          {...props}
          options={props.options}
          value={value}
          onChange={(val: string) => setValue(val)}
        />
      </FullPage>
    </ThemeProvider>
  );
};

storiesOf('UI Library|core/Select', module)
  .add('Select with scrolling', () => (
    <CompWithProvider
      label="Select"
      options={options.concat(options).concat(options)}
    />
  ))
  .add('Select no scrolling', () => (
    <CompWithProvider
      label="Select"
      options={options}
      renderOption={({ label, value }: IOption) => (
        <div>
          {value},{label}
        </div>
      )}
    />
  ))
  .add('Select no scrolling and 3 options', () => (
    <CompWithProvider
      label="Select"
      options={options.slice(0, 3)}
      renderOption={({ label, value }: IOption) => (
        <div>
          {value},{label}
        </div>
      )}
    />
  ));
