import React from "react";
import { useTranslation } from "react-i18next";
import delivery from "../images/delivery.svg";
import support from "../images/support.svg";
import voucher from "../images/voucher.svg";
import returnm from "../images/return.svg";
import secure from "../images/secure.svg";

const ServesCards = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: delivery,
      title: t("features.delivery.title"),
      subtitle: t("features.delivery.subtitle"),
    },
    {
      icon: support,
      title: t("features.support.title"),
      subtitle: t("features.support.subtitle"),
    },
    {
      icon: voucher,
      title: t("features.voucher.title"),
      subtitle: t("features.voucher.subtitle"),
    },
    {
      icon: returnm,
      title: t("features.return.title"),
      subtitle: t("features.return.subtitle"),
    },
    {
      icon: secure,
      title: t("features.secure.title"),
      subtitle: t("features.secure.subtitle"),
    },
  ];

  return (
    <section className="py-4" style={{ backgroundColor: "#f5f7fb" }}>
      <div className="container">
      <div className="row g-4">
  {services.map((service, index) => (
    <div className="col-6 col-md-6 col-lg-4 col-xl" key={index}>
      <div className="d-flex align-items-center gap-3">
        <img
          src={service.icon}
          alt={service.title}
          style={{
            width: "45px",
            height: "45px",
            objectFit: "contain",
            flexShrink: 0,
          }}
        />

    
        <div>
          <h6
            className="fw-bold mb-1"
            style={{
              fontSize: "16px",
              color: "#1e3a8a",
            }}
          >
            {service.title}
          </h6>
          <p
            className="mb-0"
            style={{
              fontSize: "13px",
              color: "#697eb8",
            }}
          >
            {service.subtitle}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default ServesCards;