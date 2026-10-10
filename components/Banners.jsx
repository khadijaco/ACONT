import React from "react";
import { useTranslation } from "react-i18next";
import Exclusive from "../assets/Exclusive.jpg";
import History from "../assets/History.jpg";

const Banners = () => {
  const { t } = useTranslation();

  const banners = [
    {
      image: Exclusive,
      subtitle: t("banners.latest.subtitle"),
      title: t("banners.latest.title"),
      text: t("banners.latest.text"),
      button: t("banners.latest.button"),
    },
    {
      image: History,
      subtitle: t("banners.history.subtitle"),
      title: t("banners.history.title"),
      text: t("banners.history.text"),
      button: t("banners.history.button"),
    },
  ];

  return (
    <div className="row g-3 mt-4"
      style={{
    maxWidth: "1100px",    
    margin: "0 auto",        
  }}
>
      {banners.map((banner, i) => (
        <div className="col-12 col-md-6" key={i}>
          <div
            style={{
              position: "relative",
              backgroundImage: `url(${banner.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px",
              padding: "50px 50px",
              minHeight: "220px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
            }}
          >
          

         
            <div style={{ position: "relative", zIndex: 2, maxWidth: "55%" }}>
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
                  fontSize: "22px",
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
                  color: "#1e3a8a",
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

export default Banners;