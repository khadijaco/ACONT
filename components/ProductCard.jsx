import React from "react";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductCard = () => {
  const { t } = useTranslation();

  return (
    <section
      style={{
        padding: "40px clamp(15px, 5vw, 70px)",
        backgroundColor: "white",
      }}
    >
      <div className="row g-4">
       
        <div className="col-12 col-lg-3">
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
        
            <div
              style={{
                backgroundColor: "#f97316",
                color: "white",
                padding: "15px 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5
                className="fw-bold mb-0"
                style={{ fontSize: "18px", color: "white" }}
              >
                {t("trending.bestSeller")}
              </h5>
              <div style={{ display: "flex", gap: "10px" }}>
                <FaChevronLeft style={{ fontSize: "14px", cursor: "pointer" }} />
                <FaChevronRight style={{ fontSize: "14px", cursor: "pointer" }} />
              </div>
            </div>

        
            <div
              style={{
                padding: "60px 20px",
                textAlign: "center",
                color: "#9ca3af",
                fontSize: "13px",
              }}
            >
        منتجاتنا المميزة
            </div>
          </div>
        </div>

     
        <div className="col-12 col-lg-9">
    
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h3
              className="fw-bold mb-0"
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#1e3a8a",
              }}
            >
              {t("trending.title")}
            </h3>

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "white",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6b7280",
                }}
              >
                <FaChevronLeft />
              </button>
              <button
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "white",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6b7280",
                }}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

      
          <div
            style={{
              padding: "60px 20px",
              textAlign: "center",
              color: "#9ca3af",
              fontSize: "14px",
            }}
          >
            محتوى المنتجات هنا
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;