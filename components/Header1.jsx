import React from "react";

const Header1 = () => {
  return (
    <div
      className="title-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "700px",
        textAlign: "center",
        background: "linear-gradient(135deg, #000, #555)", // Black and grey gradient background
        overflow: "hidden",
        position: "relative",
      }}
    >
      <h1
        className="title"
        style={{
          fontSize: "70px",
          color: "#ffffff",
          margin: "0",
          cursor: "pointer",
          transition: "transform 0.3s ease, color 0.3s ease",
          zIndex: 2, // To keep text above the animation
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.color = "#ddd"; // Changes text color on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.color = "#ffffff";
        }}
      >
        Stay Informed, Stay Ahead
      </h1>
      

      {/* Background animation */}
      <div
      style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(85, 85, 85, 0.3))",
    animation: "moveBg 1s linear infinite", // Updated animation for continuous movement
    zIndex: 1,
    backgroundSize: "200% 200%", // Ensures the gradient covers more space for smooth movement
  }}
></div>

<style jsx>{`
  @keyframes moveBg {
    50% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`  }</style>

    </div>
  );
};

export default Header1;
