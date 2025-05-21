import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';
import { createRoot } from "react-dom/client";

// Define root state type
export type RootState = ReturnType<typeof reducers>;

const store: Store<RootState> = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

const container = document.getElementById("root");
if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);