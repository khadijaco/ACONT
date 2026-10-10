import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const LatestNews = ({ posts = [] }) => {
  const { t } = useTranslation();
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // ⬇️ فلترة بـ id
  const filteredPosts = posts.filter((p) => p.id >= 105 && p.id <= 108);
  const total = filteredPosts.length;

  const handlePrev = () => {
    setOffset((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setOffset((prev) => (prev + 1) % total);
  };

  const visiblePosts = [...filteredPosts, ...filteredPosts].slice(
    offset,
    offset + total
  );

  const handleDragStart = (clientX) => {
    touchStartX.current = clientX;
    setIsDragging(true);
  };

  const handleDragEnd = (clientX) => {
    touchEndX.current = clientX;
    setIsDragging(false);
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 60) {
      handleNext();
    } else if (diff < -60) {
      handlePrev();
    }
  };

  return (
    <section
      style={{
        padding: "40px clamp(15px, 5vw, 70px)",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          borderBottom: "1px solid #e5e7eb",
          paddingBottom: "20px",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        <div>
          <h2
            className="fw-bold mb-1"
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              color: "#5d71a8",
            }}
          >
            {t("latestNews.title")}
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "#8d9fc6",
              margin: 0,
            }}
          >
            {t("latestNews.subtitle")}
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={handlePrev}
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
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#2e447b";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#6b7280";
            }}
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={handleNext}
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
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#4f669e";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#6b7280";
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div
        className="row g-4"
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseUp={(e) => handleDragEnd(e.clientX)}
        onDragStart={(e) => e.preventDefault()}
        style={{
          cursor: "grab",
          userSelect: "none",
          touchAction: "pan-y",
        }}
      >
        {visiblePosts.map((post) => (
          <div
            className="col-12 col-md-6 col-lg-3"
            key={post.id + "-" + offset}
          >
            <div style={{ cursor: "pointer" }}>
              <div
                style={{
                  overflow: "hidden",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>

              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "#e8f0f8",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  color: "#374151",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    backgroundColor: "#3b82f6",
                    borderRadius: "50%",
                  }}
                ></span>
                {t(post.category)}
              </span>

              <Link
                className="blog-title-link"
                to="/blog-single-left"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                style={{
                  display: "block",
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "1.5",
                  marginBottom: "12px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#3b82f6")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#0f172a")}
              >
                {t(post.title)}
              </Link>

              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  fontSize: "12px",
                  color: "#9ca3af",
                }}
              >
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;