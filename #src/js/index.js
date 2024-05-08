import React, { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import App from './app/App.jsx';
// -----------------------------------------------------------------------------

import { Routes, Route, Navigate, Link, BrowserRouter } from 'react-router-dom';
// -----------------------------------------------------------------------------

import { Homepage } from "./pages/Homepage.jsx";
import { Aboutpage } from "./pages/Aboutpage.jsx";
// -----------------------------------------------------------------------------
import { Layout } from './components/Layout.jsx';
import { AuthProvider } from './hoc/AuthProvider.jsx';
// -----------------------------------------------------------------------------


const rootElement = document.getElementById("page");
const root = ReactDOMClient.createRoot(rootElement);
root.render(
	<StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/" element={<Homepage />} />
						<Route path="/about" element={<Aboutpage />} />
					</Route>
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	</StrictMode>,
	document.getElementById('page')
);