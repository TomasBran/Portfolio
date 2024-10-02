import { useThemeContext } from '@/app/context/ThemeContext';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';
import { Tooltip } from 'antd';

const TechStack = () => {
	const { theme } = useThemeContext();

	return (
		<div className='flex lg:gap-8 gap-4 flex-wrap'>
			<div
				className={`hover:scale-110 transition-all duration-150 ease-linear h-14 ${
					theme === 'dark' ? 'text-dark-html' : 'text-light-html'
				}`}>
				<Tooltip
					title='HTML5'
					arrow={false}
					mouseEnterDelay={0.15}
					placement='bottom'
					color='blue'>
					<FaHtml5 className='h-full' />
				</Tooltip>
			</div>
			<div
				className={`hover:scale-110 transition-all duration-150 ease-linear h-14 ${
					theme === 'dark' ? 'text-dark-css' : 'text-light-css'
				}`}>
				<Tooltip
					title='CSS3'
					arrow={false}
					mouseEnterDelay={0.15}
					placement='bottom'
					color='blue'>
					<FaCss3Alt className='h-full' />
				</Tooltip>
			</div>
			<div
				className={`hover:scale-110 transition-all duration-150 ease-linear h-14 ${
					theme === 'dark' ? 'text-dark-js' : 'text-light-js'
				}`}>
				<Tooltip
					title='JavaScript'
					arrow={false}
					mouseEnterDelay={0.15}
					placement='bottom'
					color='blue'>
					<FaJsSquare className='h-full' />
				</Tooltip>
			</div>
			<div
				className={`hover:scale-110 transition-all duration-150 ease-linear h-14 ${
					theme === 'dark' ? 'text-dark-ts' : 'text-light-ts'
				}`}>
				<Tooltip
					title='TypeScript'
					arrow={false}
					mouseEnterDelay={0.15}
					placement='bottom'
					color='blue'>
					<SiTypescript className='h-full' />
				</Tooltip>
			</div>
			<div
				className={`hover:scale-110 transition-all duration-150 ease-linear h-14 ${
					theme === 'dark' ? 'text-dark-react' : 'text-light-react'
				}`}>
				<Tooltip
					title='ReactJS'
					arrow={false}
					mouseEnterDelay={0.15}
					placement='bottom'
					color='blue'>
					<FaReact className='h-full' />
				</Tooltip>
			</div>
			<div
				className={`hover:scale-110 transition-all duration-150 ease-linear h-14 ${
					theme === 'dark' ? 'text-dark-tailwind' : 'text-light-tailwind'
				}`}>
				<Tooltip
					title='TailwindCSS'
					arrow={false}
					mouseEnterDelay={0.15}
					placement='bottom'
					color='blue'>
					<RiTailwindCssFill className='h-full' />
				</Tooltip>
			</div>
			<div
				className={`hover:scale-110 transition-all duration-150 ease-linear h-14 ${
					theme === 'dark' ? 'text-dark-next' : 'text-light-next'
				}`}>
				<Tooltip
					title='Next.js'
					arrow={false}
					mouseEnterDelay={0.15}
					placement='bottom'
					color='blue'>
					<RiNextjsFill className='h-full' />
				</Tooltip>
			</div>
		</div>
	);
};

export default TechStack;
