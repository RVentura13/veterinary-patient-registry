export const Errors = ({ children }: { children: React.ReactNode }) => {
	return (
		<p className='text-center mb-4  text-red-600 font-bold p-1 uppercase text-xs'>{children}</p>
	);
};
