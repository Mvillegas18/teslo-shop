import { titleFont } from '@/config/fonts';
import Image from 'next/image';
import Link from 'next/link';

export const PageNotFound = () => {
	return (
		<div className="flex flex-col-reverse md:flex-row h-[700px] w-full justify-center items-center align-middle">
			<div className="text-center px-5 mx-5">
				<h2 className={`${titleFont.className} antialiased text-9xl`}>
					404
				</h2>
				<p className="font-semibold text-xl">
					Whoops! Lo sentimos mucho.
				</p>
				<p className="font-light text-lg">
					<span>Puedes regresar al</span>
					<Link
						href="/"
						className="font-semibold hover:underline transition-all text-blue-700 ml-1"
						aria-label="Ir a la página de inicio"
					>
						Inicio
					</Link>
				</p>
			</div>

			<div className="px-5 mx-5">
				<Image
					src="/imgs/starman_750x750.png"
					alt="Imaen de starman"
					width={700}
					height={700}
				/>
			</div>
		</div>
	);
};
