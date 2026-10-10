import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BlogCard = ({ post }) => {
  const { t, i18n } = useTranslation();

  // تنسيق التاريخ حسب اللغة الحالية
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
    <div style={{ cursor: "pointer" }}>
      <div style={{ overflow: "hidden", borderRadius: "8px" }}>
        <img
          src={post.image}
          alt={t(post.title)}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      <div className="d-flex align-items-center mt-3 mb-2">
        <span
          style={{
            display: "inline-block",
            width: "8px",
            height: "8px",
            backgroundColor: "#3b82f6",
            borderRadius: "50%",
            marginRight: "8px",
          }}
        ></span>
        <span
          style={{
            fontSize: "13px",
            color: "#6b7280",
            fontWeight: "500",
            background: "#cfdcf5",
            borderRadius: "8px",
            padding: "2px 8px",
          }}
        >
          {t(post.category)}
        </span>
      </div>

      <Link


        to="/blog-single-left"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}

        className="blog-title-link"
        style={{
          display: "block",
          fontSize: "18px",
          fontWeight: "700",
          lineHeight: "1.5",
          marginBottom: "12px",
        }}
      >
        {t(post.title)}
      </Link>

      <div
        className="d-flex gap-4"
        style={{ fontSize: "13px", color: "#9ca3af" }}
      >
        <span>{formatDate(post.date)}</span>
        <span>
          {post.readTime} {t("blog.minRead")}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;