import { Title } from '@/components';
import { initialData } from '@/seed/seed';
import Image from 'next/image';
import Link from 'next/link';

const productsInCart = [
	initialData.products[0],
	initialData.products[1],
	initialData.products[2],
];

export default function CheckoutPage() {
	return (
		<div className="flex justify-center items-center mb-72 px-10 sm:px-0">
			<div className="flex flex-col w-[1000px]">
				<Title title="Verificar orden" />
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
					{/* Carrito */}
					<div className="flex flex-col mt-5">
						<span className="text-xl">Desea editar su compra?</span>
						<Link
							href="/cart"
							className="text-blue-500 w-full text-center mt-2 p-2 border border-blue-500 rounded-md hover:underline hover:bg-blue-700 hover:text-white transition-colors duration-300"
							aria-label="Continuar comprando"
						>
							Editar compra
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
										})}{' '}
										x 3
									</p>
									<p className="font-bold">
										Subtotal: {product.price * 3}
									</p>
									<button
										className="mt-2 p-2 font-semibold border text-blue-500 border-blue-500 rounded-md hover:bg-blue-700 hover:text-white transition-colors duration-300 opacity-50 cursor-not-allowed"
										disabled
									>
										Eliminar
									</button>
								</div>
							</div>
						))}
					</div>

					{/* Resumen de compra */}
					<div className="rounded-xl shadow-xl p-7 bg-white">
						<h2 className="text-2xl mb-2 font-bold">
							Direccion de entrega
						</h2>
						<div className="mb-10">
							<p className="text-xl">Miguel Angel Villegas</p>
							<p>Cerezos. caldas</p>
							<p>Medellin Antioquia</p>
							<p>Colombia</p>
							<p>CP 050001</p>
							<p>+57 300 123 4567</p>
						</div>

						{/* Divider */}
						<div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

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

						<div className="mt-5 mb-2 w-full">
							<p className="mb-5">
								{/* Disclaimer */}
								<span className="text-sm text-gray-500">
									Al confirmar su compra, acepta nuestros{' '}
									<a
										href="/#"
										className="text-blue-500 underline"
									>
										términos y condiciones.
									</a>
								</span>
							</p>
							<Link
								href={'/orders/123'}
								className="flex justify-center btn-primary w-full mt-5 transition-colors duration-300"
							>
								Confirmar compra
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
