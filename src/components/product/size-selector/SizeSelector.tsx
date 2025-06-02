import { type Size } from '@/interfaces';
import clsx from 'clsx';

interface Props {
	selectedSize: Size;
	availableSizes: Size[];
}

export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
	return (
		<div className="my-5">
			<h3 className="font-bold mb-4">Tallas disponibles</h3>
			<div className="flex">
				{availableSizes.map((size) => (
					<button
						key={size}
						className={clsx(
							'mx-2 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer',
							{
								'hover:bg-gray-200 text-gray-700':
									selectedSize !== size,
								'bg-blue-500 text-white': selectedSize === size,
							}
						)}
					>
						{size}
					</button>
				))}
			</div>
		</div>
	);
};
