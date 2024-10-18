import { useThemeContext } from '@/app/context/ThemeContext';
import {
	FaHtml5,
	FaCss3Alt,
	FaJsSquare,
	FaReact,
	FaNodeJs,
} from 'react-icons/fa';
import { RiTailwindCssFill, RiNextjsFill, RiNodeTree } from 'react-icons/ri';
import { SiTypescript, SiNestjs, SiExpress, SiMongodb } from 'react-icons/si';
import { Tooltip } from 'antd';

const techStack = [
	{
		icon: <FaHtml5 className='h-full' />,
		name: 'HTML5',
		lightClass: 'text-light-html',
		darkClass: 'text-dark-html',
	},
	{
		icon: <FaCss3Alt className='h-full' />,
		name: 'CSS3',
		lightClass: 'text-light-css',
		darkClass: 'text-dark-css',
	},
	{
		icon: <FaJsSquare className='h-full' />,
		name: 'JavaScript',
		lightClass: 'text-light-js',
		darkClass: 'text-dark-js',
	},
	{
		icon: <SiTypescript className='h-full' />,
		name: 'TypeScript',
		lightClass: 'text-light-ts',
		darkClass: 'text-dark-ts',
	},
	{
		icon: <FaReact className='h-full' />,
		name: 'ReactJS',
		lightClass: 'text-light-react',
		darkClass: 'text-dark-react',
	},
	{
		icon: <RiTailwindCssFill className='h-full' />,
		name: 'TailwindCSS',
		lightClass: 'text-light-tailwind',
		darkClass: 'text-dark-tailwind',
	},
	{
		icon: <RiNextjsFill className='h-full' />,
		name: 'Next.js',
		lightClass: 'text-light-next',
		darkClass: 'text-dark-next',
	},
	{
		icon: <FaNodeJs className='h-full' />,
		name: 'Node.js',
		lightClass: 'text-light-node',
		darkClass: 'text-dark-node',
	},
	{
		icon: <SiNestjs className='h-full' />,
		name: 'Nest.js',
		lightClass: 'text-light-nest',
		darkClass: 'text-dark-nest',
	},
	{
		icon: <SiExpress className='h-full' />,
		name: 'Express.js',
		lightClass: 'text-light-express',
		darkClass: 'text-dark-express',
	},
	{
		icon: <SiMongodb className='h-full' />,
		name: 'MongoDB',
		lightClass: 'text-light-mongodb',
		darkClass: 'text-dark-mongodb',
	},
];

const TechStack = () => {
	const { theme } = useThemeContext();

	return (
		<div className='flex lg:gap-8 sm:gap-4 justify-around lg:justify-normal sm:justify-center w-full flex-wrap px-1 sm:px-0'>
			{techStack.map((tech, index) => (
				<div
					key={index}
					className={`hover:scale-110 transition-all duration-150 ease-linear h-14 ${
						theme === 'dark' ? tech.darkClass : tech.lightClass
					}`}>
					<Tooltip
						title={tech.name}
						arrow={false}
						mouseEnterDelay={0.15}
						placement='bottom'
						color='blue'>
						{tech.icon}
					</Tooltip>
				</div>
			))}
		</div>
	);
};

export default TechStack;
