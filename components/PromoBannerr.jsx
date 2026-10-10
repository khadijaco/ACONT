import React from "react";
import { useTranslation } from "react-i18next";

const PromoBannerr = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        backgroundImage: "url(https://i.pinimg.com/736x/d5/71/6b/d5716b42dc5790e1407d38ecea8592e2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#1e3a8a",
        padding: "10px 20px",
        minHeight: "100px",
        textAlign: "center",
        maxWidth: "1000px",
        margin: "20px auto",
        width: "calc(100% - 40px)",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ fontSize: "15px", color: "white", marginBottom: "8px" }}>
        {t("promoBannerr.subtitle")}
      </p>
      <h2
        className="fw-bold mb-2"
        style={{ fontSize: "clamp(24px, 2vw, 40px)", color: "white", margin: 0 }}
      >
        {t("promoBannerr.title")}
      </h2>
      <button
        style={{
          backgroundColor: "#f97316",
          color: "white",
          border: "none",
          padding: "12px 30px",
          borderRadius: "6px",
          fontSize: "12px",
          fontWeight: "600",
          cursor: "pointer",
          marginTop: "15px",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#7e92cb";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#f97316";
        }}
      >
        {t("promoBannerr.button")} ▶
      </button>
    </div>
  );
};

export default PromoBannerr;