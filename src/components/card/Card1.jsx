import React from "react";
import "./card1.css";

const Card1 = () => {
  return (
    <>
      <div className="my-4 rounded-x1 py-2" style={{ background: "#051c2c" }}>
        <div>
          <h2>Cross-Domain Arbitrage Tracker</h2>
          <div className="d-flex">
            <span className="my-auto">Optimal arbitrage calculated for</span>
            <span className="rounded-md p-1 bg-odosgray02 fw-bold">
              34,866,461 paths
            </span>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div
          className="text-center rounded-x1 py-2 mt-2"
          style={{ background: "#051c2c" }}
        >
          <span className="text-white odos-subtitle-3">Input <br />3.5679 LINK</span>
        </div>

        <div
          className="text-center rounded-x1 py-2 mt-2"
          style={{ background: "#051c2c" }}
        >
          <span className="text-white odos-subtitle-3">Output <br />3.5679 LINK</span>
        </div>

        <div
          className="text-center rounded-x1 py-2 mt-2"
          style={{ background: "#051c2c" }}
        >
          <span>Gross Profit <br />3.5679 LINK</span>
        </div>
      </div>
    </>
  );
};

export default Card1;
