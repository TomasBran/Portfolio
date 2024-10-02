import {
	pkmnImages,
	notesImages,
	ticketImages,
	paletImages,
	airbnbImages,
} from './images';

export const projects = [
	{
		project_name: 'Pokemon Portal',
		images: pkmnImages,
		id: 0,
		github_link: 'https://github.com/TomasBran/Portal-Pokemon-NextJS',
		deploy_link: 'https://portal-pkmn.vercel.app/',
		project_description:
			'Pokémon Portal is an engaging platform where you can discover exciting games and useful tools to have fun and learn more about Pokémon.',
		disclaimer:
			'This project is not affiliated with Nintendo. All rights to Pokémon belong to their respective owners. This is a non-profit project. The live demo might not be up to date.',
	},
	{
		project_name: 'Notes App',
		images: notesImages,
		id: 1,
		github_link: 'https://github.com/TomasBran/Notes-Management-App',
		deploy_link: '',
		project_description:
			'This is a note management app that allows you to create, delete, and edit notes while assigning categories and tags to them. It’s a versatile tool for organizing your notes effectively.',
		disclaimer: '',
	},
	{
		project_name: 'Ticket Bus',
		images: ticketImages,
		id: 2,
		github_link: 'https://github.com/TomasBran/Ticket-Bus',
		deploy_link: '',
		project_description:
			'This app is a ticket-buying platform that allows you to select your desired seats and purchase them in real time.',
		disclaimer:
			'This is a collaborative project with a non-profit organization.',
	},
	{
		project_name: 'Airbnb Clone',
		images: airbnbImages,
		id: 3,
		github_link: 'https://github.com/TomasBran/Airbnb-Clone',
		deploy_link: '',
		project_description:
			'This project is intended to be an Airbnb clone, replicating key features and functionalities, including property listings, user bookings, and reviews, to provide a similar user experience.',
		disclaimer:
			'This is a collaborative project with a non-profit organization.',
	},
	{
		project_name: 'Grupo Palet',
		images: paletImages,
		id: 4,
		github_link: 'https://github.com/TomasBran/Grupo-Palet',
		deploy_link: '',
		project_description:
			'This project was developed for a pallet factory located in Argentina, showcasing both pallets and services for sale.',
		disclaimer: '',
	},
];
