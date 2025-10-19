interface NavSubItemsProps {
	label: string;
	children: {
		label: string;
		href: string;
	}[];
}

export const NavSubItems = ({ label, children }: NavSubItemsProps) => {
	return (
		<>
			<summary className='cursor-pointer transition-all duration-500'>
				{label}
			</summary>
			<div className='absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 top-10 transition-all duration-300 bg-black/90 border border-white/10 rounded-md p-2 z-10 w-fit flex flex-col'>
				{children.map(({ label, href }) => (
					<a
						href={href}
						key={label}
						className='text-nowrap py-1 px-2 hover:bg-white/10 rounded'>
						{label}
					</a>
				))}
			</div>
		</>
	);
};
