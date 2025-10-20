import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PixelBlast from './PixelBlast';

export const PixelBlasPortal = () => {
	const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

	useEffect(() => {
		setPortalTarget(document.getElementById('pixelblast-portal'));
	}, []);

	return (
		portalTarget &&
		createPortal(
			<PixelBlast
				className='absolute inset-0 -z-10'
				color='#BD6F7E'
			/>,
			portalTarget,
		)
	);
};
