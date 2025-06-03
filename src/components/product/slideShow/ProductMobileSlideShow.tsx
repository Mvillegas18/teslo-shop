'use client';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import './slideShow.css';

interface Props {
	images: string[];
	title: string;
	className?: string;
}
export const ProductMobileSlideShow = ({ images, title, className }: Props) => {
	return (
		<div className={` ${className}`}>
			<Swiper
				style={{ width: '100vw', height: '500px' }}
				pagination
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[FreeMode, Autoplay, Pagination]}
				className="mySwiper2"
			>
				{images.map((image) => (
					<SwiperSlide key={image}>
						<Image
							src={`/products/${image}`}
							alt={title}
							width={600}
							height={500}
							className="w-full h-full object-fill"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
