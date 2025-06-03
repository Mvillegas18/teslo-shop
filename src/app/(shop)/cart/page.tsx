import { QuantitySelector, Title } from '@/components';
import { initialData } from '@/seed/seed';
import Image from 'next/image';
import Link from 'next/link';

const productsInCart = [
	initialData.products[0],
	initialData.products[1],
	initialData.products[2],
];

export default function CartPage() {
	return (
		<div className="flex justify-center items-center mb-72 px-10 sm:px-0">
			<div className="flex flex-col w-[1000px]">
				<Title title="Carrito de compras" />
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
					{/* Carrito */}
					<div className="flex flex-col mt-5">
						<span className="text-xl">
							Desea agregar mas productos?
						</span>
						<Link
							href="/"
							className="text-blue-500 w-full text-center mt-2 p-2 border border-blue-500 rounded-md hover:underline hover:bg-blue-700 hover:text-white transition-colors duration-300"
							aria-label="Continuar comprando"
						>
							Continua comprando
						</Link>

						{/* Items */}
						{productsInCart.map((product) => (
							<div className="flex my-5" key={product.slug}>
								<Image
									src={`/products/${product.images[0]}`}
									alt={product.title}
									width={300}
									height={300}
									className="w-32 h-32 object-cover mr-5 rounded-2xl"
								/>

								<div>
									<p>{product.title}</p>
									<p>
										{product.price.toLocaleString('en-US', {
											style: 'currency',
											currency: 'USD',
										})}
									</p>
									<QuantitySelector quantity={3} />
									<button className="mt-2 p-2 font-semibold border text-blue-500 border-blue-500 rounded-md hover:bg-blue-700 hover:text-white transition-colors duration-300">
										Eliminar
									</button>
								</div>
							</div>
						))}
					</div>

					{/* Resumen de compra */}
					<div className="rounded-xl shadow-xl p-7 bg-white">
						<h2 className="text-2xl mb-2">Resumen de compra</h2>
						<div className="grid grid-cols-2">
							<span>No. Productos</span>
							<span className="text-right">
								{productsInCart.length} articulos
							</span>

							<span>Subtotal</span>
							<span className="text-right">
								{productsInCart
									.reduce(
										(acc, product) => acc + product.price,
										0
									)
									.toLocaleString('en-US', {
										style: 'currency',
										currency: 'USD',
									})}
							</span>

							<span>Impuestos (15%)</span>
							<span className="text-right">$100</span>

							<span className="text-2xl mt-5">Total: </span>
							<span className="text-right mt-5 text-2xl">
								$100
							</span>
						</div>

						<div>
							<Link
								href={'/checkout/address'}
								className="flex justify-center btn-primary w-full mt-5 transition-colors duration-300"
							>
								Continuar con el pago
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
