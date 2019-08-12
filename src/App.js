import React from 'react';

import Checkbox from './uikit/checkboxWithImage/index'

function App() {
  return (
    <>
      <Checkbox label="First" />
      <Checkbox label="Second" checked />
      <Checkbox label="Third" disabled />
      <Checkbox label="Forth" checked disabled />
    </>
  );
}

export default App;
