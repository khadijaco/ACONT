import React from "react";
import { useTranslation } from "react-i18next";

const TwoBannerss = () => {
  const { t } = useTranslation();

  const banners = [
    {
      image: "https://i.pinimg.com/736x/5f/f9/79/5ff979ddfc3dad8fd817e9073c201e91.jpg",
      titleKey: "twoBannerss.kitchen.title",
      subtitleKey: "twoBannerss.kitchen.subtitle",
    },
    {
      image: "https://i.pinimg.com/1200x/40/d2/8e/40d28e0efc6f369d7cef06560746d3a2.jpg",
      titleKey: "twoBannerss.livingroom.title",
      subtitleKey: "twoBannerss.livingroom.subtitle",
    },
  ];

  return (
    <section style={{ padding: "40px 0" }}>
      <div className="container">
        <div className="row g-4">
          {banners.map((banner, i) => (
            <div className="col-12 col-md-6" key={i}>
              <div
                style={{
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16 / 9",
                    borderRadius: "8px",
                    overflow: "hidden",
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  <img
                    src={banner.image}
                    alt={t(banner.titleKey)}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <h3
                    style={{
                      color: "#42578e",
                      fontWeight: "700",
                      fontSize: "22px",
                      marginBottom: "6px",
                    }}
                  >
                    {t(banner.titleKey)}
                  </h3>
                  <p
                    style={{
                      color: "#64748b",
                      fontSize: "18px",
                      margin: 0,
                    }}
                  >
                    {t(banner.subtitleKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #5274a1",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default TwoBannerss;