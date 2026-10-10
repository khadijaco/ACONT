import React from "react";
import Sidebarr from "../components/Sidebarr";
import HeroSlider from "../components/HeroSlider";
import ThreeMiniBanners from "../components/ThreeMiniBanners";
import ServesCards from "../components/ServesCards";
import LatestDeals from "../components/LatestDeals.jsx";
import PromoBannerr from "../components/PromoBannerr";
import WeeklySelectionn from "../components/WeeklySelectionn";
import FeaturedProductss from "../components/FeaturedProductss";
import { featuredProducts } from "../data/featuredProducts";
import Banners from "../components/Banners";
import CategoryCards from "../components/CategoryCards";
import Sidebaar from "../components/Sidebaar";
import LatestNewss1 from "../components/LatestNewss1";



import { posts } from "../data/posts"; 

const Home8 = () => {

 const products = [
  {
    image: "https://i.pinimg.com/736x/42/a0/50/42a0506d2e9e03d686f2c2bf28d44c83.jpg",
    brandKey: "weeklySelectionn.products.p1.brand", 
    titleKey: "weeklySelectionn.products.p1.title",
    reviews: 65,
    price: 2856.3,
    oldPrice: 3856.3,
    available: 568,
    sold: 289,
    featuresKeys: [
      "weeklySelectionn.products.p1.f1",
      "weeklySelectionn.products.p1.f2",
      "weeklySelectionn.products.p1.f3",
    ],
  },
  {
    image: "https://i.pinimg.com/736x/03/09/3a/03093a6a0f8db608428920ee27cbe77e.jpg",
    brandKey: "weeklySelectionn.products.p2.brand",
    titleKey: "weeklySelectionn.products.p2.title",
    reviews: 65,
    price: 2856.3,
    oldPrice: 3856.3,
    available: 568,
    sold: 289,
    featuresKeys: [
     "weeklySelectionn.products.p1.f1",
      "weeklySelectionn.products.p1.f2",
      "weeklySelectionn.products.p1.f3",
    ],
  },
  {
    image: "https://i.pinimg.com/736x/6b/f7/8e/6bf78e82e7a421a922828a779e1003ad.jpg",
    brandKey: "weeklySelectionn.products.p3.brand",
    titleKey: "weeklySelectionn.products.p3.title",
    reviews: 65,
    price: 2856.3,
    oldPrice: 3856.3,
    available: 568,
    sold: 289,
    featuresKeys: [
      "weeklySelectionn.products.p1.f1",
      "weeklySelectionn.products.p1.f2",
      "weeklySelectionn.products.p1.f3",
    ],
  },
  {
    image: "https://i.pinimg.com/736x/4f/bb/5e/4fbb5e89c5716411c19f879dbcb70430.jpg",
    brandKey: "weeklySelectionn.products.p4.brand",
    titleKey: "weeklySelectionn.products.p4.title",
    reviews: 65,
    price: 2856.3,
    oldPrice: 3856.3,
    available: 568,
    sold: 289,
    featuresKeys: [
    "weeklySelectionn.products.p1.f1",
      "weeklySelectionn.products.p1.f2",
      "weeklySelectionn.products.p1.f3",
    ],
  },
];
  return (
    <div>
      <div className="row g-3">
        <div className="col-12 col-lg-3 mt-5">
          <Sidebarr />
        </div>



        <div className="col-12 col-lg-9 mt-5 ">
          <HeroSlider />
        </div>

        
      </div>

  


      <ThreeMiniBanners />

  
< LatestDeals />

< PromoBannerr />


      <WeeklySelectionn products={products} />

<FeaturedProductss products={featuredProducts} />

<Banners />
  <CategoryCards />  
      
 <div className="row g-3" style={{ padding: "40px clamp(15px, 5vw, 70px)" }}>
      <div className="col-12 col-md-6 col-lg-3">
        <Sidebaar title="Best Seller" products={featuredProducts} />      {/* 8 منتجات */}
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <Sidebaar title="Featured" products={featuredProducts} />         {/* 8 منتجات */}
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <Sidebaar title="Most Viewed" products={featuredProducts} />      {/* 8 منتجات */}
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <Sidebaar title="Trending" products={featuredProducts} />         {/* 8 منتجات */}
      </div>
    </div>


        <LatestNewss1  posts={posts}/>

<div className="mt-4">
        <ServesCards />
      </div>

      
    </div>
  );
};

export default Home8;