import React, { useState } from "react";
import { Card } from "antd";
import axios from "axios";
import { useEffect } from "react";
import "./coin1.css";

const gridStyle = {
  width: "25%",
  textAlign: "center",
};

let chainData = [];
let chainNames = [];

const Coin1 = () => {
  const [coinData, setCoinData] = useState();
  const [pathData, setPathData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.odos.xyz/api/latest-arbs") // Send the request to the proxy server
      .then((response) => {
        // console.log(response.data?.best_paths);
        setCoinData(response?.data);
        setPathData(response.data?.best_paths);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChainNamesList = (chainName) => {
    console.log(chainName);
    const isIncludesChain = chainNames.includes(chainName);

    if(!isIncludesChain) {
      chainNames.push(chainName)
    } else {
      var index = chainNames.indexOf(chainName);
      if (index > -1) {
        chainNames.splice(index, 1);
      }
    }

    console.log(chainNames)
  };

  useEffect(() => {
    chainData = [];
    pathData.forEach((element) => {
      const isAllEthChain = element?.path?.every(
        (obj) => chainNames.includes(obj.chain)
      );

      if (isAllEthChain) {
        chainData.push(element);
      }
      console.log(isAllEthChain)
    });

    console.log(chainData);
  }, [pathData, chainNames]);

  return (
    <Card className="card">
      <Card.Grid
        onClick={() => handleChainNamesList("ethereum")}
        style={gridStyle}
      >
        <img
          src="https://www.odos.xyz/assets/chains/ethereum.png"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.ethereum_block}</p>
        </div>
      </Card.Grid>
      <Card.Grid onClick={() => handleChainNamesList("polygon")} style={gridStyle}>
        <img
          src="https://www.odos.xyz/assets/chains/polygon.png"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.polygon_block}</p>
        </div>
      </Card.Grid>
      <Card.Grid onClick={() => handleChainNamesList("bsc")} style={gridStyle}>
        <img
          src="https://www.odos.xyz/assets/chains/bsc.png"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.bsc_block}</p>
        </div>
      </Card.Grid>
      <Card.Grid onClick={() => handleChainNamesList("avalanche")} style={gridStyle}>
        <img
          src="https://www.odos.xyz/assets/chains/avalanche.png"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.avalanche_block}</p>
        </div>
      </Card.Grid>
      <Card.Grid onClick={() => handleChainNamesList("arbitrum")} style={gridStyle}>
        <img
          src="https://www.odos.xyz/assets/chains/arbitrum.svg"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.arbitrum_block}</p>
        </div>
      </Card.Grid>
      <Card.Grid onClick={() => handleChainNamesList("fantom")} style={gridStyle}>
        <img
          src="https://www.odos.xyz/assets/chains/fantom.png"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.fantom_block}</p>
        </div>
      </Card.Grid>
      <Card.Grid onClick={() => handleChainNamesList("gnosis")} style={gridStyle}>
        <img
          src="https://www.odos.xyz/assets/chains/gnosis.png"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.gnosis_block}</p>
        </div>
      </Card.Grid>
      <Card.Grid onClick={() => handleChainNamesList("optimism")} style={gridStyle}>
        <img
          src="https://www.odos.xyz/assets/chains/optimism.png"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.optimism_block}</p>
        </div>
      </Card.Grid>

      <div className="coin-data-test">
        {chainData.map((data) => (
          <>
            <Card className="main-input-card">
              <Card className="input-card">
                Input: {data?.path[0]?.token_in_reserve}{" "}
                {data?.path[0]?.token_in_symbol}
              </Card>
              <Card className="input-card">
                Output: {data?.path[data?.path.length - 1]?.token_out_reserve}{" "}
                {data?.path[data?.path.length - 1]?.token_out_symbol}
              </Card>
              <Card className="input-card">Profit: {data?.profitUSD}</Card>
            </Card>
            <hr />
          </>
        ))}
      </div>
    </Card>
  );
};

export default Coin1;
