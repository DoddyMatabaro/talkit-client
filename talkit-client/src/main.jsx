import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AppProvider } from './utils/context';
import reducer, { initialState } from "./utils/Reducer";
import Loader from './components/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <AppProvider initialState={initialState} reducer={reducer} >
      <App />
      <Loader/>
    </AppProvider>
  </React.StrictMode>
)
