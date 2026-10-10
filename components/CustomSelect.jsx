import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next"; 
const CustomSelect = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation(); 
  const ref = useRef(null);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };
  



 
  return (
    <div
      ref={ref}
      className="d-flex align-items-center gap-2"
      style={{ position: "relative" }}
    >
      {label && (
        <span
          style={{
            color: "#1e3a8a",
            fontWeight: "500",
            fontSize: "15px",
          }}
        >
           {t(label)} 
        </span>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: "transparent",
          border: "none",
          color: "#0f172a",
          fontWeight: "600",
          fontSize: "16px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "5px 0",
          outline: "none",
        }}
      >
         {t(value)}
        <FaChevronDown
          style={{
            fontSize: "11px",
            color: "#0f172a",
            transition: "transform 0.3s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            marginTop: "12px",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.12), 0 4px 10px rgba(0, 0, 0, 0.08)",
            minWidth: "220px",
            zIndex: 1000,
            overflow: "hidden",
            padding: "5px 0",
          }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              style={{
                padding: "14px 20px",
                cursor: "pointer",
                color: "#1e3a8a",
                fontSize: "16px",
                fontWeight: "500",
                backgroundColor: option === value ? "#e5e7eb" : "transparent",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (option !== value) {
                  e.currentTarget.style.backgroundColor = "#f3f4f6";
                }
              }}
              onMouseLeave={(e) => {
                if (option !== value) {
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              {t(option)} 
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;