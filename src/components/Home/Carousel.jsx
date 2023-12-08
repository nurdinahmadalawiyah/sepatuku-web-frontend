import React, { useState } from "react";

const Carousel = ({ bannerList }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === bannerList.length - 1 ? 0 : prevIndex + 1
        );
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? bannerList.length - 1 : prevIndex - 1
        );
    }

    return (
        <div className="relative w-full h-full">
            {bannerList.map((banner, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}>
                    <img src={banner.path}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-full object-cover" />
                </div>
            ))}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white focus:outline-none"
            >
                {"<"}
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white focus:outline-none"
            >
                {">"}
            </button>
        </div>
    )
}

export default Carousel;