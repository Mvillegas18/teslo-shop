'use client';
import { Swiper as SwiperObject } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import { useState } from 'react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import './slideShow.css';

interface Props {
	images: string[];
	title: string;
	className?: string;
}
export const ProductSlideShow = ({ images, title, className }: Props) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

	return (
		<div className={` ${className}`}>
			<Swiper
				style={
					{
						'--swiper-navigation-color': '#fff',
						'--swiper-pagination-color': '#fff',
					} as React.CSSProperties
				}
				spaceBetween={10}
				navigation={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs, Autoplay]}
				className="mySwiper2"
			>
				{images.map((image) => (
					<SwiperSlide key={image}>
						<Image
							src={`/products/${image}`}
							alt={title}
							width={1024}
							height={800}
							className="w-full h-full object-fill rounded-lg"
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper"
			>
				{images.map((image) => (
					<SwiperSlide key={image}>
						<Image
							src={`/products/${image}`}
							alt={title}
							width={300}
							height={300}
							className="w-full h-full object-fill rounded-lg"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
