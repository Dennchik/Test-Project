import React from 'react';
import { Routes, Route, Navigate, Link, BrowserRouter } from 'react-router-dom';
// -----------------------------------------------------------------------------

import { Homepage } from "../pages/Homepage.jsx";
import { Aboutpage } from "../pages/Aboutpage.jsx";
// -----------------------------------------------------------------------------
import { Layout } from '../components/Layout.jsx';
import { AuthProvider } from '../hoc/AuthProvider.jsx';
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
export default function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<Aboutpage />} />
				</Route>
			</Routes>
		</AuthProvider>
	);
}