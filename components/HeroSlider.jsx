import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import banar from "../assets/banar.jpg";
import { Link } from "react-router-dom";
const HeroSlider = () => {
  const { t } = useTranslation();

  const slides = [
    {
      image: banar,
      badge: t("hero.slide3.badge"),
      title: t("hero.slide3.title"),
      subtitle: t("hero.slide3.subtitle"),
      shopBtn: t("hero.slide3.shopBtn"),
      learnBtn: t("hero.slide3.learnBtn"),
    },
    {
      image: banar,
      badge: t("hero.slide3.badge"),
      title: t("hero.slide3.title"),
      subtitle: t("hero.slide3.subtitle"),
      shopBtn: t("hero.slide3.shopBtn"),
      learnBtn: t("hero.slide3.learnBtn"),
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "600px",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#f9f5ef",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          transform: `translateX(-${index * 100}%)`,
          transition: "transform 0.8s ease-in-out",
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: "100%",
              height: "100%",
              position: "relative",
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "right center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50px",
                transform: "translateY(-50%)",
                maxWidth: "480px",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  color: "#6b7280",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                }}
              >
                {slide.badge}
              </p>

              <h1
                className="fw-bold mb-4"
                style={{
                  fontSize: "clamp(28px, 4vw, 52px)",
                  color: "#4c5b83",
                  lineHeight: "1.15",
                  letterSpacing: "-1px",
                }}
              >
                {slide.title}
              </h1>

              <p
                style={{
                  fontSize: "16px",
                  color: "#7a7f89",
                  lineHeight: "1.7",
                  marginBottom: "25px",
                }}
              >
                {slide.subtitle}
              </p>

              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <Link
                  to="/shop"
                  style={{
                    backgroundColor: "#1e3a8a",
                    color: "white",
                    border: "none",
                    padding: "14px 30px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    textDecoration: "none",
                    display: "inline-block",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#1e3a8a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#f97316";
                  }}
                >
                  {slide.shopBtn}
                </Link>
                <Link
                  to="/about"
                  style={{
                    color: "#4b5563",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "600",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#f97316";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#4b5563";
                  }}
                >
                  {slide.learnBtn}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50px",
          display: "flex",
          gap: "8px",
          zIndex: 3,
        }}
      >
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: index === i ? "#f97316" : "#cbd5e1",
              cursor: "pointer",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
