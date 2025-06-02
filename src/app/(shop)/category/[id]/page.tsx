import { ProductGrid, Title } from '@/components';
import { Category } from '@/interfaces';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';

interface Props {
	params: { id: Category };
}
const products = initialData.products;

export default async function CategoryPage({ params }: Props) {
	const { id } = await params;
	const productsCategories = products.filter(
		(product) => product.gender === id
	);

	if (id !== 'kid' && id !== 'women' && id !== 'men') {
		notFound();
	}
	const labels: Record<Category, string> = {
		kid: 'Niños',
		women: 'Mujeres',
		men: 'Hombres',
		unisex: 'Unisex',
	};

	return (
		<>
			<Title
				title={`${labels[id]}`}
				subtitle={`Todos los productos de la categoria de ${labels[id]}`}
				className="mb-2"
			/>
			<ProductGrid products={productsCategories} />
		</>
	);
}
