import React, { useEffect, useState } from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { projects } from '../data/projects';
import Image from 'next/image';
import '../styles/projects.css';
import { usePageContext } from '../context/PageContext';

const Projects = () => {
	const { theme } = useThemeContext();

	const [currentProject, setCurrentProject] = useState(projects[0]);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const changeProject = (index) => {
		if (currentProject.id === index) {
			return;
		}
		setCurrentImageIndex(0);
		setCurrentProject(projects[index]);
	};

	const nextImage = () => {
		if (currentImageIndex < currentProject.images.length - 1) {
			setCurrentImageIndex((prevIndex) => prevIndex + 1);
		}
	};

	const prevImage = () => {
		if (currentImageIndex > 0) {
			setCurrentImageIndex((prevIndex) => prevIndex - 1);
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => {
				if (prevIndex < currentProject.images.length - 1) {
					return prevIndex + 1;
				} else {
					return 0;
				}
			});
		}, 4000);

		return () => {
			clearInterval(interval);
		};
	}, [currentProject.images.length]);

	return (
		<div
			className={`h-screen font-main ${
				theme === 'dark'
					? 'bg-slate-900 text-white'
					: 'bg-slate-50 text-slate-800'
			} flex flex-col justify-center items-center cursor-default w-screen lg:gap-8 md:gap-4`}>
			<div className='w-full flex flex-col items-center gap-6'>
				<span className='text-5xl lg:inline-block hidden'>My projects</span>
				<div className='w-full flex items-center justify-center'>
					{projects.map((project, index) => (
						<div
							key={index}
							className={`flex justify-center lg:w-2/6 md:w-full w-1/6 h-full `}>
							<span
								className={`cursor-pointer flex justify-center items-center lg:py-4 py-1 md:px-6 text-xs text-center lg:w-4/6 w-full project-shadow lg:rounded-full lg:border-r-[3px] lg:border-b-[3px] lg:border-t-[1px] lg:border-l-[1px] border-t-slate-400 border-l-slate-400 border-b-cyan-500 border-r-cyan-500 hover:bg-cyan-400 hover:text-white lg:text-base md:text-sm ${
									project.project_name === currentProject.project_name &&
									'bg-cyan-500 text-white'
								}`}
								onClick={() => changeProject(index)}>
								{project.project_name}
							</span>
						</div>
					))}
				</div>
			</div>

			<div className='w-full flex lg:flex-row flex-col'>
				<div className='lg:w-8/12 w-full flex justify-center items-center relative '>
					{currentProject.images.length > 0 ? (
						<div className='flex justify-center items-center'>
							<button
								onClick={prevImage}
								className={`z-20 absolute left-0 md:px-3 px-1 py-12 enabled:active:scale-95 transition-all duration-150 rounded text-3xl disabled:cursor-not-allowed
						${
							theme === 'dark'
								? 'text-cyan-300 enabled:hover:bg-gray-700 enabled:active:bg-gray-600'
								: 'text-cyan-500 enabled:hover:bg-gray-200 enabled:active:bg-gray-300'
						}`}
								disabled={currentImageIndex === 0}>
								&#8249;
							</button>

							<div className='lg:h-[60vh] lg:w-11/12 w-full overflow-hidden rounded-2xl relative'>
								<div
									className={`flex transition-transform duration-300`}
									style={{
										transform: `translateX(-${currentImageIndex * 100}%)`,
									}}>
									{currentProject.images.map((image, index) => (
										<Image
											key={index}
											src={image}
											alt={currentProject.project_name}
											className={`object-contain transition-opacity duration-500 ${
												index === currentImageIndex
													? 'opacity-100'
													: 'opacity-0'
											}`}
										/>
									))}
								</div>
							</div>

							<button
								onClick={nextImage}
								className={`z-20 absolute md:right-0 right-3 md:px-3 px-1 py-12 enabled:active:scale-95 transition-all duration-150 rounded text-3xl disabled:cursor-not-allowed 
						${
							theme === 'dark'
								? 'text-cyan-300 enabled:hover:bg-gray-700 enabled:active:bg-gray-600'
								: 'text-cyan-500 enabled:hover:bg-gray-200 enabled:active:bg-gray-300'
						}`}
								disabled={
									currentImageIndex === currentProject.images.length - 1
								}>
								&#8250;
							</button>
						</div>
					) : (
						<span>Error downloading images</span>
					)}
				</div>
				<div className='lg:w-4/12 flex items-center flex-col lg:gap-8'>
					<div className='flex lg:flex-col flex-col sm:flex-row lg:gap-0 gap-2 items-center'>
						<div className='flex flex-col items-center'>
							<span className='lg:text-4xl font-bold text-xl'>
								{currentProject.project_name}
							</span>
							{currentProject.project_name === 'Pokemon Portal' && (
								<span className='text-sm italic'>✨Featured Project✨</span>
							)}
						</div>
						<div className='flex flex-wrap lg:gap-x-6 gap-x-2 lg:gap-y-4 gap-y-1 sm:gap-y-0 items-center justify-center lg:py-4 py-1 '>
							{currentProject.stack.map((stack, index) => (
								<span
									key={index}
									className={`text-sm py-1 px-3 rounded-xl
									${
										theme === 'dark'
											? 'bg-white/90 text-slate-800'
											: 'bg-slate-800/90 text-white'
									}`}>
									{stack}
								</span>
							))}
						</div>
					</div>
					<div className='flex flex-col items-center text-center lg:gap-8 px-6 '>
						<span className='text-lg'>
							{currentProject.project_description}
						</span>
						<div className='flex lg:flex-col gap-2'>
							{currentProject.deploy_link !== '' && (
								<button className='py-2 px-6 rounded-full bg-slate-50 text-black hover:bg-cyan-500 hover:text-white'>
									<a
										href={currentProject.deploy_link}
										target='_blank'
										rel='noopener noreferrer'>
										View Deploy
									</a>
								</button>
							)}
							<button className='py-2 px-6 rounded-full bg-cyan-600 hover:bg-cyan-500'>
								<a
									href={currentProject.github_link}
									target='_blank'
									rel='noopener noreferrer'>
									View Repository
								</a>
							</button>
						</div>
						{currentProject.disclaimer !== '' && (
							<span className='text-xs italic lg:inline hidden'>
								Disclaimer: {currentProject.disclaimer}
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
