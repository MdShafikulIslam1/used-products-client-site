import React from 'react';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import Category from '../Category_section/Category';
import MoreProducts from '../MoreProductsSection/MoreProducts';

const Home = () => {
    return (
        <div>

            <CarouselBanner></CarouselBanner>
            <Category></Category>
            <MoreProducts></MoreProducts>
        </div>
    );
};

export default Home;