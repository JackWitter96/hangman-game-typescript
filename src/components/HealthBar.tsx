import React from "react";
import "../css/HealthBar.css";

interface HealthBarProps {
  health: number;
}

const HealthBar: React.FC<HealthBarProps> = ({ health }) => {
  const barStyle = {
    width: `${health}%`,
    backgroundColor: health > 20 ? "green" : "red",
  };

  return (
    <div className="health-bar-container">
      <div className="health-bar" style={barStyle}></div>
    </div>
  );
};

export default HealthBar;
