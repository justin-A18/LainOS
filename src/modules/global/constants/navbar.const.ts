export const NAV_ITEMS = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'About',
		children: [
			{ label: 'Overview', href: '/about/overview' },
			{ label: 'Core Features', href: '/about/features' },
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
			{ label: 'Get Involved', href: '/community/get-involved' },
			{ label: 'Security & PGP Keys', href: '/community/security&pgp' },
		],
	},
];
