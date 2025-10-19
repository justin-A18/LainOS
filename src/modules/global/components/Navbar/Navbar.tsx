import { NavItems } from './NavItems';
import { Logo } from '../Logo/Logo';
import { useNavbarMobile } from '../MovileMenu/useNavbarMobile';
import { MobileMenu } from '../MovileMenu/MobileMenu';

export const Navbar = () => {
	const { isOpenMobileMenu, onOpenMobileMenu, onCloseMobileMenu } =
		useNavbarMobile();

	return (
		<header className='w-full px-4 py-2'>
			<nav
				className='flex items-center justify-between'
				role='navigation'>
				<Logo />

				<NavItems />

				<MobileMenu
					isOpenMobileMenu={isOpenMobileMenu}
					onCloseMobileMenu={onCloseMobileMenu}
					onOpenMobileMenu={onOpenMobileMenu}
				/>
			</nav>
		</header>
	);
};
