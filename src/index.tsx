import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from 'globalStyle/globalStyle';
import { BrowserRouter } from 'react-router-dom';
import OnScrollToTop from 'utils/onScrollToTop';
import { Provider } from 'react-redux';
import store from 'store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import App from './App';

const persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <OnScrollToTop />
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
