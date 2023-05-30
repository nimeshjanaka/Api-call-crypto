import React, { useState } from "react";
import { Button, Card } from "antd";
import axios from "axios";
import { useEffect } from "react";
import "./coin1.css";
import { Col, Row } from "reactstrap";

const gridStyle = {
  width: "25%",
  textAlign: "center",
};

let chainNames = [];

const Coin1 = () => {
  const [coinData, setCoinData] = useState();
  const [pathData, setPathData] = useState([]);
  const [chainData, setChainData] = useState([]);
  const [selectedChains, setSelectedChains] = useState([]);
  const [isButtonArbitrumClicked, setIsButtonArbitrumClicked] = useState(false);
  const [isButtonPolygonClicked, setButtonPolygonClicked] = useState(false);
  const [isButtonBscClicked, setIsButtonBscClicked] = useState(false);
  const [isButtonAvalancheClicked, setIsButtonAvalancheClicked] =
    useState(false);
  const [isButtonGnosisClicked, setIsButtonGnosisClicked] = useState(false);
  const [isButtonEthereumClicked, setIsButtonEthereumClicked] = useState(false);
  const [isButtonFantomClicked, setIsButtonFantomClicked] = useState(false);
  const [isButtonOptimismClicked, setIsButtonOptimismClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Call your function here
      fetchLatestData();
    }, 3000); // Set the delay in milliseconds

    // Clean up the timer when the component unmounts or the effect re-runs
    return () => clearInterval(interval);
  }, []);

  const fetchLatestData = async () => {
    console.log('calling....')
    axios
      .get("https://www.odos.xyz/api/latest-arbs") // Send the request to the proxy server
      .then((response) => {
        // console.log(response.data?.best_paths);
        setCoinData(response?.data);
        console.log(response?.data);
        setPathData(response.data?.best_paths);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChainNamesList = (chainName) => {
    console.log(chainName);

    if (chainName === "ethereum") {
      setIsButtonEthereumClicked(!isButtonEthereumClicked);
    }

    if (chainName === "polygon") {
      setButtonPolygonClicked(!isButtonPolygonClicked);
    }

    if (chainName === "bsc") {
      setIsButtonBscClicked(!isButtonBscClicked);
    }

    if (chainName === "avalanche") {
      setIsButtonAvalancheClicked(!isButtonAvalancheClicked);
      console.log("avalanche clicked");
    }

    if (chainName === "gnosis") {
      setIsButtonGnosisClicked(!isButtonGnosisClicked);
    }

    if (chainName === "fantom") {
      setIsButtonFantomClicked(!isButtonFantomClicked);
    }

    if (chainName === "optimism") {
      setIsButtonOptimismClicked(!isButtonOptimismClicked);
    }

    if (chainName === "arbitrum") {
      setIsButtonArbitrumClicked(!isButtonArbitrumClicked);
    }

    console.log("clicked ", chainName);

    const isIncludesChain = chainNames.includes(chainName);

    if (selectedChains.includes(chainName)) {
    } else {
    }
    if (!isIncludesChain) {
      chainNames.push(chainName);
    } else {
      var index = chainNames.indexOf(chainName);
      if (index > -1) {
        chainNames.splice(index, 1);
      }
    }

    console.log(chainNames);
    filterChains();
  };

  const filterChains = () => {
    console.log("running...");
    setChainData([]);
    pathData.forEach((element) => {
      const isAllEthChain = element?.path?.every((obj) =>
        chainNames.includes(obj.chain)
      );

      if (isAllEthChain) {
        setChainData((oldArray) => [...oldArray, element]);
      }
      console.log(isAllEthChain);
    });
  };

  useEffect(() => {
    console.log(chainData);
  }, [chainData]);

  useEffect(() => {
    filterChains()
  }, [coinData])

  // const RefreshComponent = () => {
  //   const [shouldRefresh, setShouldRefresh] = useState(false);

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       setShouldRefresh(true);
  //     }, 3000);

  //     return () => clearInterval(intervalId);
  // }, []);

  // useEffect(() => {
  //   if (shouldRefresh) {
  //     // Make any API calls or update the state that should trigger the refresh
  //     setShouldRefresh(false);
  //   }
  // }, [shouldRefresh]);

  return (
    <Card className="card mainCardGrid">
      <Card.Grid
        onClick={() => handleChainNamesList("ethereum")}
        style={gridStyle}
        className={isButtonEthereumClicked && `buttonActive`}
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
      <Card.Grid
        onClick={() => handleChainNamesList("polygon")}
        style={gridStyle}
        className={isButtonPolygonClicked && `buttonActive`}
      >
        <img
          src="https://www.odos.xyz/assets/chains/polygon.png"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.polygon_block}</p>
        </div>
      </Card.Grid>
      <Card.Grid
        onClick={() => handleChainNamesList("bsc")}
        style={gridStyle}
        className={isButtonBscClicked && `buttonActive`}
      >
        <img
          src="https://www.odos.xyz/assets/chains/bsc.png"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.bsc_block}</p>
        </div>
      </Card.Grid>
      <Card.Grid
        onClick={() => handleChainNamesList("avalanche")}
        style={gridStyle}
        className={isButtonAvalancheClicked && `buttonActive`}
      >
        <img
          src="https://www.odos.xyz/assets/chains/avalanche.png"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.avalanche_block}</p>
        </div>
      </Card.Grid>
      <Card.Grid
        onClick={() => handleChainNamesList("arbitrum")}
        style={gridStyle}
        className={isButtonArbitrumClicked && `buttonActive`}
      >
        <img
          src="https://www.odos.xyz/assets/chains/arbitrum.svg"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.arbitrum_block}</p>
        </div>
      </Card.Grid>
      <Card.Grid
        onClick={() => handleChainNamesList("fantom")}
        style={gridStyle}
        className={isButtonFantomClicked && `buttonActive`}
      >
        <img
          src="https://www.odos.xyz/assets/chains/fantom.png"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.fantom_block}</p>
        </div>
      </Card.Grid>
      <Card.Grid
        onClick={() => handleChainNamesList("gnosis")}
        style={gridStyle}
        className={isButtonGnosisClicked && `buttonActive`}
      >
        <img
          src="https://www.odos.xyz/assets/chains/gnosis.png"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.gnosis_block}</p>
        </div>
      </Card.Grid>
      <Card.Grid
        onClick={() => handleChainNamesList("optimism")}
        style={gridStyle}
        className={isButtonOptimismClicked && `buttonActive`}
      >
        <img
          src="https://www.odos.xyz/assets/chains/optimism.png"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.optimism_block}</p>
        </div>
      </Card.Grid>

      <div className="mt-3">
        <div className="d-flex">
          <div className="col-12 mx-2">
            <Button type="primary" className="w-100">
              Real Time
            </Button>
          </div>

          <div className="col-12 mx-3">
            <Button type="primary" className="w-100">
              Leadboard
            </Button>
          </div>
        </div>
      </div>
      <Row style={{ height: "500px", overflow: "auto" }}>
        {chainData.map((data) => (
          <Card
            className="mt-3 p-4"
            style={{ background: "#051c2c", border: "1px solid #031521" }}
          >
            <Row>
              <Col xxl="4" xl="4" lg="4" md="4" sm="4" xs="4">
                <Card
                  className="h-100 w-100 text-center text-light mx-3"
                  style={{ background: "#031521", border: "1px solid #031521" }}
                >
                  Input
                  <br />
                  {data?.path[0]?.token_in_reserve}
                  <br />
                  {data?.path[0]?.token_in_symbol}
                </Card>
              </Col>

              <Col xxl="4" xl="4" lg="4" md="4" sm="4" xs="4">
                <Card
                  className="h-100 w-100 text-center text-light mx-3"
                  style={{ background: "#031521", border: "1px solid #031521" }}
                >
                  Output
                  <br />
                  {data?.path[data?.path.length - 1]?.token_out_reserve}
                  <br />
                  {data?.path[data?.path.length - 1]?.token_out_symbol}
                </Card>
              </Col>

              <Col xxl="4" xl="4" lg="4" md="4" sm="4" xs="4">
                <Card
                  className="h-100 w-100 text-center text-light mx-3"
                  style={{
                    background: "#031521",
                    paddingLeft: "35px",
                    border: "1px solid #031521",
                  }}
                >
                  Profit <br />$ {parseFloat(data?.profitUSD.toFixed(6))}
                </Card>
              </Col>
            </Row>
          </Card>
        ))}
      </Row>
    </Card>
  );
};

export default Coin1;
