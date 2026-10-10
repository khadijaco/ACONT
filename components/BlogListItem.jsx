import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const BlogListItem = ({ post }) => {
  const { t, i18n } = useTranslation();

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
    <div
      className="d-flex flex-md-row flex-column mb-4 rounded overflow-hidden"
      style={{
        border: "1px solid #e5e7eb",
        backgroundColor: "white",
        maxWidth: "1100px",
        margin: "0 auto 15px auto",
        minHeight: "220px",
      }}
    >
      <div
        className="col-md-5"
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "5px",
        }}
      >
        <img
          src={post.image}
          alt={post.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>

      <div className="col-md-7 p-4 d-flex flex-column">
        <div className="d-flex align-items-center  mb-2">
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
              border: "1px solid #cfdcf5",
              borderRadius: "8px",
              padding: "1px 6px",
            }}
          >
            {t(post.category)}
          </span>
        </div>

        <Link
          to="/blog-single-left"
          style={{
            fontSize: "18px",
            fontWeight: "700",
            lineHeight: "1.3",
            color: "#0f172a",
            textDecoration: "none",
            marginBottom: "8px",
            display: "block",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#3b82f6")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#0f172a")}
        >
          {t(post.title)}
        </Link>

        <p
          style={{
            fontSize: "13px",
            lineHeight: "1.5",
            color: "#97a4be",
            marginBottom: "10px",
            flexGrow: 1,
            overflow: "hidden",

            WebkitBoxOrient: "vertical",
          }}
        >
          {t("blog.excerpt")}{" "}
        </p>

        <div className="d-flex justify-content-between align-items-center mt-auto">
          <div
            className="d-flex gap-3"
            style={{ fontSize: "12px", color: "#9ca3af" }}
          >
            <span>{formatDate(post.date)}</span>
            <span>
              {" "}
              {post.readTime} {t("blog.minRead")}
            </span>
          </div>

          <Link
            style={{
              textDecoration: "none",
              color: "#3b82f6",
              fontSize: "13px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "gap 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#f97316";
              e.currentTarget.style.gap = "10px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#3b82f6";
              e.currentTarget.style.gap = "6px";
            }}
          >
            {" "}
            {t("blog.readMore")}
            <FaArrowRight style={{ fontSize: "11px" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogListItem;
