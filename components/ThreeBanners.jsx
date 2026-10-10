import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ThreeBanners = () => {
  const { t } = useTranslation();

  const centerSlides = [
    {
      image: "https://i.pinimg.com/736x/6d/94/07/6d9407c3a916746908a82ef612611aa9.jpg",
      subtitle: t("threeBanners.center.slide1.subtitle"),
      title: t("threeBanners.center.slide1.title"),
      badge: t("threeBanners.center.slide1.badge"),
    },
    {
      image: "https://i.pinimg.com/1200x/9c/0f/7c/9c0f7c852afc238b14870b9772343efd.jpg",
      subtitle: t("threeBanners.center.slide2.subtitle"),
      title: t("threeBanners.center.slide2.title"),
      badge: t("threeBanners.center.slide2.badge"),
    },
  ];

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + centerSlides.length) % centerSlides.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % centerSlides.length);
  };

  const currentSlide = centerSlides[index];



  return (
    <div className="row g-3">

      <div className="col-12 col-md-3">
        <div
          style={{
              
            position: "relative",
            width: "100%",
            height: "100%",          
            minHeight: "500px",       
            borderRadius: "8px",
            overflow: "hidden",
            backgroundImage: `url(https://i.pinimg.com/736x/6a/4c/b2/6a4cb256405fc8c874205703b155b158.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              backgroundColor: "white",
              padding: "15px 25px",
              borderRadius: "6px",
              minWidth: "180px",       
            }}
          >
            <h5
              className="fw-bold mb-1"
              style={{ fontSize: "16px", color: "#404b68" }}
            >
              {t("threeBanners.office.title")}
            </h5>
            <a
              href="#"
              style={{
                color: "#f97316",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {t("threeBanners.office.button")}
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6">
        <div
          style={{
           
            position: "relative",
            width: "100%",
            height: "100%",
            minHeight: "500px",      
            borderRadius: "8px",
            overflow: "hidden",
            backgroundImage: `url(${currentSlide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "35%",
              left: "20px",
              transform: "translateY(-50%)",
              maxWidth: "350px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                color: "#3f4e76",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              {currentSlide.subtitle}
            </p>
            <h2
              className="fw-bold mb-3"
              style={{
                fontSize: "clamp(30px, 2.1vw, 50px)",
                color: "#091539",
                lineHeight: "1.2",
                letterSpacing: "-1px",
              }}
            >
              {currentSlide.title}
            </h2>
            <span
              style={{
                backgroundColor: "#f97316",
                color: "white",
                padding: "6px 14px",
                borderRadius: "4px",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {currentSlide.badge}
            </span>
          </div>

   
          <div
            style={{
              position: "absolute",
              bottom: "30px",
              left: "30px",
              display: "flex",
              zIndex: 3,
            }}
          >
            <button
              onClick={handlePrev}
              style={{
                width: "50px",
                height: "50px",
                border: "1px solid #cbd5e1",
                backgroundColor: "white",
                cursor: "pointer",
                color: "#1e3a8a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px 0 0 6px",
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              style={{
                width: "50px",
                height: "50px",
                border: "1px solid #cbd5e1",
                borderLeft: "none",
                backgroundColor: "white",
                cursor: "pointer",
                color: "#1e3a8a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0 6px 6px 0",
              }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-3">
        <div
          style={{
            
            position: "relative",
            width: "100%",
            height: "100%",
            minHeight: "500px",
            borderRadius: "8px",
            overflow: "hidden",
            backgroundImage: `url(https://i.pinimg.com/1200x/36/48/f5/3648f5f5e2d962db7a1e70dec1304106.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              backgroundColor: "white",
              padding: "15px 25px",
              borderRadius: "6px",
              minWidth: "180px",
            }}
          >
            <h5
              className="fw-bold mb-1"
              style={{ fontSize: "16px", color: "#404b68" }}
            >
              {t("threeBanners.chair.title")}
            </h5>
            <a
              href="#"
              style={{
                color: "#f97316",
               
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {t("threeBanners.chair.button")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeBanners;