import { useState } from "react";

export const useNavbar = () => {
	const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

	const toggleMobileMenu = () => {
		setIsOpenMobileMenu(!isOpenMobileMenu);
	};

	const onOpenMobileMenu = () => {
		setIsOpenMobileMenu(true);
	};

	const onCloseMobileMenu = () => {
		setIsOpenMobileMenu(false);
	};

	return {
		isOpenMobileMenu,
		toggleMobileMenu,
		onOpenMobileMenu,
		onCloseMobileMenu,
	};
};
