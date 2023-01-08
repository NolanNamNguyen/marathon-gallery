import React from 'react';
import { wrapper } from '../redux/store';
import '../scss/app.scss';

function ETypingApp({ Component, pageProps: { session, ...pageProps } }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(ETypingApp);
