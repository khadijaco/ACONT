import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const FeaturedBanners = () => {
  const { t } = useTranslation();

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-2 px-md-5">

          {/* 🟦 اليسار */}
          <div className="col-12 col-md-4">
            <div className="row g-3">
              <div className="col-12">
                <div
                  className="position-relative rounded overflow-hidden"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <img
                    src="https://i.pinimg.com/736x/3e/df/f2/3edff2da9d175f075fd64f96444729a7.jpg"
                    alt={t("featuredBanners.readingTable.title")}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center text-white p-4">
                    <h3 className="fw-bold fs-4 mb-1">
                      {t("featuredBanners.readingTable.title")}
                    </h3>
                    <p className="small mb-0">
                      {t("featuredBanners.readingTable.subtitle")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div
                  className="position-relative rounded overflow-hidden"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <img
                    src="https://i.pinimg.com/1200x/a7/8c/0e/a78c0e946afc6ed036892dbc279da92b.jpg"
                    alt={t("featuredBanners.tableLamp.title")}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center text-white p-4">
                    <h3 className="fw-bold fs-4 mb-1">
                      {t("featuredBanners.tableLamp.title")}
                    </h3>
                    <p className="small mb-0">
                      {t("featuredBanners.tableLamp.subtitle")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 🟦 الوسط */}
          <div className="col-12 col-md-4 d-flex">
            <div className="position-relative rounded overflow-hidden w-100 h-100">
              <img
                src="https://i.pinimg.com/736x/76/fc/87/76fc87ca75715f05f66b72c6bada7330.jpg"
                alt={t("featuredBanners.topChair.title")}
                className="w-100 h-100 object-fit-cover"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center text-white p-4">
                <h3 className="fw-bold fs-4 mb-1">
                  {t("featuredBanners.topChair.title")}
                </h3>
                <p className="small mb-0">
                  {t("featuredBanners.topChair.subtitle")}
                </p>
                <button className="shop-now-btn mt-3 align-self-start">
                  {t("featuredBanners.topChair.button")} <FaArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>

          {/* 🟦 اليمين */}
          <div className="col-12 col-md-4">
            <div className="row g-3">
              <div className="col-12">
                <div
                  className="position-relative rounded overflow-hidden"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600"
                    alt={t("featuredBanners.sofa.title")}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center text-white p-4">
                    <h3 className="fw-bold fs-4 mb-1">
                      {t("featuredBanners.sofa.title")}
                    </h3>
                    <p className="small mb-0">
                      {t("featuredBanners.sofa.subtitle")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div
                  className="position-relative rounded overflow-hidden"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600"
                    alt={t("featuredBanners.relaxingChair.title")}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center text-white p-4">
                    <h3 className="fw-bold fs-4 mb-1">
                      {t("featuredBanners.relaxingChair.title")}
                    </h3>
                    <p className="small mb-0">
                      {t("featuredBanners.relaxingChair.subtitle")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedBanners;