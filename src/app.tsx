import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { SWRConfig } from 'swr';

// css
import '@/styles/tailwind.css';

// modules
import ErrorBoundary from './components/error-boundary';
import PageError from './components/page-error';
import PageLoading from './components/page-loading';
import Scaffold from './components/scaffold';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<PageLoading />}>
      <ErrorBoundary fallback={<PageError />}>
        <SWRConfig
          value={{
            revalidateOnFocus: false,
            shouldRetryOnError: false,
            dedupingInterval: 10000
          }}
        >
          <Scaffold />
        </SWRConfig>
      </ErrorBoundary>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
