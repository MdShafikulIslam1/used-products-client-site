import React from 'react';


const CarouselBanner = () => {
    return (
        <section className='my-5'>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-3 gap-3  bg-gray-400">
                <a href="#item1" className="btn btn-sm">1</a>
                <a href="#item2" className="btn btn-sm">2</a>
                <a href="#item3" className="btn btn-sm">3</a>
                <a href="#item4" className="btn btn-sm">4</a>
            </div>
        </section>
    );
};

export default CarouselBanner;