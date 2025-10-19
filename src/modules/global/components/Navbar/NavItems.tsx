import { NAV_ITEMS } from '../../constants/navbar.const';
import { DiscordIcon } from '../Icons/DiscordIcon';
import { GitHubIcon } from '../Icons/GithubIcon';
import { NavSubItems } from './NavSubItems';

export const NavItems = ({}) => {
	return (
		<div className='hidden md:flex flex-1'>
			<ul
				className='flex items-center gap-4 mx-auto'
				aria-label='Main navigation'>
				{NAV_ITEMS.map((props) => (
					<li
						key={props.label}
						className='relative group w-fit before:content-[""] before:w-full before:absolute before:h-0.5 before:-bottom-2 before:bg-gradient-to-r from-gray-300 via-zinc-500 to-gray-700 hover:before:scale-100 before:scale-0 before:origin-left before:transition-all before:duration-500'>
						{props.children ? (
							<NavSubItems {...props} />
						) : (
							<a
								href={props.href}
								className='text-gray-300 hover:text-gray-100 transition-colors duration-300'>
								{props.label}
							</a>
						)}
					</li>
				))}
			</ul>

			<div className='flex items-center gap-4'>
				<a
					href='https://github.com/The-LainOS-Project'
					aria-label='GitHub profile'
					target='_blank'
					rel='noopener noreferrer'>
					<GitHubIcon className='size-6' />
				</a>
				<a
					href='https://discord.com/invite/kEbwebmZuC'
					aria-label='Discord community'
					target='_blank'
					rel='noopener noreferrer'>
					<DiscordIcon className='size-6' />
				</a>
			</div>
		</div>
	);
};
