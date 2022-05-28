import React, { useState, useEffect } from "react";
import logo from "../images/ryoshilogo.png";
import eth from "../images/eth.png";
import nft from "../images/nombre.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ImCopy } from "react-icons/im";
import {
  Ryoshi_Token_balance,
  Allowance_of_single_staking_contract,
  Approv_Ryoshi_Staking_Contract,
  Harvest_Ryoshi_Token_Staking,
  Staking_Ryoshi_Token,
  Calculate_Pending_Reward,
  Current_staking_balance,
  Approv_Ryoshi_ETH_Contract,
  Allowance_of_LP_Token_contract,
  Staking_LP_Token,
  LP_Token_Balance,
  LP_Token_User_Information,
  LP_Token_Harvest,
  Unstaking_Ryoshi_Token,
  Approv_NFT_Staking_Contract,
  get_user_owned_NFT,
  NFT_stake,
  NFT_Staking_Balance_and_userinfo,
  NFT_Balance,
  NFT_Staking_Reward_to_harvest,
  NFT_Staking_harvest,
  NFT_Unstaking
} from "./../Web3/Contract_methods";
import LiveStat from "./LiveStat";
import toast, { Toaster } from "react-hot-toast";

const tost = () =>
  toast.success("Success.", {
    style: {
      border: "1px solid #713200",
      padding: "10px",
      color: "#1C1C1C",
    },
    iconTheme: {
      primary: "#1C1C1C",
      secondary: "#FFFAEE",
    },
  });

