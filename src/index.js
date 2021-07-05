import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { DailyProvider } from './context/DailyContext';
import { MonthlyProvider } from './context/MonthlyContext';
import {UserProvider} from './context/UserContext'
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <DailyProvider>
          <MonthlyProvider>
            <App />
          </MonthlyProvider>
        </DailyProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

