import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FeaturedProducts = ({ products = [] }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("featured");

  const tabs = [
    { key: "featured", label: t("products.featured") },
    { key: "bestSeller", label: t("products.bestSeller") },
    { key: "mostViewed", label: t("products.mostViewed") },
  ];



  return (
    <section style={{ padding: "40px clamp(15px, 5vw, 70px)" }}>
   
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          borderBottom: "1px solid #e5e7eb",
          paddingBottom: "15px",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
      
        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                background: "transparent",
                border: "none",
                fontSize: "clamp(16px, 2vw, 22px)",
                fontWeight: "700",
                color: activeTab === tab.key ? "#1e3a8a" : "#9ca3af",
                cursor: "pointer",
                padding: "0 0 10px 0",
                position: "relative",
                transition: "color 0.3s ease",
              }}
            >
              {tab.label}
              {activeTab === tab.key && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "-16px",
                    left: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#1e3a8a",
                  }}
                ></span>
              )}
            </button>
          ))}
        </div>

      
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid #e5e7eb",
              backgroundColor: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#6b7280",
            }}
          >
            <FaChevronLeft />
          </button>
          <button
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid #e5e7eb",
              backgroundColor: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#6b7280",
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

    
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "20px",
        }}
      >
        محتوى المنتجات هنا
  
      </div>
    </section>
  );
};

export default FeaturedProducts;