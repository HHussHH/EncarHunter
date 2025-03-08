import { createRoot } from 'react-dom/client'
import '@/app/styles/global/global.scss'
import App from '@/app/App.tsx'
import {Provider} from "react-redux";
import {store} from "@/app/store/store.ts";
import {HashRouter} from "react-router-dom";
import * as React from "react";


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
		   <HashRouter>
				 <App />
		   </HashRouter>
	</Provider>
)
