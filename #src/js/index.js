import React, { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { createRoot } from 'react-dom/client';
import App from './app/App.jsx';
// -----------------------------------------------------------------------------

import { BrowserRouter } from 'react-router-dom';
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
createRoot(document.getElementById('page')).render(
	<StrictMode>
		{/* <BrowserRouter> */}
		<BrowserRouter basename="/Test-Project/build">
			<App />
		</BrowserRouter>
	</StrictMode>
);