export default function Staking() {
  const [balace_ryoshi, setBalace_Ryoshi] = useState(0);
  const [checkApprove, setCheckApprove] = useState(false);
  const [stakeAmount, setStakeAmount] = useState(0);
  const [harvestamount, setHarvestAmount] = useState(0);
  const [stakingBalance, setStakingBalance] = useState(0);
  const [BalanceToUnstake, setBaltounstale] = useState(0)
  const [stakeAmountLP, setStakeAmountLP] = useState(0);
  const [unstakeAmountLP, setUnStakeAmountLP] = useState(0);
  const [CheckApproveofTPtoken, setCheckApproveforLP] = useState(false);
  const [LPbalance, setLPbalance] = useState(0);
  const [LPstakingBalance, setLPstakingBalance] = useState(0);

  const [LPharvestamount, setLPharvestamount] = useState(0);
  const [NFTbalance, setNFTbalance] = useState(0);
  const [NFTStakeBalance, setNFTStakeBalance] = useState(0);
  const [NFTRewardtoHarvest, setNFTRewardtoHarvest] = useState(0)

  useEffect(() => {
    const init = async () => {
      try {
        if (window.address) {
          await Ryoshi_token_Balance();
          await CheckifApproveofTPtoken();
          await CheckIfApprove();
        

          const stakingbbal = await Current_staking_balance();
          setStakingBalance(stakingbbal.stakingBalance / 10 ** 18);
          setBaltounstale(stakingbbal.stakingBalance)
          const data = await Calculate_Pending_Reward();
          setHarvestAmount(data[0] / 10 ** 18);
          const info = await LP_Token_User_Information();
          setLPstakingBalance(info[0] / 10 ** 18);
          setUnStakeAmountLP(info[0])
          setLPharvestamount(info[1] / 10 ** 18);
          const nftbal = await NFT_Balance()
          setNFTbalance(nftbal)
          const nftuserinfo = await NFT_Staking_Balance_and_userinfo()
          setNFTStakeBalance(nftuserinfo[2])
          const nftharvestreward = await NFT_Staking_Reward_to_harvest()
          setNFTRewardtoHarvest(nftharvestreward)
          // console.log("stakingbbal", stakingbbal);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    setInterval(() => {
      try {
        init();
      } catch (error) {
        console.log("error", error);
      }
    }, 2000);
  }, [window.address]);

  const Ryoshi_token_Balance = async () => {
    const bal = await Ryoshi_Token_balance();
    setBalace_Ryoshi(bal / 10 ** 18);
    const lpbal = await LP_Token_Balance();
    setLPbalance(lpbal / 10 ** 18);
  };

  const Approve_Single_staking_Staking_token = async () => {
    try {
      if (checkApprove) {
        const data = await Staking_Ryoshi_Token(stakeAmount);
        if (data.status) {
          tost();
        }

      } else {
        await Approv_Ryoshi_Staking_Contract();
        setCheckApprove(data.status);
        const data = await Staking_Ryoshi_Token(stakeAmount);
        if (data.status) {
          tost();
        }
      }
    } catch (error) {
      console.log(error)
    }
  };

  const Approve_LP_and_Stake_LP = async () => {
    try {
      if (CheckApproveofTPtoken) {
        const data = await Staking_LP_Token(stakeAmountLP);
        if (data.status) {
          tost();
        }
      } else {
        const data1 = await Approv_Ryoshi_ETH_Contract();
        setCheckApproveforLP(data1.status);
        const data = await Staking_LP_Token(stakeAmountLP);
        if (data.status) {
          tost();
        }
      }
    } catch (error) {
      console.log(error)
    }
  };

  const Approve_NFT_and_Stake_NFT =async()=>{
    try {
      const data = await get_user_owned_NFT()
      console.log("NFT",data)
      if(data.length > 0){
        await Approv_NFT_Staking_Contract(data[0])
        const data2 = await NFT_stake(data[0])
        if (data2.status) {
          tost();
        }
      }
      else{
        alert("0 NFT Balance")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const Unstaking_Ryoshi = async () => {
    try {
      const data = await Unstaking_Ryoshi_Token(BalanceToUnstake);
    if(data.status){
      tost();
    }
    } catch (error) {
      console.log(error)
    }
  };

  const Harverting = async () => {
    try {
      const data = await Harvest_Ryoshi_Token_Staking();
    if (data.status) {
      tost();
    }
    } catch (error) {
      console.log(error)
    }
  };

  const Harvesting_NFT_reward = async(id)=>{
    try {
      const data = await NFT_Staking_harvest(id)
      if (data.status) {
        tost();
      }
    } catch (error) {
      console.log(error)
    }
  }

  const LP_harvest = async () => {
    try {
      const data = await LP_Token_Harvest();
    if (data.status) {
      tost();
    }
    } catch (error) {
      console.log(error)
    }
  };

  const CheckIfApprove = async () => {
    const data = await Allowance_of_single_staking_contract();
    if (data > 10) {
      setCheckApprove(true);
    }
  };


  const CheckifApproveofTPtoken = async () => {
    const data = await Allowance_of_LP_Token_contract();
    if (data > 0) {
      setCheckApproveforLP(true);
    }
  };


  const LPTokenUnstake = async () => {
    try {
      const data = await LP_Token_Harvest(0, unstakeAmountLP);
      if (data.status) {
        tost();
      }
    } catch (error) {
      console.log(error)
    }
  };

  const Unstake_NFTs = async(id)=>{
      try {
        const data = await NFT_Unstaking(id)
        if (data.status) {
          tost();
        }
      } catch (error) {
        console.log(error)
      }
  }


  const MaxStaking = async () => {
    setStakeAmount(balace_ryoshi);
  };

  const MaxLPStaking = async () => {
    setStakeAmountLP(LPbalance);
  };

  return (
    <div className="container-fluid staking-main">
      <div className="text-light mx-auto textContent" style={{maxWidth:"1440px"}}>
      <h1>RYOSHI FARMS</h1>
      <p>Stake Ryoshi Token &amp; Liquidity Pool (LP) to earn</p>
      </div>
      <Toaster position="top-left" reverseOrder={false} />
      {/* <LiveStat /> */}
      <div className="row justify-content-around justify-content-lg-between">
        <div className="col my-3 stakingA">
          <div className="ryoshi-head py-3 px-3">
            <h5>Total Value Locked</h5>
            <span className="fs-5">0000</span>
          </div>
        </div>
        <div className="col my-3 stakingA">
          <div className="ryoshi-head py-3 px-3">
            <h5>Total Rewards</h5>
            <span className="fs-5">0000</span>
          </div>
        </div>
        <div className="col my-3 stakingA">
          <div className="ryoshi-head py-3 px-3">
            <h5>Ryoshi Token Price</h5>
            <span className="fs-5">0000</span>
          </div>
        </div>
      </div>

      <div className="row justify-content-around justify-content-lg-between">
        {/* RYOSHI STAKING */}
        <div className="col my-3 stakingA">
          <div className="ryoshi-head py-3 d-flex justify-content-between px-3 border-bottom">
            <h5>RYOSHI STAKING</h5>
            {/* <span
              style={{
                backgroundColor: "#1E1E1E",
                padding: "5px",
                borderRadius: "3px",
              }}
            >
              5x
            </span> */}
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
              Token Address:{" "}
              <a
                href="https://testnet.bscscan.com/address/0xe8EF5905308cB836f71A98B0E62EF59C961DbA55"
                target="_blank"
                rel="noreferrer"
              >
                0xe8EF...DbA55
              </a>{" "}
              &nbsp;
              <ImCopy
                onClick={() =>
                  navigator.clipboard.writeText(
                    "0xe8EF5905308cB836f71A98B0E62EF59C961DbA55"
                  )
                }
              />
              {/* <a href="https://etherscan.io/token/0x9ac59862934ebc36072d4d8ada37c62373a13856" target="_blank">
              0x9ac5...13856
              </a> &nbsp; <ImCopy onClick={() => navigator.clipboard.writeText('0x9ac59862934ebc36072d4d8ada37c62373a13856')}/> */}
            </p>
            <h6 className="mt-4">
              Your Balance: <span>{balace_ryoshi.toFixed(2)}</span>
            </h6>
            <h6 className="mt-4">
              Staked Amount: <span>{stakingBalance.toFixed(2)}</span>
            </h6>
            <hr />
            <div className="apr d-flex justify-content-between">
              <span>APR</span>
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
            <div className="d-flex inputHarvest">
              <input
                className="p-2 bg-transparent w-100 border-0 text-light"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                placeholder="Stake Amount"
              />
              <button
                className="btn btn-outline-dark text-light"
                onClick={() => MaxStaking()}
              >
                MAX
              </button>
            </div>
            <button
              className="btnFill py-3 mt-4"
              onClick={() => Approve_Single_staking_Staking_token()}
            >
              {checkApprove ? "Stake" : "Approve Contract"}
            </button>
            {stakingBalance > 0 ? (
              <button
                className="btnFill py-3 mt-4"
                onClick={() => Unstaking_Ryoshi()}
              >
                Unstake
              </button>
            ) : (
              ""
            )}
            <div className="d-flex justify-content-between mt-3">
              <h5 className="text-light fs-5 my-auto">
                {harvestamount.toFixed(2)}
              </h5>
              <button
                onClick={() => Harverting()}
                className="btnFill py-3"
                style={{ width: "fit-content" }}
              >
                Harvest
              </button>
            </div>
          </div>
        </div>

        {/* RYOSHI-ETH STAKING */}
        <div className="col my-3 stakingA">
          <div className="ryoshi-head py-3 d-flex justify-content-between px-3 border-bottom">
            <h5>RYOSHI-ETH STAKING</h5>
            {/* <span
              style={{
                backgroundColor: "#1E1E1E",
                padding: "5px",
                borderRadius: "3px",
              }}
            >
              10x
            </span> */}
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
              LP Pair:{" "}
              <a
                href="https://www.dextools.io/app/ether/pair-explorer/0x5e4d0baf57a68956180580b94c1271c37558d300"
                target="_blank"
                rel="noreferrer"
              >
                0x5e4d...d300
              </a>{" "}
              &nbsp;
              <ImCopy
                onClick={() =>
                  navigator.clipboard.writeText(
                    "0x5e4d0baf57a68956180580b94c1271c37558d300"
                  )
                }
              />
            </p>
            <h6 className="mt-4">
              Your Balance: <span>{LPbalance.toFixed(2)}</span>
            </h6>
            <h6 className="mt-4">
              Staked Amount: <span>{LPstakingBalance.toFixed(2)}</span>
            </h6>
            <hr />
            <div className="apr d-flex justify-content-between">
              <span>APR</span>
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
            <div className="d-flex inputHarvest">
              <input
                className="p-2 bg-transparent w-100 border-0 text-light"
                value={stakeAmountLP}
                onChange={(e) => setStakeAmountLP(e.target.value)}
                placeholder="Stake Amount"
              />
              <button
                className="btn btn-outline-dark text-light"
                onClick={() => MaxLPStaking()}
              >
                MAX
              </button>
            </div>
            <button
              className="btnFill py-3 mt-4"
              onClick={() => Approve_LP_and_Stake_LP()}
            >
              {CheckApproveofTPtoken ? "Stake" : "Approve Contract"}
            </button>
            {LPstakingBalance > 0 ? (
              <button
                className="btnFill py-3 mt-4"
                onClick={() => LPTokenUnstake()}
              >
                Unstake
              </button>
            ) : (
              ""
            )}
            {/* <p>Staked</p> */}
            {/* <div
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
            </div> */}
            <div className="d-flex justify-content-between mt-3">
              <h5 className="text-light fs-5 my-auto">
                {LPharvestamount.toFixed(2)}
              </h5>
              <button
                className="btnFill py-3"
                style={{ width: "fit-content" }}
                onClick={() => LP_harvest()}
              >
                Harvest
              </button>
            </div>
          </div>
        </div>

        {/* RYOSHI-NFT STAKING */}
        <div className="col my-3 stakingA">
          <div className="ryoshi-head py-3 d-flex justify-content-between px-3 border-bottom">
            <h5>RYOSHI-NFT STAKING</h5>
            {/* <span
              style={{
                backgroundColor: "#1E1E1E",
                padding: "5px",
                borderRadius: "3px",
              }}
            >
              5x
            </span> */}
          </div>
          <div className="ryoshi-body px-3">
            <div
              id="fromTo"
              className="mt-5 mb-4 d-flex justify-content-around"
            >
              <div>
                <span>NFT + RYOSHI</span>
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
                    }}
                  />
                  {/* <img src={logo} alt="" style={{ maxHeight: "50px" }} /> */}
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
              NFT Staking:{" "}
              <a
                href="https://testnet.bscscan.com/address/0x23cC47885A0CeA881bDe3d9C386f735eCc6727a5"
                target="_blank"
                rel="noreferrer"
              >
                0x23cC...27a5
              </a>{" "}
              &nbsp;
              <ImCopy
                onClick={() =>
                  navigator.clipboard.writeText(
                    "0x23cC47885A0CeA881bDe3d9C386f735eCc6727a5"
                  )
                }
              />
            </p>
            <h6 className="mt-4">
              Your Balance: <span>{NFTbalance}</span>
            </h6>
            <h6 className="mt-4">
              Staked Amount: <span>{NFTStakeBalance}</span>
            </h6>
            <hr />
            <div className="apr d-flex justify-content-between">
              <span>APR</span>
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
            <button className="btnFill py-3 mt-4" onClick={()=>Approve_NFT_and_Stake_NFT()}>Approve Contract</button>
            {/* <p>Staked</p> */}
            {/* <div
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
            </div> */}
            <div className="d-flex justify-content-between mt-3">
              <h5 className="text-light fs-5 my-auto">{NFTRewardtoHarvest.toFixed(2)}</h5>
              <button className="btnFill py-3" style={{ width: "fit-content" }} onClick={()=>Harvesting_NFT_reward(0)}>
                Harvest
              </button>
              {NFTStakeBalance > 0 ? <button className="btnFill py-3" style={{ width: "fit-content" }} onClick={()=>Unstake_NFTs(0)}>
                Unstake
              </button> : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
