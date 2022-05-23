import {ENV} from './Address'
import LP_Token from './Contracts/LP_Token'
import farming from './Contracts/LP_STAKING_FARMING'
import NFT from './Contracts/NFT'
import NFT_staking from './Contracts/NFT_Staking'
import Staking from './Contracts/Staking'
import { getContract } from './Web3_Funtions'


export const NFT_Balance =async()=>{
    const contract = await getContract(NFT, ENV.NFT)
    const balance = await contract.methods.balanceOf(window.address);
    return balance
}

export const NFT_Staking_Balance =async()=>{
    const contract = await getContract(NFT_staking, ENV.NFT_STAKINGL)
    // const balance = await contract.methods.balanceOf(window.address);
    // return balance
}