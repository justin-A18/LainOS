export const NAV_ITEMS = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'News',
		href: '/news',
	},
	{
		label: 'About',
		children: [
			{ label: 'Overview', href: '/overview' },
			{ label: 'Core Features', href: '/features' },
		],
	},
	{
		label: 'Development',
		children: [
			{ label: 'Download/Install', href: '/development/download' },
			{ label: 'Roadmap', href: '/development/roadmap' },
		],
	},
	{
		label: 'Community',
		children: [
			{ label: 'Get Involved', href: '/get-involved' },
			{ label: 'Security & PGP Keys', href: '/security&pgp' },
		],
	},
];
