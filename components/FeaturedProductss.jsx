import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const FeaturedProductss = ({ products = [] }) => {
  const { t } = useTranslation();
  const [startIndex, setStartIndex] = useState(0);

  if (products.length === 0) return null;

  const itemsPerPage = 9;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const visibleProducts = [];
  for (let i = 0; i < itemsPerPage; i++) {
    visibleProducts.push(products[(startIndex + i) % products.length]);
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) stars.push(<FaStar key={i} style={{ color: "#f59e0b", fontSize: "11px" }} />);
      else if (i - 0.5 <= rating) stars.push(<FaStarHalfAlt key={i} style={{ color: "#f59e0b", fontSize: "11px" }} />);
      else stars.push(<FaRegStar key={i} style={{ color: "#f59e0b", fontSize: "11px" }} />);
    }
    return stars;
  };

  return (
    <section style={{ padding: "50px clamp(15px, 5vw, 70px)", backgroundColor: "white" }}>
     
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
          borderBottom: "1px solid #e5e7eb",
          paddingBottom: "15px",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        <div>
          <h2 className="fw-bold mb-1" style={{ fontSize: "clamp(24px, 3vw, 32px)", color: "#1e3a8a" }}>
            {t("featuredProducts.title")}
          </h2>
          <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
            {t("featuredProducts.subtitle")}
          </p>
        </div>

     
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={handlePrev}
            style={{
              width: "38px", height: "38px", borderRadius: "50%",
              border: "1px solid #cbd5e1", backgroundColor: "white",
              cursor: "pointer", display: "flex", alignItems: "center",
              justifyContent: "center", color: "#1e3a8a", transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#1e3a8a"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "#1e3a8a"; }}
          >
            <FaChevronLeft style={{ fontSize: "12px" }} />
          </button>

          <button
            onClick={handleNext}
            style={{
              width: "38px", height: "38px", borderRadius: "50%",
              border: "1px solid #cbd5e1", backgroundColor: "white",
              cursor: "pointer", display: "flex", alignItems: "center",
              justifyContent: "center", color: "#1e3a8a", transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#1e3a8a"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "#1e3a8a"; }}
          >
            <FaChevronRight style={{ fontSize: "12px" }} />
          </button>
        </div>
      </div>

  
      <div className="row g-3">
        {visibleProducts.map((product, idx) => (
          <div className="col-12 col-md-6 col-lg-4" key={idx}>
            <Link to="/shop" style={{ textDecoration: "none", color: "inherit" }}>
              <div
                style={{
                  display: "flex", alignItems: "center", gap: "15px",
                  padding: "15px", backgroundColor: "white",
                  border: "1px solid #e5e7eb", borderRadius: "8px",
                  position: "relative", transition: "all 0.3s ease", height: "100%",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 10px 15px rgba(0,0,0,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
              >
                {product.badge && (
                  <span
                    style={{
                      position: "absolute", top: "10px", right: "10px",
                      backgroundColor: product.badgeColor || "#f97316",
                      color: "white", padding: "3px 10px", borderRadius: "20px",
                      fontSize: "11px", fontWeight: "700",
                    }}
                  >
                    {product.badge}
                  </span>
                )}

                <div style={{ width: "40%", flexShrink: 0 }}>
                  <img
                    src={product.image}
                    alt={t(product.titleKey)}
                    style={{ width: "100%", height: "150px", objectFit: "contain" }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  {/* ⬇️ التعديل هون */}
                  <p style={{ fontSize: "11px", color: "#9ca3af", marginBottom: "4px" }}>
                    {t(product.brandKey)}
                  </p>
                  <h6 style={{ fontSize: "13px", fontWeight: "600", color: "#0f172a", marginBottom: "8px", lineHeight: "1.3" }}>
                    {t(product.titleKey)}
                  </h6>

                  <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "6px" }}>
                    <div style={{ display: "flex", gap: "1px" }}>{renderStars(product.rating)}</div>
                    <span style={{ fontSize: "11px", color: "#6b7280" }}>({product.reviews})</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "16px", fontWeight: "700", color: "#1e3a8a" }}>
                      ${product.price}
                    </span>
                    {product.oldPrice && (
                      <span style={{ fontSize: "12px", color: "#9ca3af", textDecoration: "line-through" }}>
                        ${product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProductss;