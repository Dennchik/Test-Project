import React, { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { createRoot } from 'react-dom/client';
import App from './app/App.jsx';
// -----------------------------------------------------------------------------

import { Routes, Route, BrowserRouter } from 'react-router-dom';
// -----------------------------------------------------------------------------

import { Homepage } from "./pages/Homepage.jsx";
import { Aboutpage } from "./pages/Aboutpage.jsx";
// -----------------------------------------------------------------------------
import { Layout } from './components/Layout.jsx';
import { AuthProvider } from './hoc/AuthProvider.jsx';
// -----------------------------------------------------------------------------


// const rootElement = document.getElementById("page");
// ReactDOMClient.createRoot(rootElement);
createRoot(document.getElementById('page')).render(
	<StrictMode>
		<BrowserRouter basename="/Test-Project/build">
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Layout />}>
						<App />
						<Route path="/" element={<Homepage />} />
						<Route path="/about" element={<Aboutpage />} />
					</Route>
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	</StrictMode>
);