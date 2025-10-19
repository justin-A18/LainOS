import { useState } from 'react';
import { NAV_ITEMS } from '../../constants/navbar.const';
import { ArrowRightIcon } from '../Icons/ArrowRightIcon';
import { CloseIcon } from '../Icons/CloseIcon';
import { MenuIcon } from '../Icons/MenuIcon';

interface Props {
	isOpenMobileMenu: boolean;
	onCloseMobileMenu: () => void;
	onOpenMobileMenu: () => void;
}

export const MobileMenu = ({
	isOpenMobileMenu,
	onCloseMobileMenu,
	onOpenMobileMenu,
}: Props) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleItem = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<>
			<button
				className='block md:hidden cursor-pointer'
				aria-label='open mobile menu'
				onClick={onOpenMobileMenu}>
				<MenuIcon className='size-8 transition-colors duration-300' />{' '}
			</button>

			<div
				className={`fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
					isOpenMobileMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
				}`}
				onClick={onCloseMobileMenu}></div>

			<div
				id='mobile-menu'
				role='menu'
				aria-label='Main mobile menu'
				className={`fixed top-0 right-0 z-[9999] h-screen p-4 w-80 sm:w-96 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-zinc-100 flex flex-col shadow-xl transition-transform duration-500 ${
					isOpenMobileMenu ? 'translate-x-0' : 'translate-x-full'
				}`}>
				<button
					className='self-end mb-4 p-2 rounded hover:bg-pink-200/30 transition-colors cursor-pointer'
					aria-label='close mobile menu'
					onClick={onCloseMobileMenu}>
					<CloseIcon className='size-6 text-pink-200' />
				</button>

				<ul className='flex flex-col gap-2'>
					{NAV_ITEMS.map((item, index) => (
						<li key={item.label}>
							{item.children ? (
								<>
									<button
										className='text-left w-full py-2 px-2 rounded inline-flex gap-2 items-center hover:bg-pink-200/30 transition-colors duration-300'
										onClick={() => toggleItem(index)}>
										<ArrowRightIcon
											className={`${
												openIndex === index ? 'rotate-90' : ''
											} size-3 transition-transform duration-300 text-pink-200`}
										/>
										{item.label}
									</button>
									<ul
										className={`overflow-hidden transition-all duration-500 ${
											openIndex === index ? 'max-h-60' : 'max-h-0'
										} flex flex-col ml-4`}>
										{item.children.map((child) => (
											<li key={child.label}>
												<a
													href={child.href}
													className='py-1 px-2 rounded inline-flex items-center gap-2 hover:bg-pink-200/30 transition-colors duration-300'>
													<span className='text-[0.50rem] text-pink-200'>
														●
													</span>{' '}
													{child.label}
												</a>
											</li>
										))}
									</ul>
								</>
							) : (
								<a
									href={item.href}
									className='py-2 px-2 rounded block hover:bg-pink-200/30 transition-colors duration-300'>
									{item.label}
								</a>
							)}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
