'use client';
import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import '../styles/hireMe.css';
import { toast, Toaster } from 'sonner';

const HireMe = () => {
	const { theme } = useThemeContext();

	const emailToCopy = 'tomasaugusto.bran@hotmail.com';

	const handleCopy = () => {
		navigator.clipboard
			.writeText(emailToCopy)
			.then(() => {
				toast.success('Email copied to clipboard!');
			})
			.catch((err) => {
				console.error('Error copying the email: ', err);
				toast.error('Failed to copy email.');
			});
	};

	return (
		<div
			className={`h-screen font-main ${
				theme === 'dark'
					? 'bg-slate-900 text-white'
					: 'bg-slate-50 text-slate-800'
			} flex flex-col items-center justify-center cursor-default w-screen`}>
			<div className='grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 h-3/6 lg:text-4xl md:text-2xl text-base font-bold'>
				<span className='md:text-right'>GitHub:</span>
				<span className='md:text-left'>
					<a
						href='https://github.com/TomasBran'
						rel='noopener noreferrer'
						target='_blank'
						className='underline-animation active:text-cyan-300 transition-all duration-150'>
						Click Here
					</a>
				</span>

				<span className='md:text-right'>LinkedIn Profile:</span>
				<span className='md:text-left'>
					<a
						href='https://www.linkedin.com/in/tomas-augusto-bran-70745616a/'
						rel='noopener noreferrer'
						target='_blank'
						className='underline-animation active:text-cyan-300 transition-all duration-150'>
						Click Here
					</a>
				</span>

				<span className='md:text-right'>Email:</span>
				<span className='md:text-left'>
					<span
						className='underline-animation cursor-pointer'
						onClick={handleCopy}>
						{emailToCopy}
					</span>
				</span>
			</div>
			<Toaster
				position='bottom-left'
				richColors
				theme={theme}
			/>
		</div>
	);
};

export default HireMe;
