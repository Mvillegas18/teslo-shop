import { titleFont } from '@/config/fonts';
import Link from 'next/link';
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5';

export const TopMenu = () => {
	return (
		<nav className="flex px-5 py-2 justify-between items-center w-full">
			{/* Logo */}
			<div>
				<Link href="/">
					<span
						className={`${titleFont.className} antialiased font-bold`}
					>
						Teslo
					</span>
					<span> | Shop </span>
				</Link>
			</div>

			{/* Center menu */}

			<div className="hidden sm:block">
				<Link
					className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
					href="/category/men"
				>
					Hombres
				</Link>
				<Link
					className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
					href="/category/women"
				>
					Mujeres
				</Link>
				<Link
					className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
					href="/category/kids"
				>
					Niños
				</Link>
			</div>

			{/* Search - cart - menu */}
			<div className="flex items-center">
				<Link href="/search" className="mx-2">
					<IoSearchOutline />
				</Link>
				<Link href="/cart" className="mx-2">
					<div className="relative">
						<span className="absolute text-xs rounded-full px-1 font-bold -top-2 bg-blue-700 text-white -right-2">
							3
						</span>
						<IoCartOutline className="w-5 h-5" />
					</div>
				</Link>

				<button className="m-2 rounded-md transition-all hover:bg-gray-100">
					Menu
				</button>
			</div>
		</nav>
	);
};
