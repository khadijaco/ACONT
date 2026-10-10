import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sidebaar = ({ title, products = [] }) => {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(8/ itemsPerPage);

  const startIndex = page * itemsPerPage;
  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          style={{
            color: i <= rating ? "#f59e0b" : "#cbd5e1",
            fontSize: "10px",
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div>
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <div
     style={{
  backgroundColor: "white",
  overflow: "hidden",
  marginBottom: "30px",
  border: "none",             
}}
      >
        {/* رأس القسم */}
        <div
          style={{
            padding: "15px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <h3
            className="fw-bold mb-0"
            style={{ fontSize: "18px", color: "#1e3a8a" }}
          >
            {title}
          </h3>

          <div style={{ display: "flex", gap: "6px" }}>
            <button
              onClick={prevPage}
              style={{
                background: "white",
                border: "1px solid #cbd5e1",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#3b82f6",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextPage}
              style={{
                background: "white",
                border: "1px solid #cbd5e1",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#3b82f6",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* المنتجات */}
        <div
          key={page}
          style={{
            padding: "15px 20px",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "12px",
          }}
        >
          {visibleProducts.map((post, index) => (
            <a
              key={post.id}
              href="#top"
              className="d-flex gap-3 text-decoration-none"
              style={{
                color: "#0f172a",
                paddingBottom: index === visibleProducts.length - 1 ? "0" : "10px",
                borderBottom: index === visibleProducts.length - 1 ? "none" : "1px solid #f3f4f6",
                animation: `fadeInUp 0.5s ease-in-out ${index * 0.1}s both`,
              }}
            >
              <img
                src={post.image}
                alt={t(post.titleKey)}
                style={{
                  width: "60px",
                  height: "65px",
                  objectFit: "cover",
                  borderRadius: "6px",
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    lineHeight: "1.3",
                    marginBottom: "4px",
                    color: "#0f172a",
                  }}
                >
                  {t(post.titleKey)}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                    marginBottom: "4px",
                  }}
                >
                  {renderStars(post.rating || 5)}
                  <span style={{ fontSize: "10px", color: "#6b7280", marginLeft: "4px" }}>
                    ({post.reviews || 65})
                  </span>
                </div>

                {post.price && (
                  <span style={{ fontSize: "12px", fontWeight: "700", color: "#1e3a8a" }}>
                    ${post.price}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebaar;