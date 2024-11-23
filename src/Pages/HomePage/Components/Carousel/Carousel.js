

import Carousel from 'react-bootstrap/Carousel';

/* SCSS LINK */
import '../Carousel/BannerCarousel.scss';

function MiddleCarousel() {

    return (
        <>
            <Carousel className='container'>
                <Carousel.Item className='Carouselitem'>
                    <img className='w-100' src={require('../../../../assets/Images/HomePageImages/CarouselImage6.jpg')} />
                </Carousel.Item>
                <Carousel.Item className='Carouselitem'>
                    <img className='w-100' src={require('../../../../assets/Images/HomePageImages/CarouselImage7.jpg')} />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default MiddleCarousel;