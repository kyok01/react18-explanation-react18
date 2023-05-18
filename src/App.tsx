import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler';
import { AutoBatchOther } from './components/AutoBatchOther';
import { Transition } from './components/Transition';
import { ReactQuery } from './components/ReactQuery';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <hr/>
      <Transition />
      <hr/>
      <ErrorBoundary fallback={<p>whole error!</p>}>
      <Suspense fallback={<p>whole loading!</p>}>
        <ReactQuery />
      </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
