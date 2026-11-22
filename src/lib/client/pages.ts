import type { NavigationPage } from '../../types/pages';

export const NavigationPages: NavigationPage[] = [
	{
		href: '/',
		name: 'Home'
	},
	{
		href: '/#about',
		name: 'About'
	},
	{
		href: '/docs',
		name: 'Docs',
		showActive: true
	},
	{
		href: '/support',
		name: 'Support',
		showActive: true
	}
];
