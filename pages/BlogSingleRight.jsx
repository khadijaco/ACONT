import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";
import { posts } from "../data/posts";
import ServesCards from "../components/ServesCards";

import { FaCalendarAlt, FaClock } from "react-icons/fa";
import {
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const BlogSingleRight = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(2);

  const post = posts.find((p) => p.id === parseInt(id || 1)) || posts[0];


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
      className="container-fluid"
      style={{ padding: "clamp(15px, 4vw, 40px) clamp(15px, 5vw, 70px)" }}
    >        
      <div className="mb-4" style={{ fontSize: "14px", color: "#6b7280" }}>
        <Link to="/" style={{ color: "#6b7280", textDecoration: "none" }}>
          {t("blogSingle.home")}
        </Link>
        <span className="mx-2">›</span>
        <span style={{ color: "#1e3a8a" }}>{t("blogSingle.blog")}</span>
      </div>

      <div className="row g-5">
      
        <div className="col-lg-9">
         
          <div className="d-flex align-items-center mb-3">
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#e8f0f8",
                padding: "6px 14px",
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

         
          <h1
            className="fw-bold mb-4"
            style={{ fontSize: "38px", color: "#1e3a8a", lineHeight: "1.3" }}
          >
            {t(post.title)}
          </h1>

        
          <div
            className="d-flex flex-wrap gap-4 mb-4 pb-4 border-bottom"
            style={{ color: "#6b7280", fontSize: "14px" }}
          >
            <div className="d-flex align-items-center gap-2">
              <img
                src="https://i.pinimg.com/736x/e5/04/78/e504782a8f7eb04b3cfa15cddce5a20f.jpg"
                alt="Author"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <span style={{ color: "#1e3a8a", fontWeight: "600" }}>
                {t("blogSingle.by")} Sugar Rosie
              </span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <FaCalendarAlt />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <FaClock />
              <span>{post.readTime} {t("blog.minRead")}</span>
            </div>
          </div>

        
          <img
            src="https://i.pinimg.com/736x/52/d7/e4/52d7e4be2a7e7d7f3ca812264551273e.jpg"
            alt={t(post.title)}
            className="img-fluid rounded mb-4"
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
          />

       
          <div
            style={{
              fontSize: "17px",
              lineHeight: "1.5",
              color: "#1b1c1d",
              fontWeight: "400",
            }}
          >
            <p className="mb-4">{t("blogSingle.content.c1")}</p>
            <p className="mb-4">{t("blogSingle.content.c3")}</p>
            <p className="mb-4">{t("blogSingle.content.c4")}</p>
            <p className="mb-4">{t("blogSingle.content.c5")}</p>

            <h2
              className="mb-4"
              style={{ fontSize: "30px", color: "#3d538e", fontWeight: "700" }}
            >
              {t("blogSingle.content.h2")}
            </h2>

            <p className="mb-4">{t("blogSingle.content.p5")}</p>
            <p className="mb-4">{t("blogSingle.content.p6")}</p>

            <div style={{ margin: "10px 0" }}>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="Article content"
                style={{
                  width: "100%",
                  height: "450px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  display: "block",
                }}
              />
            </div>

            <p className="mb-4">{t("blogSingle.content.p5")}</p>
            <p className="mb-4">{t("blogSingle.content.p6")}</p>
            <p className="mb-4">{t("blogSingle.content.p2")}</p>
            <p className="mb-4">{t("blogSingle.content.p3")}</p>
            <p className="mb-4">{t("blogSingle.content.p4")}</p>
          </div>

    
          <div
            className="d-flex justify-content-between align-items-center py-3 my-5"
            style={{
              borderTop: "5px solid #96a2bc",
              borderBottom: "5px solid #96a2bc",
            }}
          >
            <div className="d-flex gap-2">
              {["technology", "devices", "ai"].map((tag, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    padding: "8px 18px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "6px",
                    color: "#374151",
                    fontSize: "14px",
                    fontWeight: "500",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#495e99";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "#4c5b84";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#374151";
                    e.currentTarget.style.borderColor = "#cbd5e1";
                  }}
                >
                  {t(`blog.categories.${tag}`)}
                </a>
              ))}
            </div>

            <div className="d-flex align-items-center gap-3">
              <span
                style={{
                  color: "#1e3a8a",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                {t("blogSingle.share")}
              </span>
              <div
                className="d-flex gap-3"
                style={{ fontSize: "18px", color: "#1e3a8a" }}
              >
                <a href="#" style={{ color: "#1e3a8a" }}>
                  <FaFacebookF />
                </a>
                <a href="#" style={{ color: "#1e3a8a" }}>
                  <FaPinterestP />
                </a>
                <a href="#" style={{ color: "#1e3a8a" }}>
                  <FaTwitter />
                </a>
                <a href="#" style={{ color: "#1e3a8a" }}>
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

        
          <div
            className="d-flex gap-4 align-items-start my-5 p-4"
            style={{ backgroundColor: "#f9fafb", borderRadius: "12px" }}
          >
            <img
              src="https://i.pinimg.com/736x/e5/04/78/e504782a8f7eb04b3cfa15cddce5a20f.jpg"
              alt="Author"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
            <div>
              <h5
                className="fw-bold mb-2"
                style={{ color: "#5a6da1", fontSize: "18px" }}
              >
                Sugar Rosie
              </h5>
              <p
                style={{
                  fontSize: "14px",
                  color: "#3b82f6",
                  marginBottom: "12px",
                }}
              >
                {t("blogSingle.postsCount", { count: 306 })} &nbsp; • &nbsp; {t("blogSingle.since", { year: 2012 })}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  lineHeight: "1.7",
                  marginBottom: "0",
                }}
              >
                {t("blogSingle.authorBio")}
              </p>
            </div>
          </div>

          <div
            style={{ borderTop: "5px solid #96a2bc", marginBottom: "50px" }}
          ></div>

  
          <div>
            <h3
              className="fw-bold mb-4"
              style={{ color: "#5a6da1", fontSize: "22px" }}
            >
              {t("blogSingle.leaveComment")}
            </h3>

            <textarea
              placeholder={t("blogSingle.writeComment")}
              className="form-control mb-3"
              rows={5}
              style={{
                fontSize: "14px",
                padding: "15px",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
              }}
            ></textarea>

            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder={t("blogSingle.name")}
                  className="form-control"
                  style={{
                    fontSize: "14px",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  placeholder={t("blogSingle.email")}
                  className="form-control"
                  style={{
                    fontSize: "14px",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>
            </div>

            <button
              style={{
                backgroundColor: "#1e3a8a",
                color: "white",
                border: "1px solid #3e4b58",
                padding: "12px 30px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f6f3f1";
                e.currentTarget.style.color = "#1e3a8a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#1e3a8a";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              {t("blogSingle.postComment")}
            </button>

            <h3
              className="fw-bold mt-5 mb-3"
              style={{ color: "#5a6da1", fontSize: "22px" }}
            >
              {t("blogSingle.comments")}
            </h3>
          </div>

          {/* التعليقات */}
          {[1, 2, 3].map((comment) => (
            <div
              key={comment}
              className="d-flex gap-4 align-items-start my-5 p-4"
              style={{ backgroundColor: "#f9fafb", borderRadius: "12px" }}
            >
              <img
                src="https://i.pinimg.com/736x/e5/04/78/e504782a8f7eb04b3cfa15cddce5a20f.jpg"
                alt="Author"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <div>
                <h5
                  className="fw-bold mb-2"
                  style={{ color: "#5a6da1", fontSize: "18px" }}
                >
                  Siena Kim
                </h5>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#3b82f6",
                    marginBottom: "12px",
                  }}
                >
                  {t("blogSingle.postsCount", { count: 306 })} &nbsp; • &nbsp; {t("blogSingle.since", { year: 2012 })}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    lineHeight: "1.7",
                    marginBottom: "0",
                  }}
                >
                    {t("blogSingle.authorBio")}
                </p>
              </div>
            </div>
          ))}

          {/* الترقيم */}
          <div className="d-flex justify-content-end align-items-center gap-2 mt-5">
            <a
              href="./"
              className="pagination-btnn"
              style={{
                width: "32px",
                height: "32px",
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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
                style={{
                  width: "32px",
                  height: "32px",
                  fontSize: "13px",
                  padding: "0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {page}
              </a>
            ))}

            <a
              href="./"
              className="pagination-btnn"
              style={{
                width: "32px",
                height: "32px",
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ›
            </a>
          </div>
        </div>

        {/* Sidebar + الإعلان */}
        <div className="col-lg-3">
          {/* الإعلان */}
          <div
            style={{
              backgroundColor: "#e3f2f7",
              borderRadius: "12px",
              padding: "40px 25px",
              textAlign: "center",
              marginBottom: "30px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#3bb8d4",
                color: "white",
                padding: "10px 28px",
                borderRadius: "30px",
                fontSize: "10px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              {t("blogSingle.bigDeal.badge")}
            </div>

            <h2
              style={{
                color: "#1e3a8a",
                fontSize: "30px",
                fontWeight: "800",
                marginBottom: "15px",
                letterSpacing: "-1px",
              }}
            >
              {t("blogSingle.bigDeal.title")}
            </h2>

            <p
              style={{
                color: "#1e3a8a",
                fontSize: "15px",
                fontWeight: "400",
                marginBottom: "25px",
                lineHeight: "1.5",
              }}
            >
              {t("blogSingle.bigDeal.subtitle")}
            </p>

            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#e3f2f7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src="https://i.pinimg.com/236x/ea/ba/e1/eabae187207b09bea0dcb761fbf37e9d.jpg"
                alt="Note 9 Left"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  mixBlendMode: "multiply",
                }}
              />
            </div>
          </div>

          <Sidebar />
        </div>

        <div className="mt-5 pt-5 mb-5">
          <h3
            className="fw-bold mb-4"
            style={{ fontSize: "32px", color: "#3d538e" }}
          >
            {t("blogSingle.relatedBlogs")}
          </h3>

          <div className="row g-4">
            {posts.slice(0, 4).map((relatedPost) => (
              <div className="col-lg-3 col-md-6" key={relatedPost.id}>
                <Link
                  to="/blog-single-left"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    style={{
                      overflow: "hidden",
                      borderRadius: "8px",
                      marginBottom: "15px",
                    }}
                  >
                    <img
                      src={relatedPost.image}
                      alt={t(relatedPost.title)}
                      style={{
                        width: "100%",
                        height: "180px",
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

                  <div className="d-flex align-items-center mb-2">
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
                      {t(relatedPost.category)}
                    </span>
                  </div>

                  <h5
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      color: "#0f172a",
                      lineHeight: "1.4",
                      marginBottom: "10px",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#3b82f6")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#0f172a")
                    }
                  >
                    {t(relatedPost.title)}
                  </h5>

                  <div
                    className="d-flex gap-3"
                    style={{ fontSize: "12px", color: "#9ca3af" }}
                  >
                    <span>{formatDate(relatedPost.date)}</span>
                    <span>{relatedPost.readTime} {t("blog.minRead")}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

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
        </div>
      </div>
       <div className="mt-4">
        <ServesCards />
      </div>

      
    </div>
  );
};

export default BlogSingleRight;