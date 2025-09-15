import Banner from "./Banner";
import BestSellingItems from "./BestSellingItems";
import BrandsSlider from "./BrandsSlider";
import Collections from "./Collections";
import CollectionsGrid from "./CollectionsGrid";
import CommitmentsSection from "./CommitmentsSection";
import CoreCustomersSection from "./CoreCustomersSection";
import FeaturedCollection from "./FeaturedCollection";
import FeaturesBar from "./FeaturesBar";
import InstagramFeed from "./InstagramFeed";
import LatestNewsSection from "./LatestNewsSection";
import LookbookSection from "./LookbookSection";
import NewArrivals from "./NewArrivals";
import Newsletter from "./Newsletter";
import QualitySection from "./QualitySection";
import Testimonials from "./Testimonials";
import Trending from "./Trending";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <FeaturesBar></FeaturesBar> */}
            <QualitySection/>
            <CollectionsGrid></CollectionsGrid>
            <NewArrivals></NewArrivals>
            <CommitmentsSection/>
            <FeaturedCollection></FeaturedCollection>
            <Collections></Collections>
            <Trending></Trending>
            <LookbookSection></LookbookSection>
            <BestSellingItems></BestSellingItems>
            <Newsletter></Newsletter>
            <Testimonials></Testimonials>
            {/* <BrandsSlider></BrandsSlider> */}
            <CoreCustomersSection/>
            <LatestNewsSection></LatestNewsSection>
            <InstagramFeed></InstagramFeed>

      
        </div>
    );
};

export default Home;