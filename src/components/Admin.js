import React,{useState, useEffect} from 'react'
import {stop_single_staking, start_single_staking,single_staking_reward_add,single_staking_set_fee_address,single_staking_set_withdraw_fee} from './../Web3/Contract_methods'
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

export default function Admin() {

const [addreward, setAddreward] = useState(0)
const [feeaddress, setFeeAddress] = useState('')
const [withdrawfee, setWithdrawfee] = useState(0)


const rewardAdd =async()=> {
  try {
      const data = await single_staking_reward_add(addreward)
      if(data.status){
        tost()
      }
  } catch (error) {
      console.log(error)
  }
}

const setFeeaddress =async()=> {
    try {
        const data = await single_staking_set_fee_address(feeaddress)
        if(data.status){
            tost()
        }
    } catch (error) {
        console.log(error)
    }
}

const withdrawlfee = async()=>{
    try {
        const data = await single_staking_set_withdraw_fee(withdrawfee)
        if(data.status){
            tost()
        }
    } catch (error) {
        console.log(error)
    }
}

    
  return (
    <div className='admin p-5'>
        <div className='row justify-content-between'>
            <div className='row mb-5'> 
            <div className='col border mx-1 mt-3 p-3 text-center'>
            <div className="d-flex inputHarvest mb-3">
              <input
                className="p-2 bg-transparent w-100 border-0 text-light"
                placeholder="Amount"
                value={addreward}
                onChange={(e)=>setAddreward(e.target.value)}
              />
            </div>
                <button className='btnFill py-2' onClick={()=>rewardAdd()}>Add Reward</button>
            </div>
            <div className='col border mx-1 mt-3 p-3 text-center' >
            <div className="d-flex inputHarvest mb-3">
              <input
                className="p-2 bg-transparent w-100 border-0 text-light"
                placeholder="Address"
                value={feeaddress}
                onChange={(e)=>setFeeAddress(e.target.value)}
              />
            </div>
                <button className='btnFill py-2' onClick={()=>setFeeaddress()}>Set Fee Address</button>
            </div>
            <div className='col border mx-1 mt-3 p-3 text-center'>
            <div className="d-flex inputHarvest mb-3">
              <input
                className="p-2 bg-transparent w-100 border-0 text-light"
                placeholder="Amount"
                value={withdrawfee}
                onChange={(e)=>setWithdrawfee(e.target.value)}
              />
            </div>
                <button className='btnFill py-2' onClick={()=>withdrawlfee()}>Set Withdraw Fee</button>
            </div>
            </div>
            <div className='col border mx-1 mt-3 p-3 d-flex align-items-center justify-content-center'>
                <button className='btnFill py-2' onClick={()=>stop_single_staking()}>Stop Staking</button>
            </div>
            <div className='col border mx-1 mt-3 p-3 d-flex align-items-center justify-content-center'>
                <button className='btnFill py-2' onClick={()=>start_single_staking()}>Stop Staking</button>
            </div>
        </div>
    </div>
  )
}
