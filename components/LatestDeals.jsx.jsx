import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaHeart,
  FaSync,
  FaShare,
} from "react-icons/fa";

const LatestDeals = () => {
  const { t } = useTranslation();


  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // ⬇️ عدد الأعمدة حسب الشاشة
  const [columns, setColumns] = useState(5);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 576) setColumns(2);
      else if (width < 992) setColumns(3);
      else setColumns(5);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);


  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // ⬇️ 10 منتجات
const products = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/47/54/42/475442e08bcb645ec93dfb6d66b0ca8d.jpg",
    brand: t("latestDeals.products.p1.brand"),
    title: t("latestDeals.products.p1.title"),
    rating: 5,
    reviews: 65,
    price: 198.5,
    oldPrice: 256.3,
    discount: 17,
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/6e/b9/d7/6eb9d779dda9ee68bd45e16805714471.jpg",
    brand: t("latestDeals.products.p2.brand"),
    title: t("latestDeals.products.p2.title"),
    rating: 5,
    reviews: 65,
    price: 198.5,
    oldPrice: 256.3,
    discount: 17,
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/66/3c/e9/663ce973cbc4b8017d003423a7a5f5fd.jpg",
    brand: t("latestDeals.products.p3.brand"),
    title: t("latestDeals.products.p3.title"),
    rating: 5,
    reviews: 65,
    price: 198.5,
    oldPrice: 256.3,
    discount: 17,
  },
  {
    id: 4,
    image: "https://i.pinimg.com/736x/59/dd/33/59dd33b88e886cb5d85c3d49dbdd462c.jpg",
    brand: t("latestDeals.products.p4.brand"),
    title: t("latestDeals.products.p4.title"),
    rating: 5,
    reviews: 65,
    price: 198.5,
    oldPrice: 256.3,
    discount: 17,
  },
  {
    id: 5,
    image: "https://i.pinimg.com/736x/4f/cc/74/4fcc741435eef92f96810a0c126dbd7e.jpg",
    brand: t("latestDeals.products.p5.brand"),
    title: t("latestDeals.products.p5.title"),
    rating: 5,
    reviews: 65,
    price: 198.5,
    oldPrice: 256.3,
    discount: 17,
  },
  {
    id: 6,
    image: "https://i.pinimg.com/736x/7b/c6/31/7bc6310dd1377c7ff27897fbe88281df.jpg",
    brand: t("latestDeals.products.p6.brand"),
    title: t("latestDeals.products.p6.title"),
    rating: 5,
    reviews: 65,
    price: 198.5,
    oldPrice: 256.3,
    discount: 17,
  },
  {
    id: 7,
    image: "https://i.pinimg.com/1200x/65/00/4e/65004eecd5873f5768303448ea59d7a2.jpg",
    brand: t("latestDeals.products.p7.brand"),
    title: t("latestDeals.products.p7.title"),
    rating: 5,
    reviews: 65,
    price: 198.5,
    oldPrice: 256.3,
    discount: 17,
  },
  {
    id: 8,
    image: "https://i.pinimg.com/736x/c7/10/09/c71009efd36d32752f4d562f5286ec9c.jpg",
    brand: t("latestDeals.products.p8.brand"),
    title: t("latestDeals.products.p8.title"),
    rating: 5,
    reviews: 65,
    price: 198.5,
    oldPrice: 256.3,
    discount: 17,
  },
  {
    id: 9,
    image: "https://i.pinimg.com/736x/17/ce/d2/17ced263ce16e445e1b18be543f0a836.jpg",
    brand: t("latestDeals.products.p9.brand"),
    title: t("latestDeals.products.p9.title"),
    rating: 5,
    reviews: 65,
    price: 198.5,
    oldPrice: 256.3,
    discount: 17,
  },
  {
    id: 10,
    image: "https://i.pinimg.com/736x/7c/15/71/7c15712ac384d8fc7ad42caeefda616c.jpg",
    brand: t("latestDeals.products.p10.brand"),
    title: t("latestDeals.products.p10.title"),
    rating: 5,
    reviews: 65,
    price: 198.5,
    oldPrice: 256.3,
    discount: 17,
  },
];

  return (
    <section
      style={{
        padding: "50px clamp(15px, 5vw, 70px)",
        backgroundColor: "white",
      }}
    >
    
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
      
        <div>
          <h2
            className="fw-bold mb-1"
            style={{ fontSize: "clamp(24px, 3vw, 32px)", color: "#1e3a8a" }}
          >
            {t("latestDeals.title")}
          </h2>
          <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
            {t("latestDeals.subtitle")}
          </p>
        </div>

      
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "14px",
                color: "#1e3a8a",
                fontWeight: "700",
                margin: 0,
              }}
            >
              {t("latestDeals.hurry")}
            </p>
            <p style={{ fontSize: "12px", color: "#9ca3af", margin: 0 }}>
              {t("latestDeals.offersEnd")}
            </p>
          </div>

          {[
            { value: timeLeft.days },
            { value: timeLeft.hours },
            { value: timeLeft.minutes },
            { value: timeLeft.seconds },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#f97316",
                color: "white",
                padding: "8px 12px",
                borderRadius: "4px",
                fontSize: "16px",
                fontWeight: "700",
                minWidth: "42px",
                textAlign: "center",
                position: "relative",
              }}
            >
              {String(item.value).padStart(2, "0")}
              {i < 3 && (
                <span
                  style={{
                    position: "absolute",
                    right: "-10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#1e3a8a",
                    fontWeight: "700",
                  }}
                >
                  :
                </span>
              )}
            </div>
          ))}

         <Link
  to="/shop"
  style={{
    color: "#1e3a8a",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "600",
    marginLeft: "10px",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    transition: "color 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.color = "#f97316";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.color = "#1e3a8a";
  }}
