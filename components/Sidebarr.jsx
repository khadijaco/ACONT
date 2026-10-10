import React, { useState } from "react";
import { FaChevronRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";



const Sidebar = () => {
  const { t, i18n } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { nameKey: "sidebar.categories.technologyTrending", count: "09" },
    { nameKey: "sidebar.categories.entertainment", count: "12" },
    { nameKey: "sidebar.categories.techReviews", count: "24" },
    { nameKey: "sidebar.categories.gamingBlog", count: "34" },
    { nameKey: "sidebar.categories.cryptoNews", count: "65" },
    { nameKey: "sidebar.categories.softwareDev", count: "15" },
    { nameKey: "sidebar.categories.fintech", count: "76" },
    { nameKey: "sidebar.categories.healthTech", count: "89" },
    { nameKey: "sidebar.categories.tipsTricks", count: "23" },
    { nameKey: "sidebar.categories.makeMoney", count: "98" },
    { nameKey: "sidebar.categories.homeTheater", count: "98" },
    { nameKey: "sidebar.categories.camerasDrones", count: "124" },
    { nameKey: "sidebar.categories.pcGaming", count: "56" },
  ];

  const visibleCategories = showAll ? categories : categories.slice(0, 10);



 

  return (
    <div>
      {/* Blog Categories */}
      <div
        style={{
          width: "100%",
          height: "600px",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          backgroundColor: "white",
          marginBottom: "30px",
          overflow: "hidden",
        }}
      >
        <div style={{ padding: "20px", borderBottom: "1px solid #e5e7eb" }}>
          <h5
            className="fw-bold m-0"
            style={{ color: "#1e3a8a", fontSize: "20px" }}
          >
            {t("sidebar.blogCategories")}
          </h5>
        </div>




        <ul className="list-unstyled m-0 p-0">
          {visibleCategories.map((cat, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <li
                key={index}
                style={{
                  borderBottom:
                    index === visibleCategories.length - 1
                      ? "none"
                      : "1px solid #f3f4f6",
                }}
              >
                <Link
                  to="/"
                  className="d-flex justify-content-between align-items-center"
                  style={{
                    padding: "14px 20px",
                    textDecoration: "none",
                    color: isHovered ? "#f97316" : "#374151",
                    fontSize: "15px",
                    fontWeight: "500",
                    transition: "all 0.2s ease",
                    paddingLeft: isHovered ? "25px" : "20px",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span className="d-flex align-items-center gap-2">
                    <FaChevronRight
                      style={{
                        fontSize: "10px",
                        color: isHovered ? "#f97316" : "#9ca3af",
                      }}
                    />
                    {t(cat.nameKey)}
                  </span>
                  <span
                    style={{
                      backgroundColor: isHovered ? "#f97316" : "#e8f0f8",
                      color: isHovered ? "white" : "#3b82f6",
                      padding: "3px 10px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: "700",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {cat.count}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div style={{ padding: "14px 20px" }}>
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              color: "#f97316",
              fontSize: "14px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
            }}
          >
            {showAll ? t("sidebar.seeLess") : t("sidebar.seeMore")}
            {showAll ? (
              <FaChevronUp style={{ fontSize: "10px" }} />
            ) : (
              <FaChevronDown style={{ fontSize: "10px" }} />
            )}
          </button>
        </div>
      </div>



     

     
    </div>
  );
};

export default Sidebar;