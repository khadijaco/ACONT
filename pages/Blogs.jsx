import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BlogCard from "../components/BlogCard";
import CustomSelect from "../components/CustomSelect";
import { posts } from "../data/posts";
import { FaThLarge, FaList } from "react-icons/fa";
import { SiApple } from "react-icons/si";
import ServesCards from "../components/ServesCards";

const Blogs = () => {
  const { t } = useTranslation();
  const [sortBy, setSortBy] = useState("latest");
  const [showItems, setShowItems] = useState("30");
  const [currentPage, setCurrentPage] = useState(2);

  // خيارات الترتيب
  const sortOptions = [
    { value: "latest", label: t("blog.sortOptions.latest") },
    { value: "oldest", label: t("blog.sortOptions.oldest") },
    { value: "comments", label: t("blog.sortOptions.comments") },
  ];

  // خيارات العرض
  const showOptions = [
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
    >
      {/* الشريط العلوي */}
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

      {/* عرض المقالات مع  */}
      <div className="row g-4">
        {displayedPosts.map((post, index) => (
          <React.Fragment key={post.id}>
          
            <div className="col-md-3 col-sm-6">
              <BlogCard post={post} />
            </div>

            {/* بانر  بعد المقال 8 بضيف بنر ايفون */}
            {index === 7 && (
              <div className="col-12">
                <div
                  className="my-4 rounded"
                  style={{
                    border: "1px solid #e5e7eb",
                    backgroundColor: "#f9fafb",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "7px",
                    padding: "13px",
                    borderRadius: "12px",
                  }}
                >
                  <img
                    src="https://i.pinimg.com/1200x/54/57/af/5457afaa94ffb1be4f01238e6deb824f.jpg"
                    alt="iPhone Left" 
                    style={{
                      width: "90px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      flexShrink: 0,
                    }}
                  />

                  <div className="text-center" style={{ flex: 1 }}>
                    <h3
                      className="fw-bold d-flex align-items-center justify-content-center"
                      style={{
                        fontSize: "14px",
                        color: "#0f172a",
                        letterSpacing: "-0.5px",
                        gap: "4px",
                        marginBottom: "6px",
                      }}
                    >
                      <SiApple style={{ fontSize: "14px", color: "#000000" }} />
                      {t("blog.bannerIphone.title")}
                    </h3>
                    <p
                      className="mb-1"
                      style={{
                        fontSize: "10px",
                        color: "#374151",
                        fontWeight: "500",
                      }}
                    >
                      {t("blog.bannerIphone.subtitle")}
                    </p>
                    <p
                      className="mb-0"
                      style={{
                        fontSize: "9px",
                        color: "#9ca3af",
                        fontWeight: "500",
                      }}
                    >
                      {t("blog.bannerIphone.models")}
                    </p>
                  </div>

                  <img
                    src="https://i.pinimg.com/736x/38/31/aa/3831aa9f46cae90df72d3937e33e8ff5.jpg"
                    alt="iPhone Right"
                    style={{
                      width: "90px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      flexShrink: 0,
                    }}
                  />
                </div>
              </div>
            )}

        {/* بعد مقالي 20 بنضيف  بانر */}
            {index === 19 && (
              <div className="col-12">
                <div
                  className="my-4 rounded"
                  style={{
                    background:
                      "linear-gradient(135deg, #c0dbf7 0%, #a8cdf0 100%)",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "7px",
                    padding: "13px",
                    borderRadius: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "90px",
                      height: "80px",
                      backgroundColor: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      borderRadius: "8px",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src="https://i.pinimg.com/736x/8b/8f/43/8b8f4344f9fad9845ebb70105a073601.jpg"
                      alt="Note 9 Left"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        mixBlendMode: "multiply",
                      }}
                    />
                  </div>

                  <div className="text-center" style={{ flex: 1 }}>
                    <h3
                      className="fw-bold d-flex align-items-center justify-content-center"
                      style={{
                        fontSize: "14px",
                        color: "#0f172a",
                        letterSpacing: "-1px",
                        gap: "2px",
                        marginBottom: "6px",
                      }}
                    >
                      {t("blog.bannerNote.title")}
                      <span
                        style={{
                          color: "#e63946",
                          fontSize: "14px",
                          fontWeight: "900",
                          lineHeight: "1",
                        }}
                      >
                        9
                      </span>
                      <span
                        style={{
                          fontSize: "7px",
                          backgroundColor: "#1e293b",
                          color: "white",
                          padding: "2px 4px",
                          borderRadius: "3px",
                          marginLeft: "4px",
                          fontWeight: "700",
                        }}
                      >
                        4G
                      </span>
                    </h3>

                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ gap: "8px" }}
                    >
                      <div
                        style={{
                          textAlign: "left",
                          color: "#1e3a8a",
                          fontSize: "8px",
                          fontWeight: "600",
                        }}
                      >
                        <p className="mb-1">
                          {t("blog.bannerNote.spec1")}
                        </p>
                        <p className="mb-0">
                          {t("blog.bannerNote.spec2")}
                        </p>
                      </div>

                      <div
                        style={{
                          borderLeft: "2px solid #1e3a8a",
                          height: "20px",
                          opacity: 0.5,
                        }}
                      ></div>

                      <div
                        style={{
                          textAlign: "left",
                          color: "#1e3a8a",
                          fontSize: "8px",
                          fontWeight: "600",
                        }}
                      >
                        <p className="mb-1">
                          {t("blog.bannerNote.spec3")}
                        </p>
                        <p className="mb-0">
                          {t("blog.bannerNote.spec4")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      width: "90px",
                      height: "80px",
                      backgroundColor: "#b0d3f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      borderRadius: "8px",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src="https://i.pinimg.com/1200x/89/05/0b/89050b06d39de18f8c7b91e143ef22a9.jpg"
                      alt="Note 9 Right"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        mixBlendMode: "multiply",
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

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

export default Blogs;