>
  {t("latestDeals.viewAll")} →
</Link>
        </div>
      </div>


      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "15px",
        }}
      >
        {products.map((product) => (
          <ProductCardItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};


const ProductCardItem = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating)
        stars.push(
          <FaStar key={i} style={{ color: "#f59e0b", fontSize: "11px" }} />,
        );
      else if (i - 0.5 <= rating)
        stars.push(
          <FaStarHalfAlt
            key={i}
            style={{ color: "#f59e0b", fontSize: "11px" }}
          />,
        );
      else
        stars.push(
          <FaRegStar key={i} style={{ color: "#f59e0b", fontSize: "11px" }} />,
        );
    }
    return stars;
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        backgroundColor: "white",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
     
      {product.discount && (
        <span
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "#f97316",
            color: "white",
            padding: "3px 8px",
            borderRadius: "4px",
            fontSize: "11px",
            fontWeight: "700",
            zIndex: 2,
          }}
        >
          {product.discount}%
        </span>
      )}

     
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translateX(0)" : "translateX(15px)",
          transition: "all 0.3s ease",
          zIndex: 3,
          pointerEvents: isHovered ? "auto" : "none",
        }}
      >
        <a
        href="#"
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "4px",
            border: "1px solid #e5e7eb",
            backgroundColor: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#4b5563",
          }}
        >
          <FaHeart size={12} />
        </a>
        <a
        href="#"
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "4px",
            border: "1px solid #e5e7eb",
            backgroundColor: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#4b5563",
          }}
        >
          <FaSync size={12} />
        </a>
        <a
        href="#"
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "4px",
            border: "1px solid #e5e7eb",
            backgroundColor: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#4b5563",
          }}
        >
          <FaShare size={12} />
        </a>
      </div>

      <div
        style={{
          padding: "10px",
          textAlign: "center",
          backgroundColor: "#f9fafb",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      <div style={{ padding: "10px" }}>
        <p style={{ fontSize: "11px", color: "#9ca3af", marginBottom: "4px" }}>
          {product.brand}
        </p>
        <h6
          style={{
            fontSize: "13px",
            fontWeight: "600",
            color: "#0f172a",
            marginBottom: "8px",
            lineHeight: "1.3",
            height: "36px",
            overflow: "hidden",
          }}
        >
          {product.title}
        </h6>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            marginBottom: "8px",
          }}
        >
          <div style={{ display: "flex", gap: "1px" }}>
            {renderStars(product.rating)}
          </div>
          <span style={{ fontSize: "11px", color: "#6b7280" }}>
            ({product.reviews})
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span
            style={{ fontSize: "16px", fontWeight: "700", color: "#f97316" }}
          >
            ${product.price}
          </span>
          {product.oldPrice && (
            <span
              style={{
                fontSize: "12px",
                color: "#9ca3af",
                textDecoration: "line-through",
              }}
            >
              ${product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestDeals;
