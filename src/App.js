import React from 'react';

import Checkbox from './uikit/checkbox/index'

function App() {
  return (
    <>
    <Checkbox label="First" /><br />
      <Checkbox label="Second" checked /><br />
      <Checkbox label="Third" disabled /><br />
      <Checkbox label="Forth" checked disabled />
    </>
  );
}

export default App;
