import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaThLarge, FaList } from "react-icons/fa";
import { posts } from "../data/posts";
import CustomSelect from "../components/CustomSelect";
import ServesCards from "../components/ServesCards";

const BlogCategoryBig = () => {
  const { t, i18n } = useTranslation();
  const [sortBy, setSortBy] = useState("latest");
  const [showItems, setShowItems] = useState("30");
  const [currentPage, setCurrentPage] = useState(2);

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

 
  const sortOptions = [
    { value: "latest", label: t("blog.sortOptions.latest") },
    { value: "oldest", label: t("blog.sortOptions.oldest") },
    { value: "comments", label: t("blog.sortOptions.comments") },
  ];

 
  const showOptions = [
    { value: "30", label: t("blog.showOptions.items30") },
    { value: "50", label: t("blog.showOptions.items50") },
    { value: "100", label: t("blog.showOptions.items100") },
  ];

  return (
    <div
      className="container-fluid"
      style={{ padding: "clamp(15px, 4vw, 40px) clamp(15px, 5vw, 70px)" }}
    >  
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center mb-4 pb-3 border-bottom">
        <h4 className="fw-bold m-0" style={{ color: "#6a748d" }}>
          {t("blog.blogs")}
        </h4>

        <div
          className="d-flex flex-wrap align-items-center"
          style={{ fontSize: "14px", color: "#1e3a8a", gap: "20px" }}
        >
          <span style={{ color: "#545d77", fontWeight: "500" }}>
            {t("blog.showingResults", {
              start: 1,
              end: posts.length,
              total: posts.length,
            })}
          </span>

          <span style={{ color: "#d1d5db" }}>|</span>

          <CustomSelect
            label={t("blog.sortBy")}
            options={sortOptions.map((o) => o.label)}
            value={sortOptions.find((o) => o.value === sortBy)?.label}
            onChange={(label) => {
              const found = sortOptions.find((o) => o.label === label);
              setSortBy(found?.value);
            }}
          />

          <span style={{ color: "#d1d5db" }}>|</span>

          <CustomSelect
            label={t("blog.show")}
            options={showOptions.map((o) => o.label)}
            value={showOptions.find((o) => o.value === showItems)?.label}
            onChange={(label) => {
              const found = showOptions.find((o) => o.label === label);
              setShowItems(found?.value);
            }}
          />

          <span style={{ color: "#d1d5db" }}>|</span>

          <div className="d-flex gap-2">
            <a
              href="./"
              className="btn btn-sm d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#ebeef4",
                color: "#e0a26b",
                border: "none",
                width: "30px",
                height: "30px",
                borderRadius: "6px",
              }}
            >
              <FaThLarge />
            </a>
            <a
              href="/blog-list"
              className="btn btn-sm d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#f3f4f6",
                color: "#6b7280",
                border: "none",
                width: "30px",
                height: "30px",
                borderRadius: "6px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f6f3f1";
                e.currentTarget.style.color = "#f97c16";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f6f3f1";
                e.currentTarget.style.color = "#909aac";
              }}
            >
              <FaList />
            </a>
          </div>
        </div>
      </div>

      {/* المقالات */}
      {posts.slice(25, 30).map((post, index) => (
        <div
          key={post.id}
          style={{
            marginBottom:
              index === posts.slice(25, 30).length - 1 ? "0" : "60px",
          }}
        >
          <Link to="/blog-single-left">
            <img
              src={post.image}
              alt={t(post.title)}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "450px",
                objectFit: "cover",
                borderRadius: "8px",
                display: "block",
                marginBottom: "20px",
              }}
            />
          </Link>

          {/* التصنيف */}
          <div className="d-flex align-items-center mb-3">
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#e8f0f8",
                padding: "5px 12px",
                borderRadius: "4px",
                fontSize: "13px",
                color: "#374151",
                fontWeight: "500",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#3b82f6",
                  borderRadius: "50%",
                }}
              ></span>
              {t(post.category)}
            </span>
          </div>

          {/* العنوان */}
          <Link
            to="/blog-single-left"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              padding: "20px 10px 40px 30px",
              fontSize: "30px",
              fontWeight: "800",
              lineHeight: "1.3",
              color: "#0f172a",
              textDecoration: "none",
              display: "block",
              marginBottom: "15px",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#3b82f6")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#0f172a")}
          >
            {t(post.title)}
          </Link>

          {/* الوصف */}
          <p
            style={{
              letterSpacing: "1px",
              lineHeight: "1.5",
              padding: "20px 10px 40px 30px",
              fontSize: "14px",
              color: "#6b7280",
              marginBottom: "15px",
            }}
          >
            {t("blog.excerpt")}
          </p>

          {/* الأسفل */}
          <div className="d-flex justify-content-between align-items-center">
            <div
              className="d-flex gap-4"
              style={{ fontSize: "13px", color: "#9ca3af" }}
            >
              <span>{formatDate(post.date)}</span>
              <span>
                {post.readTime} {t("blog.minRead")}
              </span>
            </div>
            <Link
              to="/blog-single-left"
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
              {t("blog.readMore")} <FaArrowRight style={{ fontSize: "11px" }} />
            </Link>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="d-flex justify-content-center align-items-center gap-2 mt-5">
        <a href="./" className="pagination-btnn">
          ‹
        </a>

        {[1, 2, 3, 4, 5, 6].map((page) => (
          <a
            href="./"
            key={page}
            className={`btn btn-sm pagination-btn ${
              currentPage === page ? "active-page" : ""
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </a>
        ))}

        <a href="./" className="pagination-btnn">
          ›
        </a>
      </div>
       <div className="mt-4">
        <ServesCards />
      </div>
     
    </div>
  );
};

export default BlogCategoryBig;