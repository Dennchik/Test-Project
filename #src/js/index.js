import React, { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from './app/App.jsx';

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------


const rootElement = document.getElementById("page");
const root = ReactDOMClient.createRoot(rootElement);
root.render(
	<StrictMode>
		<BrowserRouter basename="/Test-Project/build">
			<App />
		</BrowserRouter>
	</StrictMode>
);
