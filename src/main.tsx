import { createRoot } from 'react-dom/client'
import '@/app/styles/global/global.scss'
import App from '@/app/App.tsx'
import {Provider} from "react-redux";
import {store} from "@/app/store/store.ts";
import {BrowserRouter} from "react-router-dom";
import * as React from "react";


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
		   <BrowserRouter>
				 <App />
		   </BrowserRouter>
	</Provider>
)
