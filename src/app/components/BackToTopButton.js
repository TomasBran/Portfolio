import React from 'react';
import { usePageContext } from '../context/PageContext';

const BackToTopButton = () => {
	const { currentSection, setCurrentSection } = usePageContext();

	const handleScrollToTop = () => {
		setCurrentSection('home');

		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	if (currentSection === 'home') {
		return null;
	}

	return (
		<button
			onClick={handleScrollToTop}
			className='fixed bottom-4 right-4 bg-blue-500 text-white rounded-full py-2 px-3 shadow-lg hover:bg-blue-600 transition z-50'
			aria-label='Scroll to top'>
			↑
		</button>
	);
};

export default BackToTopButton;
