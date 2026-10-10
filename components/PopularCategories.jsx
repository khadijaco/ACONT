import React from "react";
import { useTranslation } from "react-i18next";

const PopularCategories = () => {
  const { t } = useTranslation();

 
  const categories = [
    {
      key: "livingRoom",
      count: 156,
      image: "https://i.pinimg.com/736x/b1/3e/f9/b13ef9e19054068290247889c1d57c4e.jpg",
    },
    {
      key: "readingRoom",
      count: 156,
      image: "https://i.pinimg.com/736x/7e/3a/a8/7e3aa869c0385aeb673e1cc79fd00f56.jpg",
    },
    {
      key: "bedRoom",
      count: 156,
      image: "https://i.pinimg.com/1200x/4f/0d/ee/4f0dee7ee661faeff3ade804852f52d7.jpg",
    },
    {
      key: "kitchen",
      count: 156,
      image: "https://i.pinimg.com/736x/5f/f9/79/5ff979ddfc3dad8fd817e9073c201e91.jpg",
    },
    {
      key: "decorations",
      count: 156,
      image: "https://i.pinimg.com/736x/f2/a9/aa/f2a9aabf1139a387afa8c18703e00e69.jpg",
    },
  ];

  return (
    <section style={{ padding: "60px 0" }}>
      <div className="container">
        <h2
          style={{
            color: "#485780",
            fontWeight: "700",
            fontSize: "30px",
            marginBottom: "40px",
          }}
        >
          {t("popularCategories.title")}    
        </h2>

        <div className="row g-4">
          {categories.map((cat, i) => {
            let visibility = "";
            if (i === 2) visibility = "d-none d-md-block";
            if (i === 3) visibility = "d-none d-lg-block";
            if (i === 4) visibility = "d-none d-xl-block";

            return (
              <div
                className={`col-6 col-md-4 col-lg-3 col-xl ${visibility}`}
                key={i}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    borderRadius: "2px",
                    overflow: "hidden",
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  <img
                    src={cat.image}
                    alt={t(`popularCategories.categories.${cat.key}`)}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <h5
                  style={{
                    color: "#485780",
                    fontWeight: "600",
                    fontSize: "18px",
                    marginTop: "16px",
                    marginBottom: "4px",
                    textAlign: "center",
                  }}
                >
                  {t(`popularCategories.categories.${cat.key}`)}      {/* ⬅️ اسم الفئة */}
                </h5>

                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "14px",
                    margin: 0,
                    textAlign: "center",
                  }}
                >
                  {cat.count} {t("popularCategories.products")}       {/* ⬅️ "منتجات" */}
                </p>
              </div>
            );
          })}
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid #5274a1",
            marginTop: "40px",
          }}
        />
      </div>
    </section>
  );
};

export default PopularCategories;