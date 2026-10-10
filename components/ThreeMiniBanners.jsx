import React from "react";
import { useTranslation } from "react-i18next";
import book from "../assets/book.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";

const ThreeMiniBanners = () => {
  const { t } = useTranslation();

  const banners = [
    {
      subtitle: t("miniBanners.latest.subtitle"),
      title: t("miniBanners.latest.title"),
      text: t("miniBanners.latest.text"),
      button: t("miniBanners.latest.button"),
      image: book2,
    },
    {
      subtitle: t("miniBanners.discount.subtitle"),
      title: t("miniBanners.discount.title"),
      text: t("miniBanners.discount.text"),
      button: t("miniBanners.discount.button"),
      image: book,
    },
    {
      subtitle: t("miniBanners.professional.subtitle"),
      title: t("miniBanners.professional.title"),
      text: t("miniBanners.professional.text"),
      button: t("miniBanners.professional.button"),
      image: book3,
    },
  ];

  return (
    <div className="row g-3 mt-4"
    style={{padding:"1px 60px 1px 60px"}}
    >
      {banners.map((banner, i) => (
        <div className="col-12 col-md-4" key={i}>
          <div
            style={{
              position: "relative",
              backgroundImage: `url(${banner.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px",
              padding: "25px",
              minHeight: "210px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ position: "relative", zIndex: 2, maxWidth: "55%" }}
            className="mt-4"
            >
              <p
                style={{
                  fontSize: "13px",
                  color: "#6b7280",
                  marginBottom: "6px",
                }}
              >
                {banner.subtitle}
              </p>
              <h5
                className="fw-bold mb-2"
                style={{
                  fontSize: "20px",
                  color: "#1e3a8a",
                  lineHeight: "1.3",
                }}
              >
                {banner.title}
              </h5>
              <p
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                  marginBottom: "15px",
                  lineHeight: "1.5",
                }}
              >
                {banner.text}
              </p>
              <a
                href="#"
                style={{
                  color: "#64b0ef",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.5px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {banner.button} ▶
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeMiniBanners;