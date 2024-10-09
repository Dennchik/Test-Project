import React, {useEffect} from 'react';
// -----------------------------------------------------------------------------
import MainSlide from '../components/Mainslide.jsx';
import Services from '../components/Services.jsx';
import { Footer } from '../components/Footer.jsx';
// -----------------------------------------------------------------------------
const baseUrl = '.';
// -----------------------------------------------------------------------------
const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);// Сброс прокрутки при рендеринг страницы
	}, []); // Этот эффект выполнится один раз при монтировании страницы
	return (
		<>
			<div className="main-content__slide">
				<MainSlide baseUrl={baseUrl} />
			</div>
			<div className='main-content__services'>
				<Services />
			</div>
			<div className="main-content__footer" id='footer'>
				<Footer baseUrl={baseUrl} />
			</div>

		</>
	);
};
export { Homepage };


