import React, { useEffect } from 'react';
import EnvironmentUtilities from './utilities/EnvironmentUtilities';
import Services from './services';
import './App.css';
import Header from './components/Header';

const App = () => {
  useEffect(() => {
    Services.service1.controllerName.actionName().then(response => {
      if (response && response.error === false) {
        // eslint-disable-next-line no-console
        console.log(response);
      }
    });
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://www.trabilisim.com/" target="_blank" rel="noreferrer">
          <img src="/tra-bilisim-logo.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Header text={`environment -> ${EnvironmentUtilities.getEnvironment()}`} />
      <div className="card">
        <p>
          Edit
          {' '}
          <code>src/App.jsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
    </div>
  );
};

export default App;
