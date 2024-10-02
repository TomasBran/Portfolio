import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { usePageContext } from '../context/PageContext';

const About = () => {
	const { theme } = useThemeContext();
	const { setCurrentSection } = usePageContext();

	const onButtonClick = (e) => {
		setCurrentSection(e.target.name);

		const section = document.getElementById(e.target.name);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div
			className={`h-screen font-main ${
				theme === 'dark'
					? 'bg-slate-900 text-white'
					: 'bg-slate-50 text-slate-800'
			} flex flex-col justify-center  items-center cursor-default w-screen pt-14`}>
			<span
				className={`font-bold md:text-5xl text-3xl flex items-center justify-center h-[10%]`}>
				About me
			</span>
			<div className='w-full lg:px-10 px-2 flex flex-col lg:text-xl md:text-base text-sm text-center h-[90%] gap-10'>
				<div
					data-aos='fade-right'
					className='flex w-full justify-center items-center max-h-[16vh]'>
					<span className='lg:w-7/12'>
						Hi! I'm 27 years old and based in
						<span className='md:text-blue-300'> Buenos </span>
						Air
						<span className='md:text-yellow-500'>es, A</span>
						rg
						<span className='md:text-blue-300'>entina</span>. I'm passionate
						about programming, gaming, and Pokémon.
					</span>
				</div>
				<div
					data-aos='fade-left'
					data-aos-delay='750'
					className='flex w-full justify-center items-center max-h-[16vh]'>
					<span className='lg:w-7/12'>
						I started programming at the age of 17 just for fun, but I began to
						dive deeper and study it more seriously in 2022.
					</span>
				</div>
				<div
					data-aos='fade-right'
					data-aos-delay='1500'
					className='flex w-full justify-center items-center max-h-[30vh]'>
					<span className='lg:w-7/12'>
						Now I continue to refine my skills and embrace new challenges with
						enthusiasm. My journey in programming is an ever-evolving adventure,
						and I'm dedicated to growing both personally and professionally as I
						explore the endless possibilities within the tech world.
					</span>
				</div>
				<div
					data-aos='fade-left'
					data-aos-delay='2250'
					className='flex w-full justify-center items-center max-h-[30vh]'>
					<span className='lg:w-7/12'>
						I encourage you to check out the projects I've worked on to get to
						know me a bit better. Each project reflects my dedication and
						passion for programming (especially, the Pokemon Portal), and I
						believe they'll give you a glimpse into my skills and interests.
						Feel free to explore and see how my journey in technology and
						creativity has unfolded.
					</span>
				</div>

				<div
					data-aos='fade-up'
					data-aos-delay='3000'
					className='flex w-full justify-center items-center max-h-[16vh]'>
					<button
						name={'projects'}
						onClick={onButtonClick}
						className={`lg:w-3/12 w-2/6 border-2 lg:p-2 p-2 rounded-lg transition-all duration-150 ease-linear active:scale-95 
							${
								theme === 'dark'
									? 'hover:bg-transparent bg-white text-slate-800 hover:text-white'
									: 'bg-slate-800 text-white border-slate-800 hover:bg-transparent hover:text-slate-800'
							} 
						`}>
						My Projects
					</button>
				</div>
			</div>
		</div>
	);
};

export default About;
