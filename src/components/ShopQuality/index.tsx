import React from "react";
import "./style.css";

export const ShopQuality: React.FC = () => {
  return (
    <div className="shop-quality-container">
      <div className="quality-item-container">
        <div className="img-container support-local" />
          <h3>Support local</h3>
          <p>All materials come from local producers.</p>
        </div>
      <div className="quality-item-container">
        <div className="img-container high-quality" />
          <h3>High quality</h3>
          <p>High quality materials are used.</p>
        </div>
      <div className="quality-item-container">
        <div className="img-container eco-friendly" />
          <h3>Eco Friendly</h3>
          <p>Eco friendly materials dummy text.</p>
      </div>
    </div>
  );
};
