import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

// css
import '@/styles/common.css';

// modules
import HomePage from '@/pages/home';
import ErrorBoundary from '@/components/error-boundary';
import PageError from '@/components/page-error';
import PageLoading from '@/components/page-loading';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<PageLoading />}>
      <ErrorBoundary fallback={<PageError />}>
        <HomePage />
      </ErrorBoundary>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
