import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductsCarousel = ({ title, products = [] }) => {
  const { t } = useTranslation();
  const [startIndex, setStartIndex] = useState(0);

  if (products.length === 0) return null;


  const itemsPerPage = 3;

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

  return (
    <div>
    
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
          borderBottom: "1px solid #e5e7eb",
          paddingBottom: "10px",
        }}
      >
        <h3 className="fw-bold mb-0" style={{ fontSize: "18px", color: "#1e3a8a" }}>
          {title}
        </h3>

      
        <div style={{ display: "flex", gap: "6px" }}>
          <button
            onClick={handlePrev}
            style={{
              width: "28px", height: "28px", borderRadius: "50%",
              border: "1px solid #cbd5e1", backgroundColor: "white",
              cursor: "pointer", display: "flex", alignItems: "center",
              justifyContent: "center", color: "#1e3a8a",
            }}
          >
            <FaChevronLeft style={{ fontSize: "10px" }} />
          </button>
          <button
            onClick={handleNext}
            style={{
              width: "28px", height: "28px", borderRadius: "50%",
              border: "1px solid #cbd5e1", backgroundColor: "white",
              cursor: "pointer", display: "flex", alignItems: "center",
              justifyContent: "center", color: "#1e3a8a",
            }}
          >
            <FaChevronRight style={{ fontSize: "10px" }} />
          </button>
        </div>
      </div>


      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {visibleProducts.map((product, idx) => (
          <div key={idx} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img src={product.image} alt="" style={{ width: "60px", height: "75px", objectFit: "contain", flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: "10px", color: "#9ca3af", marginBottom: "2px" }}>{product.brand}</p>
              <h6 style={{ fontSize: "11px", fontWeight: "600", color: "#0f172a", marginBottom: "4px", lineHeight: "1.3" }}>
                {product.title}
              </h6>
              <div style={{ fontSize: "9px", color: "#f59e0b" }}>★★★★★</div>
              <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                <span style={{ fontSize: "12px", fontWeight: "700", color: "#1e3a8a" }}>${product.price}</span>
                {product.oldPrice && (
                  <span style={{ fontSize: "9px", color: "#9ca3af", textDecoration: "line-through" }}>${product.oldPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCarousel;