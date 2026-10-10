import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaThLarge, FaList } from "react-icons/fa";
import CustomSelect from "../components/CustomSelect";
import { posts } from "../data/posts";
import Sidebar from "../components/Sidebar";
import ServesCards from "../components/ServesCards";

const BlogRightSidebar = () => {
  const { t, i18n } = useTranslation();
  const [sortBy, setSortBy] = useState("latest");
  const [showItems, setShowItems] = useState("12");
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

  // خيارات الترتيب
  const sortOptions = [
    { value: "latest", label: t("blog.sortOptions.latest") },
    { value: "oldest", label: t("blog.sortOptions.oldest") },
    { value: "comments", label: t("blog.sortOptions.comments") },
  ];

  // خيارات العرض
  const showOptions = [
   
    { value: "12", label: "12" },
    { value: "30", label: t("blog.showOptions.items30") },
    { value: "50", label: t("blog.showOptions.items50") },
    { value: "100", label: t("blog.showOptions.items100") },
  ];




    // ⬇️ الفلترة ⬇️
    let displayedPosts = [...posts];
  
    if (sortBy === "latest") {
      displayedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === "oldest") {
      displayedPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === "comments") {
      displayedPosts.sort((a, b) => (b.comments || 0) - (a.comments || 0));
    }
  
    displayedPosts = displayedPosts.slice(0, Number(showItems));
  
  return (
  <div
      className="container-fluid"
      style={{ padding: "clamp(15px, 4vw, 40px) clamp(15px, 5vw, 70px)" }}
    >        {/* الشريط العلوي */}
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
              end: displayedPosts.length,
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

      <div className="row g-4">
        <div className="col-lg-9">
          {/* المقال الرئيسي */}
          <div
            className="row g-0"
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "white",
            }}
          >
            <div className="col-md-5">
              <img
                src={posts[24].image}
                alt={t(posts[24].title)}
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            <div className="col-md-7 p-4 d-flex flex-column">
              <div className="mb-3">
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    backgroundColor: "#e8f0f8",
                    padding: "6px 14px",
                    borderRadius: "4px",
                    fontSize: "10px",
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
                  {t(posts[24].category)}
                </a>
              </div>

              <Link
                to="/blog-single-left"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="blog-title-link"
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "1.4",
                  textDecoration: "none",
                  marginBottom: "12px",
                  display: "block",
                }}
              >
                {t(posts[24].title)}
              </Link>

              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "1.9",
                  color: "#77849d",
                  marginBottom: "24px",
                  flexGrow: 1,
                }}
              >
                {t("blog.excerpt")}
              </p>

              <div className="d-flex justify-content-between align-items-center mt-auto">
                <div
                  className="d-flex gap-4"
                  style={{ fontSize: "14px", color: "#6b7280" }}
                >
                  <span>{formatDate(posts[24].date)}</span>
                  <span>
                    {posts[24].readTime} {t("blog.minRead")}
                  </span>
                </div>
                <Link
                  to="/blog-single-left"
                  className="hover-effecttransition"
                  style={{
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  {t("blog.readMore")} <FaArrowRight style={{ fontSize: "14px" }} />
                </Link>
              </div>
            </div>
          </div>

          {/* شبكة المقالات */}
          <div className="row g-4 mt-4">
         {displayedPosts.map((post) => (                  
              <div className="col-md-4" key={post.id}>
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ overflow: "hidden", borderRadius: "8px" }}>
                    <img
                      src={post.image}
                      alt={t(post.title)}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </div>

                  <div className="mt-3 mb-2">
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        backgroundColor: "#e8f0f8",
                        padding: "4px 12px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        color: "#374151",
                        fontWeight: "500",
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
                  </div>

                  <Link
                    to="/blog-single-left"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="blog-title-link"
                    style={{
                      display: "block",
                      fontSize: "18px",
                      fontWeight: "700",
                      lineHeight: "1.5",
                      textDecoration: "none",
                      marginBottom: "10px",
                    }}
                  >
                    {t(post.title)}
                  </Link>

                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "#6b7280",
                      marginBottom: "15px",
                    }}
                  >
                    {t("blog.excerptShort")}
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <div style={{ fontSize: "12px", color: "#9ca3af" }}>
                      {formatDate(post.date)} &nbsp;•&nbsp; {post.readTime} {t("blog.minRead")}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      style={{
                        backgroundColor: "#f3f4f6",
                        color: "#374151",
                        padding: "5px 12px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "600",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#f19408";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#f3f4f6";
                        e.currentTarget.style.color = "#514437";
                      }}
                    >
                      {t("blog.readMore")}
                    </Link>
                  </div>
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
                  href="#"
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
          </div>



          
        </div>

        <div className="col-lg-3">
          <Sidebar />
        </div>
      </div>
       <div className="mt-4">
        <ServesCards />
      </div>
    
    </div>
  );
};

export default BlogRightSidebar;