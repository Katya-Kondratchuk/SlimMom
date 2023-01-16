import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'assets/styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
=======
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/SlimMom">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
>>>>>>> 81789202532ac967d8753cdd8cf68c163ea67a21
  </React.StrictMode>
);

// email: 'Carley70@gmail.com';
