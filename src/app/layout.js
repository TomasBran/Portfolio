import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import { PageProvider } from './context/PageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Tomas Bran | Web Dev',
	description: 'Tomas Bran | Frontend Developer',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<PageProvider>
					<ThemeProvider>
						<Navbar />
						{children}
					</ThemeProvider>
				</PageProvider>
			</body>
		</html>
	);
}
