import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [showBlogMenu, setShowBlogMenu] = useState(false);
  const [showHomeMenu, setShowHomeMenu] = useState(false);   // ⬅️ جديد
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // دالة تبديل اللغة
  const toggleLanguage = () => {
    const currentLang = i18n.language.startsWith("ar")
      ? "ar"
      : i18n.language.startsWith("tr")
      ? "tr"
      : "en";

    const nextLang =
      currentLang === "en" ? "ar" : currentLang === "ar" ? "tr" : "en";

    i18n.changeLanguage(nextLang);
  };

  // صفحات المدونة
  const blogPages = [
    { path: "/", labelKey: "navbar.blogPages.noSidebar" },
    { path: "/blog-right-sidebar", labelKey: "navbar.blogPages.rightSidebar" },
    { path: "/blog-list", labelKey: "navbar.blogPages.list" },
    { path: "/blog-category-big", labelKey: "navbar.blogPages.categoryBig" },
    { path: "/blog-single-left", labelKey: "navbar.blogPages.singleLeft" },
    { path: "/blog-single-right", labelKey: "navbar.blogPages.singleRight" },
    { path: "/blog-single-no-sidebar", labelKey: "navbar.blogPages.singleNoSidebar" },
  ];

  // ⬇️ صفحات Home (جديد)
  const homePages = [
    { path: "/Home", label: "home5" },
    { path: "/Home1", label: "home6" },
    { path: "/Home8", label: "home8" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid #e5e7eb",
        padding: "15px 0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        className="container-fluid d-flex justify-content-between align-items-center"
        style={{ paddingLeft: "70px", paddingRight: "70px" }}
      >
        {/* الشعار */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontSize: "24px",
            fontWeight: "800",
            color: "#3b82f6",
          }}
        >
          Ecom
        </Link>

        {/* روابط التنقل */}
        <div className="d-flex align-items-center gap-4">
          {/* زر تبديل اللغة */}
          <button className="lang-switcher" onClick={toggleLanguage}>
            {i18n.language.startsWith("ar")
              ? "🇸🇾 AR"
              : i18n.language.startsWith("tr")
              ? "🇹🇷 TR"
              : "🇺🇸 EN"}
          </button>

          {/* ⬇️ قائمة Home المنسدلة (جديد) */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setShowHomeMenu(true)}
            onMouseLeave={() => setShowHomeMenu(false)}
          >
            <button
              style={{
                background: "transparent",
                border: "none",
                fontSize: "15px",
                fontWeight: "500",
                color: showHomeMenu ? "#3b82f6" : "#374151",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 0",
                transition: "color 0.3s ease",
              }}
            >
              Home
              <FaChevronDown
                style={{
                  fontSize: "10px",
                  transition: "transform 0.3s ease",
                  transform: showHomeMenu ? "rotate(180deg)" : "rotate(0)",
                }}
              />
            </button>

            {/* القائمة المنسدلة */}
            {showHomeMenu && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  marginTop: "1px",
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  minWidth: "200px",
                  padding: "8px 0",
                  zIndex: 1000,
                }}
              >
                {homePages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    style={{
                      display: "block",
                      padding: "12px 20px",
                      textDecoration: "none",
                      fontSize: "14px",
                      color: isActive(page.path) ? "#3b82f6" : "#374151",
                      fontWeight: isActive(page.path) ? "600" : "500",
                      transition: "background-color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#f3f4f6")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* قائمة Blog المنسدلة */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setShowBlogMenu(true)}
            onMouseLeave={() => setShowBlogMenu(false)}
          >
            <button
              style={{
                background: "transparent",
                border: "none",
                fontSize: "15px",
                fontWeight: "500",
                color: showBlogMenu ? "#3b82f6" : "#374151",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 0",
                transition: "color 0.3s ease",
              }}
            >
              {t("navbar.blog")}
              <FaChevronDown
                style={{
                  fontSize: "10px",
                  transition: "transform 0.3s ease",
                  transform: showBlogMenu ? "rotate(180deg)" : "rotate(0)",
                }}
              />
            </button>

            {showBlogMenu && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  marginTop: "1px",
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  minWidth: "250px",
                  padding: "8px 0",
                  zIndex: 1000,
                }}
              >
                {blogPages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    style={{
                      display: "block",
                      padding: "12px 20px",
                      textDecoration: "none",
                      fontSize: "14px",
                      color: isActive(page.path) ? "#3b82f6" : "#374151",
                      fontWeight: isActive(page.path) ? "600" : "500",
                      transition: "background-color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#f3f4f6")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    {t(page.labelKey)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Contact Us */}
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: isActive("/contact") ? "700" : "500",
              color: isActive("/contact") ? "#3b82f6" : "#374151",
              transition: "color 0.3s ease",
            }}
          >
            {t("navbar.contactUs")}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;