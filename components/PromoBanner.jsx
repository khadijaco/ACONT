import React from "react";
import { useTranslation } from "react-i18next";

const PromoBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div
              className="rounded d-flex align-items-center justify-content-between p-4 gap-3"
              style={{ backgroundColor: "#e0f0eb" }}
            >
           
              <div>
                <h3
                  className="fw-bold mb-2"
                  style={{ color: "#1e3a8a", fontSize: "18px" }}
                >
                  {t("promoBanner.title")}
                </h3>
                <p
                  className="mb-3"
                  style={{ color: "#1e3a8a", fontSize: "13px" }}
                >
                  {t("promoBanner.subtitle")}
                </p>
                <button
                  className="btn fw-bold text-white px-3 py-2 promo-btn"
                  style={{
                    backgroundColor: "#515b78",
                    borderRadius: "4px",
                    fontSize: "13px",
                  }}
                >
                  {t("promoBanner.button")}
                </button>
              </div>

              <img
                src="https://i.pinimg.com/736x/ce/ab/6f/ceab6fcdef946191bf9b8f8754fe8c0f.jpg"
                alt={t("promoBanner.title")}
                style={{
                  width: "120px",
                  objectFit: "contain",
                  mixBlendMode: "multiply",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;