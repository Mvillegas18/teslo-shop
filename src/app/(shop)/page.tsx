import { titleFont } from '@/config/fonts';

export default function Home() {
	return (
		<main className="inset-0 flex items-center justify-center">
			<h1>Hola mundo</h1>
			<h1 className={` ${titleFont.className}`}>Hola mundo</h1>
		</main>
	);
}
