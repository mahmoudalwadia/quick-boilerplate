import React, { FC } from 'react';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { IntlProvider } from 'react-intl';
import AppLocale from '../localization';

import { PagesComponentsTypes } from '../typescript';
import { theme, globalStyles } from '../config';

const Local = AppLocale.en;

/**
 * @desc A template for all page components, all components will have the code in here
 */
const App: FC<PagesComponentsTypes.PagesComponentsTypes.IApp> = ({
  Component,
  pageProps
}) => {
  return (
    <>
      <Global styles={globalStyles} />
      <IntlProvider
        locale={Local.locale}
        defaultLocale="en"
        messages={Local.Messages}
      >
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </IntlProvider>
    </>
  );
};

export default App;
