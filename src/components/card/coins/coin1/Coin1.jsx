import React, { useState } from "react";
import { Card } from "antd";
import axios from "axios";
import { useEffect } from "react";
import "./coin1.css";

const gridStyle = {
  width: "25%",
  textAlign: "center",
};

let chainNames = [];

const Coin1 = () => {
  const [coinData, setCoinData] = useState();
  const [pathData, setPathData] = useState([]);
  const [chainData, setChainData] = useState([])
  const [selectedChains, setSelectedChains] = useState([])
  const [isButtonArbitrumClicked , setIsButtonArbitrumClicked] = useState(false);
  const [isButtonPolygonClicked , setButtonPolygonClicked] = useState(false);
  const [isButtonBscClicked , setIsButtonBscClicked] = useState(false);
  const [isButtonAvalancheClicked , setIsButtonAvalancheClicked] = useState(false);
  const [isButtonGnosisClicked , setIsButtonGnosisClicked] = useState(false);
  const [isButtonEthereumClicked , setIsButtonEthereumClicked] = useState(false);
  const [isButtonFantomClicked , setIsButtonFantomClicked] = useState(false);
  const [isButtonOptimismClicked , setIsButtonOptimismClicked] = useState(false);

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

    if (chainName === "ethereum"){
      setIsButtonEthereumClicked(!isButtonEthereumClicked);
    }

    if (chainName === "polygon"){
      setButtonPolygonClicked(!isButtonPolygonClicked);
    }

    if (chainName === "bsc"){
      setIsButtonBscClicked(!isButtonBscClicked);
    }

    if (chainName === "avalanche"){
      setIsButtonAvalancheClicked(!isButtonAvalancheClicked);
      console.log("avalanche clicked");
    }

    if (chainName === "gnosis"){
      setIsButtonGnosisClicked(!isButtonGnosisClicked);
    }

    if (chainName === "fantom"){
      setIsButtonFantomClicked(!isButtonFantomClicked);
    }

    if (chainName === "optimism"){
      setIsButtonOptimismClicked(!isButtonOptimismClicked);
    }

    if (chainName === "arbitrum"){
      setIsButtonArbitrumClicked(!isButtonArbitrumClicked);
    }




    console.log("clicked " , chainName);
    


    const isIncludesChain = chainNames.includes(chainName);

    if(selectedChains.includes(chainName)){

    }else{}
    if(!isIncludesChain) {
      chainNames.push(chainName)
    } else {
      var index = chainNames.indexOf(chainName);
      if (index > -1) {
        chainNames.splice(index, 1);
      }
    }

    console.log(chainNames)
    filterChains()
  };

  const filterChains = () => {
    console.log('running...')
    setChainData([])
    pathData.forEach((element) => {
      const isAllEthChain = element?.path?.every(
        (obj) => chainNames.includes(obj.chain)
      );

      if (isAllEthChain) {
        setChainData(oldArray => [...oldArray, element])
      }
      console.log(isAllEthChain)
    });
  }

  useEffect(() => {
    console.log(chainData)
  }, [chainData])


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
    <Card className="card mainCardGrid" >
      <Card.Grid 
        onClick={() => handleChainNamesList("ethereum")}
        style={gridStyle}
        className={isButtonEthereumClicked && `buttonActive` }
      >
        <img
          src="https://www.odos.xyz/assets/chains/ethereum.png"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.ethereum_block}</p>
        </div>
      </Card.Grid >
      <Card.Grid onClick={() => handleChainNamesList("polygon")} style={gridStyle}
       className={isButtonPolygonClicked && `buttonActive` } >
        <img
          src="https://www.odos.xyz/assets/chains/polygon.png"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.polygon_block}</p>
        </div>
      </Card.Grid>
      <Card.Grid onClick={() => handleChainNamesList("bsc")} style={gridStyle}
      className={isButtonBscClicked && `buttonActive` } >
        <img
          src="https://www.odos.xyz/assets/chains/bsc.png"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.bsc_block}</p>
        </div>
      </Card.Grid>
      <Card.Grid onClick={() => handleChainNamesList("avalanche")} style={gridStyle}
        className={isButtonAvalancheClicked && `buttonActive` } >
        <img
          src="https://www.odos.xyz/assets/chains/avalanche.png"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.avalanche_block}</p>
        </div>
      </Card.Grid>
      <Card.Grid onClick={() => handleChainNamesList("arbitrum")} style={gridStyle}
      className={isButtonArbitrumClicked && `buttonActive` }>
        <img
          src="https://www.odos.xyz/assets/chains/arbitrum.svg"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.arbitrum_block}</p>
        </div>
      </Card.Grid>
      <Card.Grid onClick={() => handleChainNamesList("fantom")} style={gridStyle}
      className={isButtonFantomClicked && `buttonActive` }>
        <img
          src="https://www.odos.xyz/assets/chains/fantom.png"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.fantom_block}</p>
        </div>
      </Card.Grid>
      <Card.Grid onClick={() => handleChainNamesList("gnosis")} style={gridStyle}
      className={isButtonGnosisClicked && `buttonActive` }>
        <img
          src="https://www.odos.xyz/assets/chains/gnosis.png"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.gnosis_block}</p>
        </div>
      </Card.Grid>
      <Card.Grid onClick={() => handleChainNamesList("optimism")} style={gridStyle}
      className={isButtonOptimismClicked && `buttonActive` }>
        <img
          src="https://www.odos.xyz/assets/chains/optimism.png"
          alt="coin1"
          width="60px"
        />
        <div>
          <p>{coinData?.optimism_block}</p>
        </div>
      </Card.Grid>
      
      <div className='b'>
      <button>Real Time</button>
      <button>Leadboard</button>  
    </div>
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
