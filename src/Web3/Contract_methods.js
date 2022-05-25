import { ENV } from './Address'
import {LP_Token} from './Contracts/LP_Token'
import {farming} from './Contracts/LP_STAKING_FARMING'
import {NFT} from './Contracts/NFT'
import {NFT_staking} from './Contracts/NFT_Staking'
import {Staking} from './Contracts/Staking'
import {Ryoshi} from './../Web3/Contracts/Ryoshi'
import { getContract } from './Web3_Funtions'



export const Approv_Ryoshi_Staking_Contract = async () => {
  try {
    const contract = await getContract(Ryoshi, ENV.REWARD)
    const data = await contract.methods
      .approve(
        ENV.SINGLE_STAKING,
        115792089237316195423570985008687907853269984665640564039457584007913129639935n,
      )
      .send({ from: window.address })
    return data
  } catch (error) {
    console.log(error)
  }
}


export const Allowance_of_single_staking_contract = async () => {
  try {
    const contract = await getContract(Ryoshi, ENV.REWARD)
    const data = await contract.methods
      .allowance(window.address, ENV.SINGLE_STAKING)
      .call()
    return Number(data)
  } catch (error) {
    console.log(error)
  }
}


export const Ryoshi_Token_balance = async () => {
  try {
    const contract = await getContract(Ryoshi, ENV.REWARD)
    const data = await contract.methods.balanceOf(window.address).call()
    return Number(data)
  } catch (error) {
    console.log(error)
  }
}

export const Harvest_Ryoshi_Token_Staking = async () => {
    try {
        const contract = await getContract(Staking, ENV.SINGLE_STAKING)
        const data = await contract.methods
          .claimRewards(true)
          .send({from: window.address})
        return data
      } catch (error) {
        console.log(error)
      }
  }

  export const Staking_Ryoshi_Token = async (amount) => {
    try {
        const contract = await getContract(Staking, ENV.SINGLE_STAKING)
        const data = await contract.methods
          .stake(amount, true)
          .send({from: window.address})
        return data
      } catch (error) {
        console.log(error)
      }
  }
  export const Unstaking_Ryoshi_Token = async (amount) => {
    try {
        const contract = await getContract(Staking, ENV.SINGLE_STAKING)
        const data = await contract.methods
          .withdrawFunds(amount)
          .send({from: window.address})
        return data
      } catch (error) {
        console.log(error)
      }
  }

  export const Calculate_Pending_Reward = async () => {
    try {
        const contract = await getContract(Staking, ENV.SINGLE_STAKING)
        const data = await contract.methods
          .calculateRewards(window.address)
          .call();
        return data
      } catch (error) {
        console.log(error)
      }
  }

  export const Current_staking_balance = async () => {
    try {
        const contract = await getContract(Staking, ENV.SINGLE_STAKING)
        const data = await contract.methods
          .stakeholders(window.address)
          .call();
        return data
      } catch (error) {
        console.log(error)
      }
  }

  export const Approv_Ryoshi_ETH_Contract = async () => {
    try {
      const contract = await getContract(LP_Token, ENV.LP_TOKEN)
      const data = await contract.methods
        .approve(
          ENV.LP_STAKING_FARMING,
          115792089237316195423570985008687907853269984665640564039457584007913129639935n,
        )
        .send({ from: window.address })
      return data
    } catch (error) {
      console.log(error)
    }
  }

  export const Allowance_of_LP_Token_contract = async () => {
    try {
      const contract = await getContract(LP_Token, ENV.LP_TOKEN)
      const data = await contract.methods
        .allowance(window.address, ENV.LP_STAKING_FARMING)
        .call()
      return Number(data)
    } catch (error) {
      console.log(error)
    }
  }

  export const Staking_LP_Token = async (amount,pid) => {
    try {
        const contract = await getContract(farming, ENV.LP_STAKING_FARMING)
        const data = await contract.methods
          .Deposit(window.address, pid,amount)
          .send({from: window.address})
        return data
      } catch (error) {
        console.log(error)
      }
  }

  export const LP_Token_Balance = async () => {
    try {
      const contract = await getContract(LP_Token, ENV.LP_TOKEN)
        const data = await contract.methods.balanceOf(window.address).call()
        return data
      } catch (error) {
        console.log(error)
      }
  }

  export const LP_Token_User_Information = async () => {
    try {
      const contract = await getContract(farming, ENV.LP_STAKING_FARMING)
        const data = await contract.methods.userInfo(0,window.address).call()
        return data
      } catch (error) {
        console.log(error)
      }
  }

  export const LP_Token_Harvest = async (pid) => {
    try {
      const contract = await getContract(farming, ENV.LP_STAKING_FARMING)
        const data = await contract.methods.harvest(0).send({from: window.address});
        return data
      } catch (error) {
        console.log(error)
      }
  }

  export const LP_Token_UnStake = async (pid,amount) => {
    try {
      const contract = await getContract(farming, ENV.LP_STAKING_FARMING)
        const data = await contract.methods.Withdraw(window.address,pid,amount).call().send({from: window.address})
        return data
      } catch (error) {
        console.log(error)
      }
  }

  export const Approv_NFT_Staking_Contract = async (id) => {
    try {
      const contract = await getContract(NFT, ENV.NFT)
      const data = await contract.methods
        .approve(
          ENV.NFT_STAKINGL,
          id
        )
        .send({ from: window.address })
      return data
    } catch (error) {
      console.log(error)
    }
  }

  export const NFT_Balance = async () => {
    try {
      const contract = await getContract(NFT, ENV.NFT)
      const balance = await contract.methods.balanceOf(window.address).call();
      return balance
    } catch (error) {
      console.log(error)
    }
  }
  
  export const NFT_Staking_Balance_and_userinfo = async () => {
    try {
      const contract = await getContract(NFT_staking, ENV.NFT_STAKINGL)
      const balance = await contract.methods.userInfo(window.address).call();
      return balance
    } catch (error) {
      console.log(error)
    }
  }

  export const NFT_Staking_Reward_to_harvest = async () => {
    try {
      const contract = await getContract(NFT_staking, ENV.NFT_STAKINGL)
      const balance = await contract.methods.pendingRewards(window.address).call();
      return Number(balance)
    } catch (error) {
      console.log(error)
    }
  }

  export const NFT_Staking_harvest = async () => {
    try {
      const contract = await getContract(NFT_staking, ENV.NFT_STAKINGL)
      const balance = await contract.methods.getReward().send({from:window.address});
      return balance
    } catch (error) {
      console.log(error)
    }
  }

  export const NFT_Unstaking = async (id) => {
    try {
      const contract = await getContract(NFT_staking, ENV.NFT_STAKINGL)
      const balance = await contract.methods.unstake(id).send({from:window.address});
      return balance
    } catch (error) {
      console.log(error)
    }
  }

  export const get_user_owned_NFT = async (id) => {
    try {
      const contract = await getContract(NFT_staking, ENV.NFT_STAKINGL)
      const balance = await contract.methods.walletOfOwner(window.address).call();
      return balance
    } catch (error) {
      console.log(error)
    }
  }
  export const NFT_stake = async (id) => {
    try {
      const contract = await getContract(NFT, ENV.NFT)
      const balance = await contract.methods.stake(id).send({from:window.address});
      return balance
    } catch (error) {
      console.log(error)
    }
  }


 