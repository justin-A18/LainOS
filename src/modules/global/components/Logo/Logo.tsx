export const Logo = () => {
	return (
		<a
			href='/'
			className='flex items-center gap-3 group cursor-pointer select-none'>
			<div
				className='relative'
				aria-label='LainOs Logo'>
				<img
					src='/the-wired.svg'
					alt='The Wired Logo'
					width={36}
					height={36}
					className='transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110'
				/>
			</div>

			<span
				className='font-semibold text-xl tracking-tight 
				 text-white drop-shadow-[0_0_12px_rgba(120,120,150,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(200,150,255,0.4)] 
				transition-all duration-300'>
				Lain OS
			</span>
		</a>
	);
};
