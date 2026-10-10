import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { posts } from "../data/posts";
import bannerImage from "../assets/imgo.jpg";

// مكون زر الوسم
const TagButton = ({ tag }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to="/"
      style={{
        display: "inline-block",
        padding: "10px 12px",
        border: "1px solid #b5cce8",
        borderRadius: "6px",
        backgroundColor: isHovered ? "#709dd1" : "white",
        color: isHovered ? "white" : "#1e293b",
        fontSize: "10px",
        fontWeight: "400",
        textDecoration: "none",
        transition: "all 0.3s ease",
        cursor: "pointer",
        marginRight: "4px",
        marginBottom: "4px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {tag}
    </Link>
  );
};

const Sidebar = () => {
  const { t, i18n } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [trendingPage, setTrendingPage] = useState(0);

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

 const itemsPerPage = 4;
  const totalPages = Math.ceil(8/ itemsPerPage);
  const startIndex = trendingPage * itemsPerPage;
  const trendingNews = posts.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setTrendingPage((prev) => (prev + 1) % totalPages);
    }, 4000);

    return () => clearInterval(timer);
  }, [totalPages]);

  const nextTrendingPage = () => {
    if (trendingPage < totalPages - 1) setTrendingPage(trendingPage + 1);
  };

  const prevTrendingPage = () => {
    if (trendingPage > 0) setTrendingPage(trendingPage - 1);
  };

  // تنسيق التاريخ حسب اللغة
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const locale = i18n.language.startsWith("ar")
      ? "ar-EG"
      : i18n.language.startsWith("tr")
      ? "tr-TR"
      : "en-US";

    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div>
      {/* Blog Categories */}
      <div
        style={{
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



      {/* Trending News */}
      <div
        style={{
          borderRadius: "8px",
          backgroundColor: "white",
          overflow: "hidden",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h5
            className="fw-bold m-0"
            style={{ color: "#1e3a8a", fontSize: "20px" }}
          >
            {t("sidebar.trendingNews")}
            <div
              style={{
                width: "80px",
                height: "4px",
                backgroundColor: "#f97316",
                marginTop: "15px",
                borderRadius: "2px",
              }}
            ></div>
          </h5>
          <div className="d-flex gap-2">
            <button
              onClick={prevTrendingPage}
              style={{
                background: "transparent",
                border: "none",
                color: trendingPage === 0 ? "#d1d5db" : "#3b82f6",
                cursor: trendingPage === 0 ? "not-allowed" : "pointer",
                fontSize: "18px",
                fontWeight: "bold",
              }}
              disabled={trendingPage === 0}
            >
              ‹
            </button>
            <button
              onClick={nextTrendingPage}
              style={{
                background: "transparent",
                border: "none",
                color: trendingPage === totalPages - 1 ? "#d1d5db" : "#3b82f6",
                cursor:
                  trendingPage === totalPages - 1 ? "not-allowed" : "pointer",
                fontSize: "18px",
                fontWeight: "bold",
              }}
              disabled={trendingPage === totalPages - 1}
            >
              ›
            </button>
          </div>
        </div>

        <div style={{ padding: "15px 20px" }}>
          {trendingNews.map((post, index) => (
            <a
              key={post.id}
              href="#top"
              className="d-flex gap-3 text-decoration-none"
              style={{
                color: "#0f172a",
                marginBottom: index === trendingNews.length - 1 ? "0" : "10px",
              }}
            >
              <img
                src={post.image}
                alt={t(post.title)}
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "cover",
                  borderRadius: "6px",
                  flexShrink: 0,
                }}
              />
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "1.4",
                    marginBottom: "6px",
                    color: "#0f172a",
                  }}
                >
                  {t(post.title)}
                </p>
                <span style={{ fontSize: "12px", color: "#9ca3af" }}>
                  {formatDate(post.date)} &nbsp;•&nbsp; {post.readTime}
                </span>
              </div>
            </a>
          ))}
        </div>
        
      </div>

      {/* Popular Tags */}
      <div
        style={{
          borderRadius: "8px",
          backgroundColor: "white",
          overflow: "hidden",
          marginTop: "30px",
        }}
      >
        <div style={{ padding: "25px 25px 0 25px" }}>
          <h5
            className="fw-bold m-0"
            style={{ color: "#1e3a8a", fontSize: "28px" }}
          >
            {t("sidebar.popularTags")}
          </h5>
          <div
            style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#f97316",
              marginTop: "15px",
              borderRadius: "2px",
            }}
          ></div>
        </div>

        <div style={{ padding: "25px" }}>
          <div className="d-flex flex-wrap gap-2">
            {[
              "Games",
              "Electronics",
              "Video",
              "Cellphone",
              "Indoor",
              "VGA Card",
              "USB",
              "Lightning",
              "Camera",
              "Window",
              "Air Vent",
              "Bedroom",
              "Laptop",
              "Dashboard",
              "Keyboard",
            ].map((tag, index) => (
              <TagButton key={index} tag={t(`sidebar.tags.${tag.toLowerCase().replace(/\s+/g, "_")}`)} />
            ))}
          </div>
        </div>

        {/* Banner */}
        <div
          style={{
            marginTop: "30px",
            borderRadius: "12px",
            overflow: "hidden",
            position: "relative",
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "50px 20px 30px",
          }}
        >
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                backgroundColor: "#3b82f6",
                color: "white",
                padding: "6px 16px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              {t("sidebar.banner.no9")}
            </div>

            <h4
              style={{
                color: "#1e3a8a",
                fontSize: "22px",
                fontWeight: "800",
                lineHeight: "1.3",
                margin: 0,
                textAlign: "center",
              }}
            >
              {t("sidebar.banner.title1")}
              <br />
              {t("sidebar.banner.title2")}
            </h4>

            <p
              style={{
                color: "#475569",
                fontSize: "14px",
                margin: 0,
                textAlign: "center",
              }}
            >
              {t("sidebar.banner.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;