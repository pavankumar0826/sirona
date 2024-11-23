
import Carousel from 'react-bootstrap/Carousel';


/* SCSS IMPORTATION */
import '../Carousel/BannerCarousel.scss';


function BannerCarousel() {

    return (
        <>
            <Carousel className='my-4 container'>
                <Carousel.Item className='Carouselitem'>
                    <img className='w-100' src={require('../../../../assets/Images/HomePageImages/CarouselImage1.jpg')} />
                </Carousel.Item>
                <Carousel.Item className='Carouselitem'>
                    <img className='w-100' src={require('../../../../assets/Images/HomePageImages/CarouselImage2.jpg')} />
                </Carousel.Item>
                <Carousel.Item className='Carouselitem'>
                    <img className='w-100' src={require('../../../../assets/Images/HomePageImages/CarouselImage3.jpg')} />
                </Carousel.Item>
                <Carousel.Item className='Carouselitem'>
                    <img className='w-100' src={require('../../../../assets/Images/HomePageImages/CarouselImage4.jpg')} />
                </Carousel.Item>
                <Carousel.Item className='Carouselitem'>
                    <img className='w-100' src={require('../../../../assets/Images/HomePageImages/CarouselImage5.jpg')} />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default BannerCarousel;