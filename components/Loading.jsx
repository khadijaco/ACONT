import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div style={{ textAlign: "center" }}>
        {/* Spinner */}
        <div
          style={{
            width: "60px",
            height: "60px",
            border: "5px solid #e5e7eb",
            borderTop: "5px solid #3b82f6",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            margin: "0 auto 20px",
          }}
        ></div>
        <p style={{ color: "#3b82f6", fontWeight: "600", fontSize: "16px" }}>
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;