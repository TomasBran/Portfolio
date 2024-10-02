'use client';

import {
	FaHome,
	FaUser,
	FaProjectDiagram,
	FaHandshake,
	FaSun,
	FaMoon,
} from 'react-icons/fa';
import { Menu } from 'antd';
import { useThemeContext } from '../context/ThemeContext';
import { usePageContext } from '../context/PageContext';

const Navbar = () => {
	const { theme, changeTheme } = useThemeContext();
	const { currentSection, setCurrentSection } = usePageContext();

	const onClick = (e) => {
		setCurrentSection(e.key);

		const section = document.getElementById(e.key);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const items = [
		{
			label: 'Home',
			key: 'home',
			icon: <FaHome />,
		},
		{
			label: 'About me',
			key: 'about',
			icon: <FaUser />,
		},
		{
			label: 'My projects',
			key: 'projects',
			icon: <FaProjectDiagram />,
		},
		{
			label: 'Hire me',
			key: 'hire-me',
			icon: <FaHandshake />,
		},
	];

	return (
		<div className='w-full flex items-center fixed z-50'>
			<Menu
				onClick={onClick}
				selectedKeys={[currentSection]}
				mode='horizontal'
				items={items}
				theme={theme}
				className='flex items-center w-screen'
			/>
			<div className='flex items-center absolute right-4'>
				<button
					onClick={changeTheme}
					className={`flex items-center justify-center w-8 h-8 rounded-full ${
						theme === 'dark'
							? 'bg-gray-800 hover:bg-gray-700'
							: 'bg-gray-200 hover:bg-gray-300'
					} transition-colors duration-300 ease-in-out`}>
					{theme === 'dark' ? (
						<FaMoon className=' text-yellow-300' />
					) : (
						<FaSun className=' text-yellow-500' />
					)}
				</button>
			</div>
		</div>
	);
};

export default Navbar;
