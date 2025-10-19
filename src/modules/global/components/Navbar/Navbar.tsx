import { MenuIcon } from '../Icons/MenuIcon';
import { NavItems } from './NavItems';
import { Logo } from '../Logo/Logo';
import { useNavbar } from './useNavbar';

export const Navbar = () => {
	const { isOpenMobileMenu, toggleMobileMenu, onCloseMobileMenu } = useNavbar();

	return (
		<header className='w-full px-4 py-2'>
			<nav
				className='flex items-center justify-between'
				role='navigation'>
				<Logo />
				<NavItems />

				<button
					className='block md:hidden'
					aria-label='open mobile menu'>
					<MenuIcon className='size-8' />
				</button>
			</nav>
		</header>
	);
};
