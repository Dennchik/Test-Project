import React from 'react';
// -----------------------------------------------------------------------------
import MainSlide from "../pages/Mainslide.jsx";
// -----------------------------------------------------------------------------
const baseUrl = '.';
// -----------------------------------------------------------------------------
const Homepage = () => {
	return (
		<div className='page__main-content'>
			<div className="main-content" id='wrapper'>
				<div className="main-content__content" id='content'>
					<div className="main-content__slide">
						<MainSlide baseUrl={baseUrl} />
						{/* <MainSlide /> */}
					</div>
				</div>
			</div>
		</div>
	);
};
export { Homepage };


