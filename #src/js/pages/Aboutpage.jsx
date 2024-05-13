import React from 'react';
// -----------------------------------------------------------------------------
import { About } from '../components/About.jsx';
import { Footer } from '../components/Footer.jsx';
// -----------------------------------------------------------------------------
const baseUrl = '.';
// -----------------------------------------------------------------------------
const Aboutpage = () => {
	return (
		<>
			<div className="main-content__aboute">
				<About />

			</div>
			<div className="main-content__footer" id='footer'>
				<Footer baseUrl={baseUrl} />
			</div>
		</>
	);
};
export { Aboutpage };