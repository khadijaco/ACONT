import ThreeBanners from "../components/ThreeBanners";
import ServesCards from "../components/ServesCards";
import PopularCategories from "../components/PopularCategories";
import WeeklySelection from "../components/WeeklySelection"; 
import TwoBannerss from "../components/TwoBannerss";
import FeaturedBanners from "../components/FeaturedBanners";
import PromoBanner from "../components/PromoBanner"; 
import LatestNewss from "../components/LatestNewss";
import { posts } from "../data/posts"; 

const Home1 = () => {
  return (
    <div>
      <ThreeBanners />
      <ServesCards />
      <PopularCategories />
        <WeeklySelection />
        <TwoBannerss />
        <WeeklySelection />
        <FeaturedBanners />
        
        <PromoBanner />
        <LatestNewss  posts={posts}/>


<div className="mt-4">
        <ServesCards />
      </div>
  
        
    </div>
  );
};
export default Home1;