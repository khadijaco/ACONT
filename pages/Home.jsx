import Hero from "../components/Hero";
import ServesCards from "../components/ServesCards";
import Categories from "../components/Categories";
import img from "../assets/img.jpg";
import { useTranslation } from "react-i18next";
import FeaturedProducts from "../components/FeaturedProducts"; 
import TrendingProducts from "../components/TrendingProducts";
import TwoBanners from "../components/TwoBanners";
import ProductCard from "../components/ProductCard";

import panar from "../assets/panar.jpeg";
import panare from "../assets/panare.jpeg";
import { posts } from "../data/posts"; 
import LatestNews from "../components/LatestNews";
const Home = () => {
  const { t } = useTranslation();
  
  return (
    <section
      style={{
        padding: "30px clamp(15px, 5vw, 70px)",
        backgroundColor: "white",
      }}
    >
      <Hero />
      <ServesCards />
      <Categories />
      <div>
       <div
  style={{
    position: "relative",
  width: "100%",
  height: "clamp(140px, 20vw, 200px)",
  borderRadius: "8px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",

  }}
>

  <img
    src={img}
    alt="Sale Banner"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "70%",
      objectFit: "cover",
      zIndex: 0,
    }}
  />

  <div

    style={{
      position: "relative",
      zIndex: 2,
      padding: "clamp(9px, 3vw, 40px)",
      maxWidth: "400px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      minHeight: "clamp(100px, 20vw, 200px)",
    }}
  >
    <h2
      className="fw-bold mb-1"
      style={{
        fontSize: "clamp(20px, 3vw, 30px)",
        lineHeight: "0.9",
        color: "white",
      }}
    >
      {t("saleBanner.title")}
    </h2>
    <p
      className="mb-1"
      style={{
        fontSize: "clamp(10px, 1vw, 15px)",
        color: "rgba(255,255,255,0.9)",
      }}
    >
      {t("saleBanner.subtitle")}
    </p>
    <a
      href="#"
      style={{
        color: "white",
        textDecoration: "underline",
        fontSize: "clamp(11px, 1vw, 10px)",
        fontWeight: "600",
        alignSelf: "flex-start",
      }}
    >
      {t("saleBanner.shopNow")}
    </a>
  </div>
</div>

  <FeaturedProducts/>

      <TwoBanners /> 

<TrendingProducts />



<ProductCard />



<div className="row g-3 mt-4">
  <div className="col-md-6">
    <div
      style={{
        overflow: "hidden",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      <img
        src={panar}
        alt="Banner 1"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  </div>

  <div className="col-md-6">
    <div
      style={{
        overflow: "hidden",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      <img
        src={panare}
        alt="Banner 2"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  </div>
</div>

< LatestNews posts={posts} /> 
      </div>


      <div className="mt-4">
        <ServesCards />
      </div>

      
      
    </section>
  );
};

export default Home;
