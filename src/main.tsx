import React from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/Routers.tsx';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import * as ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.ts';
import { Toaster } from 'sonner';
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
<Provider store={store}>
<PersistGate loading={null} persistor={persistor}>
<RouterProvider router={router} />
</PersistGate>
<Toaster />
</Provider>
 
  </React.StrictMode>
);