import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaShoppingCart } from "react-icons/fa";
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpeg";

const Hero = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  // صور السلايدز
const slides = [
  {
    image: hero1,
    badge: t("hero.slide1.badge"),
    title: t("hero.slide1.title"),
    button: t("hero.slide1.button"),
  },
  {
    image: hero2,
    badge: t("hero.slide2.badge"),
    title: t("hero.slide2.title"),
    button: t("hero.slide2.button"),
  },
];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === slides.length) {
      const timer = setTimeout(() => {
        setAnimate(false);
        setIndex(0);

        setTimeout(() => setAnimate(true), 50);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [index, slides.length]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        fontFamily: "Jost",
        minHeight: "clamp(300px, 50vw, 600px)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",

          height: "100%",
          transform: `translateX(-${index * 100}%)`,
          transition: animate ? "transform 1s ease-in-out" : "none",
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: "100%",
              minHeight: "clamp(300px, 50vw, 600px)",
              position: "relative",
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="text-center"
              style={{
                position: "relative",
                zIndex: 2,
                padding: "20px",
                maxWidth: "800px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "#1f8e48",
                  color: "#13538a",
                  padding: "6px 16px",
                  borderRadius: "6px",

                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "20px",
                }}
              >
                {slide.badge}
              </span>

        
              <h1
                className="fw-bold mb-4"
                style={{
                  fontSize: "clamp(24px, 5vw, 54px)",
                  color: "#0f224f",
                  lineHeight: "1.2",
                  letterSpacing: "-1px",
                }}
              >
                {slide.title}
              </h1>

           
              <button
                style={{
                  backgroundColor: "#1e293b",
                  color: "white",

                  padding: "14px 32px",
                  borderRadius: "6px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#334155")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1e293b")
                }
              >
                <FaShoppingCart />
                {slide.button}
              </button>
            </div>
          </div>
        ))}


        <div
          style={{
            flexShrink: 0,
            width: "100%",
            minHeight: "clamp(300px, 50vw, 600px)",
            position: "relative",
            backgroundImage: `url(${slides[0].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="text-center"
            style={{
              position: "relative",
              zIndex: 2,
              padding: "20px",
              maxWidth: "800px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#86efac",
                color: "#166534",
                padding: "6px 16px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              {slides[0].badge}
            </span>

            <h1
              className="fw-bold mb-4"
              style={{
                fontSize: "clamp(24px, 5vw, 54px)",
                color: "#0f172a",
                lineHeight: "1.2",
                letterSpacing: "-1px",
              }}
            >
              {slides[0].title}
            </h1>

            <button
              style={{
                backgroundColor: "#1e293b",
                color: "white",
                border: "none",
                padding: "14px 32px",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FaShoppingCart />
              {slides[0].button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
