'use client';
import Link from 'next/link';
import {
	IoCloseOutline,
	IoLogInOutline,
	IoLogOutOutline,
	IoPeopleOutline,
	IoPersonOutline,
	IoSearch,
	IoSearchOutline,
	IoShirtOutline,
	IoTicketOutline,
} from 'react-icons/io5';

export const Sidebar = () => {
	return (
		<div>
			<div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
			<div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />
			<nav className="fixed p-5 right-0 top-0 w-[400px] h-screen bg-white shadow-2xl transform transition-all duration-300 z-20">
				<IoCloseOutline
					className="aboslute top-5 right-5 cursor-pointer"
					size={40}
					onClick={() => console.log('Close sidebar')}
				/>

				<div className="relative mt-14">
					<IoSearchOutline
						size={20}
						className="absolute top-2 left-2"
					/>
					<input
						type="text"
						placeholder="Search..."
						className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500 transition-colors duration-300"
					/>
				</div>

				<Link
					href="/"
					className="flex items-center gap-2 mt-10 font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:bg-gray-100 p-2 rounded-md"
				>
					<IoPersonOutline size={25} />
					<span className="ml-2 text-xl">Perfil</span>
				</Link>

				<Link
					href="/"
					className="flex items-center gap-2 mt-5 font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:bg-gray-100 p-2 rounded-md"
				>
					<IoTicketOutline size={25} />
					<span className="ml-2 text-xl">Ordenes</span>
				</Link>

				<Link
					href="/"
					className="flex items-center gap-2 mt-5 font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:bg-gray-100 p-2 rounded-md"
				>
					<IoLogInOutline size={25} />
					<span className="ml-2 text-xl">Ingresar</span>
				</Link>

				<Link
					href="/"
					className="flex items-center gap-2 mt-5 font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:bg-gray-100 p-2 rounded-md"
				>
					<IoLogOutOutline size={25} />
					<span className="ml-2 text-xl">Salir</span>
				</Link>

				<div className="border-t border-gray-300 my-5 w-full" />

				<Link
					href="/"
					className="flex items-center gap-2 mt-5 font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:bg-gray-100 p-2 rounded-md"
				>
					<IoShirtOutline size={25} />
					<span className="ml-2 text-xl">Productos</span>
				</Link>

				<Link
					href="/"
					className="flex items-center gap-2 mt-5 font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:bg-gray-100 p-2 rounded-md"
				>
					<IoTicketOutline size={25} />
					<span className="ml-2 text-xl">Ordenes</span>
				</Link>

				<Link
					href="/"
					className="flex items-center gap-2 mt-5 font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:bg-gray-100 p-2 rounded-md"
				>
					<IoPeopleOutline size={25} />
					<span className="ml-2 text-xl">Usuarios</span>
				</Link>
			</nav>
		</div>
	);
};
