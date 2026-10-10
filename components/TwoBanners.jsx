import React from "react";
import { useTranslation } from "react-i18next";
import imgg from "../assets/imgg.jpg";
import immg from "../assets/immg.jpg";

const TwoBanners = () => {
  const { t } = useTranslation();

  return (
    <section
      style={{
        padding: "30px clamp(15px, 5vw, 70px)",
        backgroundColor: "white",
      }}
    >
      <div className="row g-4">
        {/* ⬇️ البانر الأول */}
        <div className="col-md-6 hover-effect">
          <div
            style={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <img
              src={imgg}
              alt=""
              style={{ width: "100%", display: "block" }}
            />

           

            {/* ⬇️ النص في المنتصف */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "15px",
                zIndex: 2,
              }}
            >
              <h3
                className="fw-bold mb-2 mt-2"
                style={{
                     fontSize: "clamp(5px, 2.5vw, 20px)",
                  color: "#1e3a8a",
                  lineHeight: "1.3",
                }}
              >
                {t("twoBanners.banner1.title")}
              </h3>
              <p
                className="mb-3"
                style={{
                  fontSize: "clamp(6px, 2vw, 15px)",
                  color: "#315185",
                  fontWeight: "600",
                  lineHeight: "1.4",
                }}
              >
                {t("twoBanners.banner1.subtitle")}
              </p>
              <button
                style={{
                  backgroundColor: "#1e3a8a",
                  color: "white",
                  border: "none",
                  padding: "8px 20px",
                  borderRadius: "6px",
                  fontSize: "clamp(5px, 1.5vw, 13px)",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {t("twoBanners.banner1.button")}
              </button>
            </div>
          </div>
        </div>

        {/* ⬇️ البانر الثاني */}
        <div className="col-md-6 hover-effect">
          <div
            style={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <img
              src={immg}
              alt=""
              style={{ width: "100%", display: "block" }}
            />

          

            {/* ⬇️ النص في المنتصف */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "15px",
                zIndex: 2,
              }}
            >
              <h3
                className="fw-bold mb-1 mt-2"
                style={{
                  fontSize: "clamp(5px, 2.5vw, 20px)",
                  color: "#1e3a8a",
                  lineHeight: "1",
                }}
              >
                {t("twoBanners.banner2.title")}
              </h3>
              <p
                className="mb-3"
                style={{
                  fontSize: "clamp(11px, 2vw, 14px)",
                  color: "#315185",
                  fontWeight: "600",
                  lineHeight: "1.4",
                }}
              >
                {t("twoBanners.banner2.subtitle")}
              </p>
              <button
                style={{
                  backgroundColor: "#1e3a8a",
                  color: "white",
                  border: "none",
                  padding: "8px 20px",
                  borderRadius: "6px",
                  fontSize: "clamp(6px, 1.5vw, 13px)",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {t("twoBanners.banner2.button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoBanners;