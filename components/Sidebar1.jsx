import React from "react";
import { useTranslation } from "react-i18next";
import { FaCaretRight, FaCaretDown } from "react-icons/fa";

const Sidebar = () => {
  const { t } = useTranslation();

  const categories = [
    { name: t("sidebar.computers"), count: 9 },
    { name: t("sidebar.electricAccessories"), count: 12 },
    { name: t("sidebar.mainboard"), count: 24 },
    { name: t("sidebar.bluetooth"), count: 34 },
    { name: t("sidebar.mouseKeyboard"), count: 65 },
    { name: t("sidebar.wiredHeadphone"), count: 15 },
    { name: t("sidebar.gamingGadgets"), count: 76 },
    { name: t("sidebar.smartWatches"), count: 89 },
    { name: t("sidebar.cellPhones"), count: 23 },
    { name: t("sidebar.headphone"), count: 98 },
  ];

  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {/* العنوان */}
      <div
        style={{
          padding: "15px 20px",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <h5
          className="fw-bold mb-0"
          style={{ fontSize: "17px", color: "#1e3a8a" }}
        >
          {t("sidebar.title")}
        </h5>
      </div>

      {/* القائمة */}
      <div>
        {categories.map((cat, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 20px",
              borderBottom: "1px solid #f3f4f6",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
              fontSize: "14px",
              color: "#4b5563",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f9fafb";
              e.currentTarget.style.color = "#1e3a8a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#4b5563";
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FaCaretRight style={{ fontSize: "10px", color: "#1e3a8a" }} />
              {cat.name}
            </span>
            <span style={{ fontSize: "12px", color: "#9ca3af" }}>
              {cat.count}
            </span>
          </div>
        ))}
      </div>

      {/* See More */}
      <div
        style={{
          padding: "15px 20px",
          textAlign: "center",
          color: "#f97316",
          fontSize: "13px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        {t("sidebar.seeMore")} <FaCaretDown style={{ fontSize: "10px" }} />
      </div>
    </div>
  );
};

export default Sidebar;