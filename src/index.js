import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import App from './App';
import { DailyProvider } from './context/DailyContext';
import { MonthlyProvider } from './context/MonthlyContext';
import {UserProvider} from './context/UserContext'
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
        <DailyProvider>
          <MonthlyProvider>
            <App />
          </MonthlyProvider>
        </DailyProvider>
      </UserProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

