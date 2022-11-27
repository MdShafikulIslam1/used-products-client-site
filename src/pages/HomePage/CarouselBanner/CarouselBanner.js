import React from 'react';
import img1 from '../../../images/banner/banner1.jpg';
import img2 from '../../../images/banner/banner2.jpeg';
import img3 from '../../../images/banner/banner3.jpeg';


const CarouselBanner = () => {
    return (
        <section className='my-5'>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-2/5]">
                    <img src={img1} className="w-full" alt='' />
                </div>
                <div id="item2" className="carousel-item w-2/5">
                    <img src={img2} className="w-full" alt='' />
                </div>
                <div id="item3" className="carousel-item w-2/5">
                    <img src={img3} className="w-full" alt='' />
                </div>
            </div>
            <div className="flex justify-center w-full py-3 gap-3  bg-gray-400">
                <a href="#item1" className="btn btn-sm">1</a>
                <a href="#item2" className="btn btn-sm">2</a>
                <a href="#item3" className="btn btn-sm">3</a>
            </div>
        </section>
    );
};

export default CarouselBanner;