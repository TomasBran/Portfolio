'use client';

import Image from 'next/image';
import picture from '@/../public/assets/picture.png';
import '../styles/homepage.css';
import { useThemeContext } from '../context/ThemeContext';
import TechStack from './Homepage/TechStack';
import { usePageContext } from '../context/PageContext';
import { FaArrowDown } from 'react-icons/fa';

const Homepage = () => {
	const { theme } = useThemeContext();
	const { setCurrentSection } = usePageContext();

	const onButtonClick = (e) => {
		setCurrentSection(e.target.name);
		console.log(e.target.getAttribute('name'));

		const section = document.getElementById(e.target.name);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const onTextClick = (e) => {
		const name = e.target.getAttribute('name');

		setCurrentSection(name);

		const section = document.getElementById(name);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div
			className={`h-screen ${
				theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'
			} flex lg:flex-row flex-col-reverse justify-center sm:gap-0 gap-4 items-center cursor-default w-screen`}>
			<div className='text-white font-main font-bold lg:text-5xl text-2xl xl:w-3/6 lg:4/6 w-full flex flex-col justify-center lg:gap-20 gap-2'>
				<div className='flex lg:flex-col md:flex-row flex-col md:gap-6 mt-4 lg:mt-0 justify-center items-center w-full'>
					<div
						className={`${
							theme === 'dark' ? 'text-white' : 'text-slate-800'
						} lg:w-full xl:px-24 lg:px-12 transition duration-500 ease-linear`}>
						<span>Hello, I'm </span>
						<span className={`underline-animation duration-150 ease-linear`}>
							Tomas Bran
						</span>
					</div>
					<span className='lg:hidden hidden md:inline'>-</span>
					<div
						className={`${
							theme === 'dark' ? 'text-white' : 'text-slate-800'
						} lg:w-full xl:px-24 lg:px-12 transition duration-500 ease-linear`}>
						<span>Frontend </span>
						<span className={`underline-animation duration-150 ease-linear`}>
							Developer
						</span>
					</div>
				</div>
				<div className='flex xl:px-24 lg:px-12 flex-col lg:gap-4 items-center lg:items-start'>
					<span
						className={`${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
						My stack expertise
					</span>
					<TechStack />
				</div>
				<div className='xl:px-24 lg:px-12 flex gap-4 lg:gap-14 lg:text-2xl text-lg justify-center items-center lg:justify-start'>
					<button
						name={'hire-me'}
						onClick={onButtonClick}
						className={`lg:w-2/6 md:w-1/6 w-5/12 border-2 lg:p-4 p-2 md:rounded-2xl rounded-lg transition-all duration-150 ease-linear active:scale-95 ${
							theme === 'dark'
								? 'hover:bg-transparent bg-white text-slate-800 hover:text-white'
								: 'bg-slate-800 text-white border-slate-800 hover:bg-transparent hover:text-slate-800'
						} `}>
						Contact
					</button>

					<div
						className={`underline-colorless ${
							theme === 'dark'
								? 'after:bg-white text-white'
								: 'after:bg-slate-800 text-slate-800'
						} `}>
						<div
							className={`flex justify-center items-center h-fit transition-all duration-150 ease-linear gap-2 cursor-pointer ${
								theme === 'dark' ? 'text-white' : 'text-slate-800'
							}`}
							name={'about'}
							onClick={onTextClick}>
							<span name={'about'}>About me</span>
							<FaArrowDown name={'about'} />
						</div>
					</div>
				</div>
			</div>
			<div className='lg:w-3/6 md:w-2/6 w-4/6 flex justify-center items-center flex-col'>
				<div
					className={`lg:w-96 lg:h-96 rounded-full ${
						theme === 'dark'
							? 'bg-custom-darkBg border-custom-darkBorder'
							: 'bg-custom-lightBg border-custom-lightBorder'
					} overflow-auto  hover:bg-cyan-500 border-slate-600/60 border-4 hover:border-cyan-500 transition duration-300 picture-shadow`}>
					<Image
						src={picture}
						className='h-full'
						alt='profile_picture'
						priority
					/>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
