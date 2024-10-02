'use client';

import { useEffect } from 'react';
import About from './components/About';
import HireMe from './components/HireMe';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import { usePageContext } from './context/PageContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
	const { currentSection, setCurrentSection } = usePageContext();
	const sections = ['home', 'about', 'projects', 'hire-me'];

	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out',
			once: false,
			offset: 120,
		});
	}, []);

	const handleScroll = (e) => {
		const currentIndex = sections.indexOf(currentSection);

		if (e.deltaY > 0) {
			if (currentIndex < sections.length - 1) {
				setCurrentSection(sections[currentIndex + 1]);
			}
		} else {
			if (currentIndex > 0) {
				setCurrentSection(sections[currentIndex - 1]);
			}
		}
	};

	useEffect(() => {
		const section = document.getElementById(currentSection);
		section?.scrollIntoView({ behavior: 'smooth' });
	}, [currentSection]);

	useEffect(() => {
		window.addEventListener('wheel', handleScroll, { passive: false });

		return () => {
			window.removeEventListener('wheel', handleScroll);
		};
	}, [currentSection]);

	return (
		<main>
			<section
				id='home'
				className='h-screen'>
				<Homepage />
			</section>
			<div className='h-[100px]' />
			<section
				id='about'
				className='h-screen'>
				<About />
			</section>
			<div className='h-[100px]' />
			<section
				id='projects'
				className='h-screen'>
				<Projects />
			</section>
			<div className='h-[100px]' />
			<section
				id='hire-me'
				className='h-screen'>
				<HireMe />
			</section>
		</main>
	);
}
