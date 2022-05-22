import React from "react";
import logo from "../images/ryoshilogo.png";
import eth from "../images/eth.png";
import nft from "../images/nombre.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ImNewTab } from "react-icons/im";

export default function Staking() {
  return (
    <div className="container-fluid staking-main">
      <div className="row justify-content-around justify-content-lg-between">

        {/* RYOSHI STAKING */}
        <div className="col-lg-5 col-10 my-3 stakingA">
          <div className="ryoshi-head py-3 d-flex justify-content-between px-3 border-bottom">
            <h5>RYOSHI STAKING</h5>
            <span
              style={{
                backgroundColor: "#1E1E1E",
                padding: "5px",
                borderRadius: "3px",
              }}
            >
              5x
            </span>
          </div>
          <div className="ryoshi-body px-3">
            <div
              id="fromTo"
              className="mt-5 mb-4 d-flex justify-content-around"
            >
              <div>
                <span>RYOSHI</span>
                <div
                  className="p-2 rounded"
                  style={{
                    backgroundColor: "#383838",
                    height: "fit-content",
                    width: "fit-content",
                  }}
                >
                  <img src={logo} alt="" style={{ maxHeight: "50px" }} />
                </div>
              </div>
              <FaLongArrowAltRight className="my-auto fs-4 text-light" />
              <div>
                <span>RYOSHI</span>
                <div
                  className="p-2 rounded"
                  style={{
                    backgroundColor: "#383838",
                    height: "fit-content",
                    width: "fit-content",
                  }}
                >
                  <img src={logo} alt="" style={{ maxHeight: "50px" }} />
                </div>
              </div>
            </div>
            <p>
              Liquidity:{" "}
              <a href="#">
                $450,184 <ImNewTab />
              </a>
            </p>
            <h6 className="mt-4">Contract</h6>
            <hr />
            <div className="apr d-flex justify-content-between">
              <span>
                APR <ImNewTab />
              </span>
              <span>16.457%</span>
            </div>
            <div className="apr d-flex justify-content-between">
              <span>Deposit Fee</span>
              <span>3%</span>
            </div>
            <div className="apr d-flex justify-content-between">
              <span>Harvest Lockup</span>
              <span>12 Hour(s)</span>
            </div>
            <button className="btnFill py-3 mt-4">Approve Contract</button>
            <div className="d-flex justify-content-between mt-3">
              <h5 className="text-light fs-3 my-auto">0.0</h5>
              <button
                disabled
                className="btnFill py-3"
                style={{ width: "fit-content" }}
              >
                Harvest
              </button>
            </div>
          </div>
        </div>

        {/* RYOSHI-ETH STAKING */}
        <div className="col-lg-5 col-10 my-3 stakingA">
          <div className="ryoshi-head py-3 d-flex justify-content-between px-3 border-bottom">
            <h5>RYOSHI-ETH STAKING</h5>
            <span
              style={{
                backgroundColor: "#1E1E1E",
                padding: "5px",
                borderRadius: "3px",
              }}
            >
              10x
            </span>
          </div>
          <div className="ryoshi-body px-3">
            <div
              id="fromTo"
              className="mt-5 mb-4 d-flex justify-content-around"
            >
              <div>
                <span>ETH + RYOSHI</span>
                <div
                  className="p-2 rounded"
                  style={{
                    backgroundColor: "#383838",
                    height: "fit-content",
                    width: "fit-content",
                  }}
                >
                  <img
                    src={eth}
                    alt=""
                    style={{
                      maxHeight: "50px",
                      border: "1px double #4B4B4B",
                      borderRadius: "50%",
                      marginRight: "5px",
                    }}
                  />
                  <img src={logo} alt="" style={{ maxHeight: "50px" }} />
                </div>
              </div>
              <FaLongArrowAltRight className="my-auto fs-4 text-light" />
              <div>
                <span>RYOSHI</span>
                <div
                  className="p-2 rounded"
                  style={{
                    backgroundColor: "#383838",
                    height: "fit-content",
                    width: "fit-content",
                  }}
                >
                  <img src={logo} alt="" style={{ maxHeight: "50px" }} />
                </div>
              </div>
            </div>
            <p>
              Liquidity:{" "}
              <a href="#">
                $1,250,184 <ImNewTab />
              </a>
            </p>
            <h6 className="mt-4">Contract</h6>
            <hr />
            <div className="apr d-flex justify-content-between">
              <span>
                APR <ImNewTab />
              </span>
              <span>16.457%</span>
            </div>
            <div className="apr d-flex justify-content-between">
              <span>Deposit Fee</span>
              <span>3%</span>
            </div>
            <div className="apr d-flex justify-content-between">
              <span>Harvest Lockup</span>
              <span>Complete</span>
            </div>
            {/* <button className="btnFill py-3 mt-4">Approve Contract</button> */}
            <p>Staked</p>
            <div
              className="py-3 rounded-1 px-3"
              style={{ backgroundColor: "#353535" }}
            >
              <span
                style={{
                  backgroundColor: "#222222",
                  color: "#fff",
                  borderRadius: "3px",
                  padding: "2px 5px",
                  margin: "auto 5px",
                }}
              >
                0.1969 BNB
              </span>
              <span
                style={{
                  backgroundColor: "#222222",
                  color: "#fff",
                  borderRadius: "3px",
                  padding: "2px 5px",
                  margin: "auto 5px",
                }}
              >
                154877954... RYOSHI
              </span>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <h5 className="text-light fs-3 my-auto">1159542.1548...</h5>
              <button className="btnFill py-3" style={{ width: "fit-content" }}>
                Harvest
              </button>
            </div>
          </div>
        </div>

        {/* RYOSHI-NFT STAKING */}
        <div className="col-lg-5 col-10 my-3 stakingA">
          <div className="ryoshi-head py-3 d-flex justify-content-between px-3 border-bottom">
            <h5>RYOSHI-NFT STAKING</h5>
            <span
              style={{
                backgroundColor: "#1E1E1E",
                padding: "5px",
                borderRadius: "3px",
              }}
            >
              5x
            </span>
          </div>
          <div className="ryoshi-body px-3">
            <div
              id="fromTo"
              className="mt-5 mb-4 d-flex justify-content-around"
            >
              <div>
                <span>NFt + RYOSHI</span>
                <div
                  className="p-2 rounded"
                  style={{
                    backgroundColor: "#383838",
                    height: "fit-content",
                    width: "fit-content",
                  }}
                >
                  <img
                    src={nft}
                    alt=""
                    style={{
                      maxHeight: "50px",
                      marginRight: "5px",
                    }}
                  />
                  <img src={logo} alt="" style={{ maxHeight: "50px" }} />
                </div>
              </div>
              <FaLongArrowAltRight className="my-auto fs-4 text-light" />
              <div>
                <span>RYOSHI</span>
                <div
                  className="p-2 rounded"
                  style={{
                    backgroundColor: "#383838",
                    height: "fit-content",
                    width: "fit-content",
                  }}
                >
                  <img src={logo} alt="" style={{ maxHeight: "50px" }} />
                </div>
              </div>
            </div>
            <p>
              Liquidity:{" "}
              <a href="#">
                $1,250,184 <ImNewTab />
              </a>
            </p>
            <h6 className="mt-4">Contract</h6>
            <hr />
            <div className="apr d-flex justify-content-between">
              <span>
                APR <ImNewTab />
              </span>
              <span>16.457%</span>
            </div>
            <div className="apr d-flex justify-content-between">
              <span>Deposit Fee</span>
              <span>3%</span>
            </div>
            <div className="apr d-flex justify-content-between">
              <span>Harvest Lockup</span>
              <span>Complete</span>
            </div>
            {/* <button className="btnFill py-3 mt-4">Approve Contract</button> */}
            <p>Staked</p>
            <div
              className="py-3 rounded-1 px-3"
              style={{ backgroundColor: "#353535" }}
            >
              <span
                style={{
                  backgroundColor: "#222222",
                  color: "#fff",
                  borderRadius: "3px",
                  padding: "2px 5px",
                  margin: "auto 5px",
                }}
              >
                0.1969 BNB
              </span>
              <span
                style={{
                  backgroundColor: "#222222",
                  color: "#fff",
                  borderRadius: "3px",
                  padding: "2px 5px",
                  margin: "auto 5px",
                }}
              >
                154877954... RYOSHI
              </span>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <h5 className="text-light fs-3 my-auto">1154789.1548...</h5>
              <button className="btnFill py-3" style={{ width: "fit-content" }}>
                Harvest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
