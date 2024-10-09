import React, { useEffect } from 'react';
// import { useLocation, useHistory } from 'react-router-dom';
// import { Button } from 'react-scroll';

import { Link } from 'react-router-dom';
import { timeLineHeaderItem } from '../modules/anime-js.js';
import { CustomLink } from './CustomLink.jsx';

const Header = () => {
	// useEffect(() => {
	// 	if (history.scrollRestoration) {
	// 		history.scrollRestoration = "manual";
	// 	}
	// 	if ("scrollRestoration" in window.history) {
	// 		window.history.scrollRestoration = "manual";
	// 	}
	// }, []);
	// const location = useLocation();
	// const history = useHistory();
	// const [scrollPosition, setScrollPosition] = useState(0);
	// const dataMoveEl = [{ 'bp-max': 920.99, 'index': 1, 'target': '.bp-1' }];
	// useEffect(() => {
	// 	timeLineHeaderItem();
	// 	// const fadeIn = document.querySelector('.page__fade-in');
	// 	const handleScroll = () => {
	// 		const header = document.querySelector('.header');
	// 		const mainContent = document.querySelector('.page__main-content');
	// 		const mainContentTop = mainContent.getBoundingClientRect().top;
	// 		// setScrollPosition(window.scrollY);
	//
	// 		if (mainContentTop < 0) {
	// 			header.classList.add('with-border');
	// 			// fadeIn.classList.add('with-border');
	// 		} else {
	// 			header.classList.add('without-border');
	// 			header.classList.remove('with-border');
	// 			// fadeIn.classList.remove('with-border');
	// 		}
	// 		if (mainContentTop < 0) {
	// 			header.classList.remove('without-border');
	// 		}
	// 	};
	// 	window.addEventListener('scroll', handleScroll);
	// 	// Очистка слушателя событий при размонтировании компонента
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);


	// const getPath = (fileName) => {
	// 	return `${baseUrl}/${fileName}`;
	// };
	//* --------------------------------------------------------------------------
	// useEffect(() => {
	// 	// Восстанавливаем положение скроллинга при возвращении на страницу
	// 	if (location.state && location.state.from) {
	// 		window.scrollTo(0, location.state.from.scrollPosition);
	// 	} else {
	// 		window.scrollTo(0, scrollPosition);
	// 	}
	// }, [location]);

	return (
		<div className="header key-object">
			<div className="header__container">
				<div className="header__column el-logo">
					<CustomLink to='/'>
						<div className="header__logo"></div></CustomLink>
					<div className="header__text">
						<h1>Media-Studio</h1>
						<p>
							<span>Group</span>
							<span>Obninsk</span>
						</p>
					</div>
				</div>
				<div className="header__column">
					<div className="header__menu">
						<div className="header__item header__item--home">
							<CustomLink to="/">HOME</CustomLink>
						</div>
						<div className="header__item header__item--services">
							<Link className='link-key key-services' to='/about'>SERVICES</Link>
						</div>
						<div className="header__item">
							<Link to='/'>VIDEOS</Link>
						</div>
						<div className="header__item">
							<Link to='/about' >ABOUT</Link>
						</div>
						<div className="header__item">
							<Link to='/news'>NEWS</Link>
						</div>
						<div className="header__item header__item--contacts">
							<a className='link-key key-services'
							// to='footer'
							// duration={700}
							// offset={-100}
							// smooth='easeInQuad'
							>CONTACTS</a>
						</div>
					</div>
					<div className="header__bookmark">

					</div>
				</div>
				<div className="header__column el-community">
					<a href='tel:++79106044424' className="el-community__phone">
						<i className='icon-phone-ringing'></i>
						<div className="el-community__content">
							<h5 className='el-community__title'>GIVE US A CALL</h5>
							<span>+7 910 604-44-24</span>
						</div>
					</a>
				</div>
			</div>
		</div >
	);
};
export { Header };