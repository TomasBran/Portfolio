'use client';

import React, { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
	const [currentSection, setCurrentSection] = useState('home');

	return (
		<PageContext.Provider value={{ currentSection, setCurrentSection }}>
			{children}
		</PageContext.Provider>
	);
};

export const usePageContext = () => useContext(PageContext);
