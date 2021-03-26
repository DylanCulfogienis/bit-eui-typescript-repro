import React from 'react';
import logo from './logo.svg';
import '@elastic/eui/dist/eui_theme_light.json';
import '@elastic/eui/dist/eui_theme_light.css';
import './App.css';
import { ComboBox } from './combobox';
import { EuiPanel } from '@elastic/eui';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <EuiPanel style={{width: 400}}>
          <ComboBox name="Test" />
        </EuiPanel>
      </header>
    </div>
  );
}

export default App;
