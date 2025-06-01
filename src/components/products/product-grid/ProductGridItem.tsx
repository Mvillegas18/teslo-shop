import { type Product } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
	product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
	return (
		<>
			<div className="rounded-md overflow-hidden fade-in">
				<Link href={`/product/${product.slug}`}>
					<Image
						src={`/products/${product.images[0]}`}
						alt={product.title}
						width={500}
						height={500}
						className="w-full h-auto object-cover"
					/>
				</Link>

				<div className="p-4 flex flex-col ">
					<Link
						href={`/product/${product.slug}`}
						className="hover:text-blue-600 font-bold"
					>
						{product.title}
					</Link>
					<span className="font-bold">
						{product.price.toLocaleString('en-US', {
							style: 'currency',
							currency: 'USD',
						})}
					</span>
				</div>
			</div>
		</>
	);
};
