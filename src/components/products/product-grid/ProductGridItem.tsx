'use client';

import { type Product } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Props {
	product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
	const [displayImage, setDisplayImage] = useState(product.images[0]);

	return (
		<>
			<div className="rounded-md overflow-hidden fade-in">
				<Link href={`/product/${product.slug}`}>
					<Image
						src={`/products/${displayImage}`}
						alt={product.title}
						width={500}
						height={500}
						className="w-full h-auto object-cover rounded-md"
						onMouseEnter={setDisplayImage.bind(
							null,
							product.images[1]
						)}
						onMouseLeave={setDisplayImage.bind(
							null,
							product.images[0]
						)}
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
