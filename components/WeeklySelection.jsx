import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WeeklySelection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("bestSeller");

  const tabs = [
    { key: "all", label: t("weeklySelection.tabs.all") },
    { key: "bestSeller", label: t("weeklySelection.tabs.bestSeller") },
    { key: "mostViewed", label: t("weeklySelection.tabs.mostViewed") },
    { key: "topBrands", label: t("weeklySelection.tabs.topBrands") },
  ];

  return (
    <section style={{ padding: "50px 0", backgroundColor: "#fff" }}>
      <div className="container">
      
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "40px",
            paddingBottom: "30px",
            borderBottom: "1px solid #d1dff2",
          }}
        >
       
          <div>
            <h2
              style={{
                color: "#4c5c89",
                fontWeight: "700",
                fontSize: "36px",
                marginBottom: "8px",
              }}
            >
              {t("weeklySelection.title")}
            </h2>
            <p style={{ color: "#5b779e", fontSize: "15px", margin: 0 }}>
              {t("weeklySelection.subtitle")}
            </p>
          </div>

      
          <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
     
            <div style={{ display: "flex", gap: "25px" }}>
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: "700",
                    color: activeTab === tab.key ? "#1e3a8a" : "#94a3b8",
                    paddingBottom: "5px",
                    borderBottom:
                      activeTab === tab.key
                        ? "2px solid #1e3a8a"
                        : "2px solid transparent",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

       
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid #cbd5e1",
                  backgroundColor: "white",
                  cursor: "pointer",
                  color: "#4f66a3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaChevronLeft size={12} />
              </button>
              <button
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid #cbd5e1",
                  backgroundColor: "white",
                  cursor: "pointer",
                  color: "#4f66a3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>

      
        <div className="row g-4">
          {/* كاردات */}
        </div>
      </div>
    </section>
  );
};

export default WeeklySelection;