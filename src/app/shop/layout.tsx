export default function ShopLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<h1>Hello layout</h1>
			{children}
		</div>
	);
}
