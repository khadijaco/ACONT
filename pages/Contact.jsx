import React from "react";
import { FaComments, FaPhone, FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ServesCards from "../components/ServesCards";

const Contact = () => {
  return (
    <div style={{ padding: "clamp(15px, 4vw, 40px) clamp(15px, 5vw, 70px)" }}>
      {/* Breadcrumb */}
      <div className="mb-4" style={{ fontSize: "14px", color: "#6b7280" }}>
        <Link to="/" style={{ color: "#6b7280", textDecoration: "none" }}>
          Home
        </Link>
        <span className="mx-2">›</span>
        <Link
          to="/blog-list"
          style={{ color: "#6b7280", textDecoration: "none" }}
        >
          Page
        </Link>
        <span className="mx-2">›</span>
        <span style={{ color: "#546a8f" }}>Contact</span>
      </div>

      {/* ⬇️⬇️⬇️ القسم 1: Form + Map ⬇️⬇️⬇️ */}
      <div className="row g-5 mb-5">
        <div className="col-lg-7">
          <h1
            className="fw-bold mb-2"
            style={{ fontSize: "clamp(28px, 5vw, 42px)", color: "#546a8f" }}
          >
            Contact Us
          </h1>
          <p className="mb-5" style={{ color: "#546a8f", fontSize: "16px" }}>
            Our team would love to hear from you!
          </p>

          <form>
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="First name"
                  className="form-control"
                  style={{
                    padding: "14px 18px",
                    fontSize: "14px",
                    borderRadius: "6px",
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Last name"
                  className="form-control"
                  style={{
                    padding: "14px 18px",
                    fontSize: "14px",
                    borderRadius: "6px",
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>
            </div>

            <div className="mb-3">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                style={{
                  padding: "14px 18px",
                  fontSize: "14px",
                  borderRadius: "6px",
                  border: "1px solid #e5e7eb",
                }}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                placeholder="Phone number"
                className="form-control"
                style={{
                  padding: "14px 18px",
                  fontSize: "14px",
                  borderRadius: "6px",
                  border: "1px solid #e5e7eb",
                }}
              />
            </div>

            <div className="mb-4">
              <textarea
                placeholder="Message"
                rows={7}
                className="form-control"
                style={{
                  padding: "14px 18px",
                  fontSize: "14px",
                  borderRadius: "6px",
                  border: "1px solid #e5e7eb",
                }}
              ></textarea>
            </div>

            <button
              style={{
                backgroundColor: "#5b6a92",
                color: "white",
                border: "1px solid #3e4b58",
                padding: "12px 30px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f6f3f1";
                e.currentTarget.style.color = "#576792";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#6e7a9c";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              Send message
            </button>
          </form>
        </div>

        <div className="col-lg-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="650"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </div>

      {/* ⬇️⬇️⬇️ القسم 2: Visit our stores ⬇️⬇️⬇️ */}
      <div style={{ padding: "80px 0", marginTop: "60px" }}>
        <div className="container-fluid" style={{ padding: "0 70px" }}>
          <div className="row g-5 mb-5">
            <div className="col-lg-3">
              <h2
                className="fw-bold mb-3"
                style={{ fontSize: "clamp(22px, 4vw, 32px)", color: "#546a8f" }}
              >
                Visit our stores
              </h2>
              <p className="mb-4" style={{ color: "#546a8f", fontSize: "15px" }}>
                Find us at these locations
              </p>
              <button
                style={{
                  backgroundColor: "#5b6a92",
                  color: "white",
                  border: "1px solid #3e4b58",
                  padding: "12px 30px",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f6f3f1";
                  e.currentTarget.style.color = "#576792";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#6e7a9c";
                  e.currentTarget.style.color = "#ffffff";
                }}
              >
                View map
              </button>
            </div>

            <div className="col-lg-9">
              <div className="row g-4">
                {[
                  "Melbourne",
                  "Sydney",
                  "Bangkok",
                  "San Francisco",
                  "Sweden",
                  "Seoul",
                  "Byron Bay",
                  "Ha Noi",
                  "Paris",
                ].map((city, index) => (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <h4
                      className="fw-bold mb-2"
                      style={{ color: "#546a8f", fontSize: "20px" }}
                    >
                      {city}
                    </h4>
                    <p
                      style={{
                        color: "#546a8f",
                        fontSize: "14px",
                        lineHeight: "1.7",
                      }}
                    >
                      205 North Michigan Avenue, Suite 810, Chicago, 60601, USA
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "clamp(30px, 6vw, 50px) clamp(15px, 8vw, 100px)",
          backgroundColor: "#f3f4f7c6",
          borderRadius: "8px",
        }}
      >
        <div className="row g-5">
          <div
            className="col-lg-3"
            style={{ padding: "50px 0", textAlign: "left" }}
          >
            <h2
              className="fw-bold mb-3"
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#60709d",
                lineHeight: "1.3",
              }}
            >
              We'd love to here from you
            </h2>
            <p style={{ fontSize: "15px", color: "#60709d" }}>
              Chat with our friendly team
            </p>
          </div>

          <div className="col-lg-9">
            <div className="row g-4">
              {/* Chat to sales */}
              <div className="col-12 col-md-6 col-lg-4 text-center">
                <div style={{ color: "#6174a8", marginBottom: "15px" }}>
                  <FaComments size={50} />
                </div>
                <h4
                  className="fw-bold mb-2"
                  style={{ fontSize: "20px", color: "#526aac" }}
                >
                  Chat to sales
                </h4>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "14px",
                    marginBottom: "5px",
                  }}
                >
                  Speak to our team.
                </p>
                <p
                  style={{
                    color: "#6174a8",
                    fontSize: "14px",
                    fontWeight: "600",
                    wordBreak: "break-word",
                  }}
                >
                  sales@ecom.com
                </p>
              </div>

              {/* Call us */}
              <div className="col-12 col-md-6 col-lg-4 text-center">
                <div style={{ color: "#6174a8", marginBottom: "15px" }}>
                  <FaPhone size={50} />
                </div>
                <h4
                  className="fw-bold mb-2"
                  style={{ fontSize: "20px", color: "#526aac" }}
                >
                  Call us
                </h4>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "14px",
                    marginBottom: "5px",
                  }}
                >
                  Mon-Fri from 8am to 5pm
                </p>
                <p
                  style={{
                    color: "#5e6c88",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  +1(555)000-0000
                </p>
              </div>

              {/* Visit us */}
              <div className="col-12 col-md-6 col-lg-4 text-center">
                <div style={{ color: "#6174a8", marginBottom: "15px" }}>
                  <FaMapMarkedAlt size={50} />
                </div>
                <h4
                  className="fw-bold mb-2"
                  style={{ fontSize: "20px", color: "#526aac" }}
                >
                  Visit us
                </h4>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "14px",
                    marginBottom: "5px",
                  }}
                >
                  Visit our office
                </p>
                <p
                  style={{
                    color: "#5e6c88",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  205 North Michigan Avenue, Suite 810
                  <br />
                  Chicago, 60601, USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="mt-4">
        <ServesCards />
      </div>

    
    </div>
  );
};

export default Contact;