import BannerCarousel from "./Components/Carousel/BannerCarousel";
import HeaderBanner from "./Components/Banner/Banner";
import Whatsyourconcern from "./Components/WhatsYourConcern/Whatsyourconcern";
import Inovationthecare from "./Components/InovationTheCare/Inovationthecare";
import BestSellers from "./Components/BestSellers/Bestsellers";
import FestiveReady from "./Components/FestiveReady/Festiveready";
import MiddleCarousel from "./Components/Carousel/Carousel";
import ShopByCategories from "./Components/Shopbycategories/Categories";


function Home() {

    return (
        <>
            <HeaderBanner />
            <BannerCarousel />
            <Whatsyourconcern />
            <Inovationthecare />
            <BestSellers />
            <FestiveReady />
            <MiddleCarousel />
            <ShopByCategories />
        </>
    )
}

export default Home;