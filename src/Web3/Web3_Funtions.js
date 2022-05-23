import Web3 from "web3";
window.pro = window.ethereum
const web3 = new Web3(window.pro)


export const login =async()=> {
    window.ethereum.enable();
}

export const getUserAddress = async()=> {
    try {
        const address = await web3.eth.getAccounts();
    return address[0]
    } catch (error) {
        console.log(error)
    }
}

export const getContract = async(abi, address)=> {
    try {
        const Contract = new web3.eth.Contract(abi, address)
        return Contract
    } catch (error) {
        console.log(error)
    }
}
