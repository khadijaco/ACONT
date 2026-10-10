import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomSelect from "../components/CustomSelect";
import BlogListItem from "../components/BlogListItem";
import { posts } from "../data/posts";
import { FaThLarge, FaList } from "react-icons/fa";
import ServesCards from "../components/ServesCards";

const BlogList = () => {
  const { t } = useTranslation();
  const [sortBy, setSortBy] = useState("latest");
  const [showItems, setShowItems] = useState("30");


  const sortOptions = [
    { value: "latest", label: t("blog.sortOptions.latest") },
    { value: "oldest", label: t("blog.sortOptions.oldest") },
    { value: "comments", label: t("blog.sortOptions.comments") },
  ];


  const showOptions = [
    { value: "8", label: "8" },
    { value: "30", label: t("blog.showOptions.items30") },
    { value: "50", label: t("blog.showOptions.items50") },
    { value: "100", label: t("blog.showOptions.items100") },
  ];

  // ⬇️⬇️⬇️ الفلترة ⬇️⬇️⬇️
  let displayedPosts = [...posts];

  if (sortBy === "latest") {
    displayedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortBy === "oldest") {
    displayedPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sortBy === "comments") {
    displayedPosts.sort((a, b) => (b.comments || 0) - (a.comments || 0));
  }

  displayedPosts = displayedPosts.slice(0, Number(showItems));
  // ⬆️⬆️⬆️ نهاية الفلترة ⬆️⬆️⬆️

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

      {/* المقالات */}
      <div className="row g-4">
        {displayedPosts.map((post) => (
          <BlogListItem key={post.id} post={post} />
        ))}
      </div>

 <div className="mt-4">
        <ServesCards />
      </div>
    
    </div>
  );
};

export default BlogList;