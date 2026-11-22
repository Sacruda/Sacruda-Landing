import type { NavigationPage } from '../../types/pages';

export const NavigationPages: NavigationPage[] = [
	{
		href: '/',
		name: 'Home'
	},
	{
		href: '/about',
		name: 'About'
	},
	{
		href: 'https://docs.sacruda.nl',
		name: 'Docs',
		isExternal: true
	},
	{
		href: '/support',
		name: 'Support',
		showActive: true
	}
];
