import { inter } from '@/config/fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Teslo Shop',
	description: 'Tienda de ropa y accesorios de Teslo',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
