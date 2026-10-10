import React from "react";
import { useTranslation } from "react-i18next";
import { FaCaretRight } from "react-icons/fa";

const CategoryCards = () => {
  const { t } = useTranslation();

  const categories = [
    {
      image:
        "https://i.pinimg.com/736x/47/54/42/475442e08bcb645ec93dfb6d66b0ca8d.jpg",
      title: t("categoryCards.business.title"),
      items: [
        t("categoryCards.business.items.accounting"),
        t("categoryCards.business.items.biography"),
        t("categoryCards.business.items.culture"),
        t("categoryCards.business.items.economics"),
      ],
    },
    {
      image:
        "https://i.pinimg.com/736x/6e/b9/d7/6eb9d779dda9ee68bd45e16805714471.jpg",
      title: t("categoryCards.biographies.title"),
      items: [
        t("categoryCards.biographies.items.dvd"),
        t("categoryCards.biographies.items.projection"),
        t("categoryCards.biographies.items.tv"),
        t("categoryCards.biographies.items.combos"),
      ],
    },
    {
      image:
        "https://i.pinimg.com/736x/66/3c/e9/663ce973cbc4b8017d003423a7a5f5fd.jpg",
      title: t("categoryCards.children.title"),
      items: [
        t("categoryCards.children.items.action"),
        t("categoryCards.children.items.activities"),
        t("categoryCards.children.items.arts"),
        t("categoryCards.children.items.early"),
      ],
    },
    {
      image:
        "https://i.pinimg.com/736x/59/dd/33/59dd33b88e886cb5d85c3d49dbdd462c.jpg",
      title: t("categoryCards.education.title"),
      items: [
        t("categoryCards.education.items.higher"),
        t("categoryCards.education.items.schools"),
        t("categoryCards.education.items.study"),
        t("categoryCards.education.items.test"),
      ],
    },
  ];

  return (
    <section
      style={{
        maxWidth: "1300px",
        margin: "0 auto",
        padding: "50px clamp(15px, 5vw, 70px)",
        backgroundColor: "white",
      }}
    >
      <div className="row g-3">
        {categories.map((cat, i) => (
          <div className="col-12 col-sm-6 col-lg-3" key={i}>
            <div
              style={{
                display: "flex",
                gap: "15px",
                padding: "20px",
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                height: "100%",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
                e.currentTarget.style.borderColor = "#1e3a8a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#e5e7eb";
              }}
            >
          
              <div
                style={{
                  width: "60px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>

           
              <div style={{ flex: 1 }}>
                <h5
                  className="fw-bold mb-3"
                  style={{
                    fontSize: "16px",
                    color: "#1e3a8a",
                    lineHeight: "1.3",
                  }}
                >
                  {cat.title}
                </h5>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    marginBottom: "15px",
                  }}
                >
                  {cat.items.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "13px",
                        color: "#6b7280",
                        marginBottom: "6px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#1e3a8a";
                        e.currentTarget.style.transform = "translateX(5px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#6b7280";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      <FaCaretRight
                        style={{ fontSize: "10px", color: "#cbd5e1" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    backgroundColor: "#e5e7eb",
                    color: "#4b5563",
                    border: "none",
                    padding: "6px 18px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#1e3a8a";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#e5e7eb";
                    e.currentTarget.style.color = "#4b5563";
                  }}
                >
                  {t("categoryCards.viewAll")}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;
