import React from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/Routers.tsx';
import { RouterProvider } from 'react-router-dom';

import * as ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
<Provider store={store}>
<RouterProvider router={router} />
</Provider>
 
  </React.StrictMode>
);