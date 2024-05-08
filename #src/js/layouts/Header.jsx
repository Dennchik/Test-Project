import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { timeLineHeaderItem } from '../modules/anime-js.js';
import { CustomLink } from '../components/CustomLink.jsx';

const Header = () => {
	// const dataMoveEl = [{ 'bp-max': 920.99, 'index': 1, 'target': '.bp-1' }];
	useEffect(() => {
		timeLineHeaderItem();
		// const fadeIn = document.querySelector('.page__fade-in');
		const handleScroll = () => {
			const header = document.querySelector('.header');
			const mainContent = document.querySelector('.page__main-content');
			const mainContentTop = mainContent.getBoundingClientRect().top;

			if (mainContentTop < 0) {
				header.classList.add('with-border');
				// fadeIn.classList.add('with-border');
			} else {
				header.classList.add('without-border');
				header.classList.remove('with-border');
				// fadeIn.classList.remove('with-border');
			}
			if (mainContentTop < 0) {
				header.classList.remove('without-border');
			}
		};
		window.addEventListener('scroll', handleScroll);
		// Очистка слушателя событий при размонтировании компонента
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// const getPath = (fileName) => {
	// 	return `${baseUrl}/${fileName}`;
	// };

	return (
		<div className="header key-object">
			<div className="header__container">
				<div className="header__column el-logo">
					<CustomLink to='/'>
						<div className="header__logo"></div></CustomLink>
					<div className="header__text">
						<h1>Media-Studio</h1>
						<p><span>Group</span><span>Obninsk</span></p>
					</div>
				</div>
				<div className="header__column">
					<div className="header__menu">
						<div className="header__item header__item--home">
							<CustomLink to="/">HOME</CustomLink>
						</div>
						<div className="header__item header__item--services">
							<CustomLink className='link-key key-services' to='/about'>SERVICES</CustomLink>
						</div>
						<div className="header__item">
							<a href='/'>VIDEOS</a>
						</div>
						<div className="header__item">
							<CustomLink to='/about'>ABOUT</CustomLink>
						</div>
						<div className="header__item">
							<CustomLink to='/news'>NEWS</CustomLink>
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


export default Header;