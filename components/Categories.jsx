import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Categories = () => {
  const { t } = useTranslation();
  const [columns, setColumns] = useState(9);

// حجم شاشه

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 576) setColumns(3);
      else if (width < 768) setColumns(4);
      else if (width < 992) setColumns(6);
      else if (width < 1200) setColumns(8);
      else setColumns(9);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);


  const categories = [
    { name: t("categories.drillingMachine"), items: 1025, image: "https://i.pinimg.com/736x/ed/ac/65/edac65f9352a0451d899caa2281fd64f.jpg" },
    { name: t("categories.cordlessTools"), items: 2185, image: "https://i.pinimg.com/736x/43/e8/fc/43e8fc817e995df1d5b185aaa71b92b2.jpg" },
    { name: t("categories.blades"), items: 635, image: "https://i.pinimg.com/1200x/c0/ac/17/c0ac17881d4892e5e292d078bd818568.jpg" },
    { name: t("categories.abrasives"), items: 965, image: "https://i.pinimg.com/736x/d4/81/d6/d481d6680590c2b90ac1a00823ac35e2.jpg" },
    { name: t("categories.nailers"), items: 1254, image: "https://i.pinimg.com/1200x/44/b4/f8/44b4f8ce03bb720395d3809457fb0212.jpg" },
    { name: t("categories.stapleGuns"), items: 325, image: "https://i.pinimg.com/736x/ec/b8/2f/ecb82fb395de51e7c4ecb590adc04286.jpg" },
    { name: t("categories.homeAppliances"), items: 3256, image: "https://i.pinimg.com/736x/20/c0/16/20c01654c0c4111651305df3051214ec.jpg" },
    { name: t("categories.outdoorPower"), items: 9658, image: "https://i.pinimg.com/736x/d2/9e/98/d29e98a0a39dfaeb2920afba5a5c82ad.jpg" },
    { name: t("categories.measuring"), items: 2356, image: "https://i.pinimg.com/736x/b7/99/be/b799be7edc87417bce20210c38fb797d.jpg" },
    { name: t("categories.bits"), items: 325, image: "https://i.pinimg.com/736x/cf/a6/e1/cfa6e1a6fc59bd8d005f26efd65065b2.jpg" },
    { name: t("categories.safetyEquipment"), items: 6536, image: "https://i.pinimg.com/1200x/cf/1d/0b/cf1d0b883399b71785fa48da787faca2.jpg" },
    { name: t("categories.entertainment"), items: 2458, image: "https://i.pinimg.com/736x/6c/5e/48/6c5e48b7d8c419a68a7b85518966cd3c.jpg" },
    { name: t("categories.cuttingTools"), items: 2563, image: "https://i.pinimg.com/736x/30/1c/29/301c29cf900360f180ce144ac1fa6935.jpg" },
    { name: t("categories.handTools"), items: "15k", image: "https://i.pinimg.com/736x/db/b9/09/dbb9099687123d4b05886bca20b9d4e9.jpg" },
    { name: t("categories.airTools"), items: 1254, image: "https://i.pinimg.com/736x/3c/c5/f7/3cc5f7c8a828bffd384ca0b0fd06dcf8.jpg" },
    { name: t("categories.electricPower"), items: 2589, image: "https://i.pinimg.com/1200x/d7/31/1c/d7311c512dc50c1dd6b02282f64086ab.jpg" },
    { name: t("categories.safetyTools"), items: 10254, image: "https://i.pinimg.com/736x/ec/55/a5/ec55a5882fcfae7f8f32e4b6264f6531.jpg" },
     { name: t("categories.drillingMachine"), items: 10259, image: "https://i.pinimg.com/736x/ed/ac/65/edac65f9352a0451d899caa2281fd64f.jpg" },

];

    return (
    <section
      style={{
        padding: "30px clamp(10px, 3vw, 70px)",
        backgroundColor: "white",
      }}
    >
      <div className="text-center mb-4">
        <h2
          className="fw-bold"
          style={{
            fontSize: "clamp(18px, 3vw, 30px)",
            color: "#54648e",
          }}
        >
          {t("categories.title")}
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "8px",
        }}
      >
        {categories.map((cat, index) => (
      <div
  key={index}
  className="text-center p-2"
  style={{
    backgroundColor: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "110px",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(183, 183, 194, 0.1)";
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.borderColor = "#444d64";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.borderColor = "#e5e7eb";
  }}
>  <img
              src={cat.image}
              alt={cat.name}
              style={{
                width: "50px",
                height: "45px",
                objectFit: "contain",
                marginBottom: "8px",
              }}
            />
            <h6
              className="fw-bold mb-1"
              style={{
                fontSize: "11px",
                color: "#1e3a8a",
              }}
            >
              {cat.name}
            </h6>
            <p
              className="mb-0"
              style={{
                fontSize: "9px",
                color: "#9ca3af",
              }}
            >
              {cat.items} {t("categories.items")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;