import React, { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import App from './app/App.jsx';

// -----------------------------------------------------------------------------

import { Routes, Route, useLocation, Navigate, Link, BrowserRouter } from 'react-router-dom';
// -----------------------------------------------------------------------------

import { Homepage } from "./pages/Homepage.jsx";
import { Aboutpage } from "./pages/Aboutpage.jsx";
// -----------------------------------------------------------------------------
import { Layout } from './components/Layout.jsx';
import { AuthProvider } from './hoc/AuthProvider.jsx';
// -----------------------------------------------------------------------------


const rootElement = document.getElementById("page");
const root = ReactDOMClient.createRoot(rootElement);
// const location = useLocation();
// if (location.pathname.includes('/')) {
// 	window.location.href = location.pathname;
// }
root.render(
	<StrictMode>
		<BrowserRouter basename="/Test-Project/build">
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/" element={<Homepage />} />
						<Route path="/about" element={<Aboutpage />} />
					</Route>
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	</StrictMode>
);
// root.render(
// 	<StrictMode>
// 		<BrowserRouter basename="/Test-Project/build">
// 			<AuthProvider>
// 				<Routes>
// 					<Route path="/" element={<Layout />}>
// 						<Route path="/" element={<Homepage />} />
// 						<Route path="/about" element={<Aboutpage />} />
// 					</Route>
// 				</Routes>
// 			</AuthProvider>
// 		</BrowserRouter>
// 	</StrictMode>
// );
