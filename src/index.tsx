import React from 'react';
import { render } from 'react-dom';

import { CssReset } from './components/CssReset';
import { SortingProvider } from './components/SortingProvider';
import { SortingVisualiser } from './components/SortingVisualiser';

const App = () => {
  return (
    <React.Fragment>
      <CssReset />
      <SortingProvider>
        <SortingVisualiser />
      </SortingProvider>
    </React.Fragment>
  );
};

render(<App />, document.getElementById('root'));
