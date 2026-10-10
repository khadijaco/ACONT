import React, { useState } from "react";
import { useTranslation } from "react-i18next";


const TrendingProducts = ( ) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { key: "all", label: t("trending.all") },
    { key: "bestSeller", label: t("trending.bestSeller") },
    { key: "mostViewed", label: t("trending.mostViewed") },
    { key: "topBrands", label: t("trending.topBrands") },
  ];




  return (
    <section
      style={{
        padding: "50px clamp(15px, 5vw, 70px)",
        backgroundColor: "#fdf6e3", 
     
      }}
    >
  
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "20px",
          borderBottom: "1px solid #e5e7eb",
          paddingBottom: "15px",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        
        <div>
          <h2
            className="fw-bold mb-2"
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              color: "#1e3a8a",
            }}
          >
            {t("trending.title")}
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "#838a99",
              margin: 0,
            }}
          >
            {t("trending.subtitle")}
          </p>
        </div>

  
        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                background: "transparent",
                border: "none",
                fontSize: "14px",
                fontWeight: "700",
                color: activeTab === tab.key ? "#1e3a8a" : "#9ca3af",
                cursor: "pointer",
                padding: "8px 0",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                transition: "color 0.3s ease",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

   
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        منتجات شائعة هنا
      </div>
    </section>
  );
};

export default TrendingProducts;