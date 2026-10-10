import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const WeeklySelectionn = ({ products = [] }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // ⬇️ itemsPerPage ديناميكي
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 992) {
        setItemsPerPage(1);   // تلفون/تابلت: 1
      } else {
        setItemsPerPage(2);   // كمبيوتر: 2
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  if (products.length === 0) {
    return null;
  }

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const visibleProducts = products.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section
      style={{
        position: "relative",
        padding: "60px clamp(15px, 5vw, 70px)",
        backgroundColor: "#fdf6e3",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2
          className="fw-bold mb-2"
          style={{
            fontSize: "clamp(24px, 3vw, 32px)",
            color: "#1e3a8a",
          }}
        >
          {t("weeklySelectionn.title")}
        </h2>
        <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
          {t("weeklySelectionn.subtitle")}
        </p>
      </div>

      {/* السهم الأيسر */}
      <button
        onClick={handlePrev}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "white",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#1e3a8a",
          zIndex: 5,
        }}
      >
        <FaChevronLeft />
      </button>

      {/* السهم الأيمن */}
      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "white",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#1e3a8a",
          zIndex: 5,
        }}
      >
        <FaChevronRight />
      </button>

      {/* الكاردات */}
      <div className="row g-4 justify-content-center">
        {visibleProducts.map((product, i) => (
          <div className="col-12 col-lg-6" key={i}>
            <div
              className="d-flex flex-column flex-md-row"
              style={{
                position: "relative",
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "20px",
                minHeight: "320px",
                overflow: "hidden",
                transition: "all 0.3s ease",
                cursor: "pointer",
                gap: "15px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.1)";
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.borderColor = "#1e3a8a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#e5e7eb";
              }}
            >
              {/* شارة TOP DEALS */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#1e3a8a",
                  clipPath: "polygon(0 0, 100% 0, 0 100%)",
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "15px",
                    left: "10px",
                    color: "white",
                    fontSize: "10px",
                    fontWeight: "700",
                    lineHeight: "1.2",
                    letterSpacing: "0.5px",
                  }}
                >
                  TOP
                  <br />
                  DEALS
                </span>
              </div>

              {/* الصورة */}
              <div
                style={{
                  width: "100%",
                  maxWidth: "250px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              >
                <img
                  src={product.image}
                  alt={t(product.titleKey)}
                  style={{
                    width: "100%",
                    maxHeight: "200px",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* المحتوى */}
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "4px" }}>
                  {t(product.brandKey)}
                </p>

                <h5
                  className="fw-bold mb-2"
                  style={{ fontSize: "16px", color: "#1e3a8a", lineHeight: "1.3" }}
                >
                  {t(product.titleKey)}
                </h5>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    marginBottom: "8px",
                    fontSize: "12px",
                  }}
                >
                  <FaStar style={{ color: "#f59e0b", fontSize: "12px" }} />
                  <FaStar style={{ color: "#f59e0b", fontSize: "12px" }} />
                  <FaStar style={{ color: "#f59e0b", fontSize: "12px" }} />
                  <FaStar style={{ color: "#f59e0b", fontSize: "12px" }} />
                  <FaStar style={{ color: "#f59e0b", fontSize: "12px" }} />
                  <span style={{ color: "#9ca3af" }}>({product.reviews})</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ fontSize: "20px", fontWeight: "700", color: "#1e3a8a" }}>
                    ${product.price}
                  </span>
                  {product.oldPrice && (
                    <span style={{ fontSize: "13px", color: "#9ca3af", textDecoration: "line-through" }}>
                      ${product.oldPrice}
                    </span>
                  )}
                </div>

                {/* Progress */}
                <div style={{ marginBottom: "12px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "11px",
                      color: "#6b7280",
                      marginBottom: "6px",
                    }}
                  >
                    <span>
                      {t("weeklySelectionn.available")}: <strong>{product.available || 568}</strong>
                    </span>
                    <span>
                      {t("weeklySelectionn.sold")}: <strong>{product.sold || 289}</strong>
                    </span>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "6px",
                      backgroundColor: "#e5e7eb",
                      borderRadius: "3px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${((product.sold || 289) / ((product.available || 568) + (product.sold || 289))) * 100}%`,
                        height: "100%",
                        backgroundColor: "#f97316",
                        borderRadius: "3px",
                      }}
                    ></div>
                  </div>
                </div>

                {/* Countdown */}
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    marginBottom: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  {["00", "00", "00", "00"].map((v, idx) => (
                    <div
                      key={idx}
                      style={{ display: "flex", alignItems: "center", gap: "3px" }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <div
                          style={{
                            backgroundColor: "#f97316",
                            color: "white",
                            padding: "3px 5px",
                            borderRadius: "3px",
                            fontSize: "10px",
                            fontWeight: "700",
                            minWidth: "22px",
                          }}
                        >
                          {v}
                        </div>
                        <span
                          style={{
                            fontSize: "8px",
                            color: "#6b7280",
                            display: "block",
                            marginTop: "2px",
                          }}
                        >
                          {t(`weeklySelectionn.${["day", "hour", "min", "sec"][idx]}`)}
                        </span>
                      </div>

                      {idx < 3 && (
                        <span style={{ color: "#1e3a8a", fontSize: "12px", fontWeight: "700", marginTop: "2px" }}>
                          :
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    fontSize: "11px",
                    color: "#6b7280",
                    lineHeight: "1.8",
                  }}
                >
                  {product.featuresKeys?.map((key, idx) => (
                    <li key={idx}>• {t(key)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "30px",
        }}
      >
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrentIndex(i)}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: currentIndex === i ? "#f97316" : "#cbd5e1",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default WeeklySelectionn;