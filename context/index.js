import React, { useState } from "react";
import { ethers } from "ethers";
import toast from "react-hot-toast";

import { 
  CHECK_WALLET_CONNECTED,
  CONNECT_WALLET,
  GET_BALANCE,
  CHECK_ACCOUNT_BALANCE,
  TOKEN_ICO_CONTRACT,
  ERC20,
  ERC20_CONTRACT,
  TOKEN_ADDRESS,
  addtokenToMetaMask 
} from "./constants";

export const TOKEN_ICO_Context = React.createContext();

export const TOKEN_ICO_Provider = ({children}) => {
  const DAPP_NAME = "TOKEN ICO DAPP";
  const currency = "ETH";
  const network = "Holesky";

  const [loader, setLoader] = useState(false);
  const [account, setAccount] = useState();
  const [count, setCount] = useState(0);

  const notifySuccess = (msg) => toast.success(msg, {duration: 2000});
  const notifyError = (msg) => toast.error(msg, {duration: 2000});
// contract function ---
  const TOKEN_ICO = async () => {
    try {
      const address = await CHECK_WALLET_CONNECTED();

      if (address) {
        setLoader(true);
        setAccount(address);
        const contract = await TOKEN_ICO_CONTRACT();

        const tokenDetails = await contract.getTokenDetails();
        const contractOwner = await contract.owner();
        const soldTokens = await contract.soldTokens();
        const ethBal = await GET_BALANCE();

        const token = {
          tokenBal: ethers.utils.formatEther(tokenDetails.balance.toString()),
          name: tokenDetails.name,
          symbol: tokenDetails.symbol,
          supply: ethers.utils.formatEther(tokenDetails.supply.toString()),
          tokenPrice: ethers.utils.formatEther(
            tokenDetails.tokenPrice.toString()
          ),
          tokenAddr: tokenDetails.tokenAddr,
          maticBal: ethBal,
          address: address.toLowerCase(),
          owner: contractOwner.toLowerCase(),
          soldTokens: soldTokens.toNumber(),
        };

        setLoader(false);
        return token;
      }
    } catch (error) {
      console.log(error);
      notifyError("error try again later");
      setLoader(false);
    }
  };

  const BUY_TOKEN = async (amount) => {
    try {
      const address = await CHECK_WALLET_CONNECTED();

      if (address) {
        setLoader(true);
        const contract = await TOKEN_ICO_CONTRACT();
        const tokenDetails = await contract.getTokenDetails();

        const avaliableToken = ethers.utils.formatEther(
          tokenDetails.balance.toString()
        );

        if (avaliableToken > 1) {
          const price = ethers.utils.formatEther(
            tokenDetails.tokenPrice.toString()
          );

          const payAmount = ethers.utils.parseUnits(price.toString(), "ether");
          
          const transaction = await contract.buyToken(Number(account), {
            value: payAmount.toString(),
            gasLimit: ethers.utils.hexlify(8000000),
          });

          await transaction.wait();
          setLoader(false);
          notifySuccess("Transaction completed successfully");
          window.location.reload();
        }
      }
    } catch (error) {
      console.log(error);
      notifyError("error try again later"); 
      setLoader(false);
    }
  };

  const TOKEN_WITHDRAW = async () => {
    try {
      setLoader(true);
      const address = await CHECK_WALLET_CONNECTED();

      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();
        const tokenDetails = await contract.getTokenDetails();

        const avaliableToken = ethers.utils.formatEther(
          tokenDetails.balance.toString()
        );

        if (avaliableToken > 1) {
          const transaction = await contract.withdrawAllTokens();

          await transaction.wait();
          setLoader(false);
          notifySuccess("Transaction completed successfully");
          window.location.reload();
        }
      }
    } catch (error) {
      console.log(error);
      notifyError("error try again later"); 
      setLoader(false);
    }
  };

  const UPDATE_TOKEN = async (_address) => {
    try {
      setLoader(true);
      const address = await CHECK_WALLET_CONNECTED();

      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();
        const transaction = await contract.updateToken(_address);

        await transaction.wait();
        setLoader(false);
        notifySuccess("Transaction completed syccessfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      notifyError("error try again later"); 
      setLoader(false);
    }
  };

  const UPDATE_TOKEN_PRICE = async () => {
    try {
      setLoader(true);
      const address = await CHECK_WALLET_CONNECTED();

      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();
        const payAmount = ethers.utils.parseUnits(price.toString(), "ether");
        const transaction = await contract.updateTokenSalePrice(payAmount);

        await transaction.wait();
        setLoader(false);
        notifySuccess("Transaction completed syccessfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      notifyError("error try again later"); 
      setLoader(false);
    }
  };

  const DONATE = async (AMOUNT) => {
    try {
      setLoader(true);
      const address = await CHECK_WALLET_CONNECTED();

      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();
        const payAmount = ethers.utils.parseUnits(AMOUNT.toString(), "ether");
        const transaction = await contract.transferToOwner(payAmount, {
          value: payAmount.toString(),
          gasLimit: ethers.utils.hexlify(8000000),
        });

        await transaction.wait();
        setLoader(false);
        notifySuccess("Transaction completed syccessfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      notifyError("error try again later"); 
      setLoader(false);
    }
  };

  const TRANSFER_ETHER = async (transfer) => {
    try {
      setLoader(true);
      const {_receiver, _amount} = transfer;
      const address = await CHECK_WALLET_CONNECTED();

      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();
        const payAmount = ethers.utils.parseUnits(_amount.toString(), "ether");
        const transaction = await contract.transferEther(_receiver, payAmount,  {
          value: payAmount.toString(),
          gasLimit: ethers.utils.hexlify(8000000),
        } );

        await transaction.wait();
        setLoader(false);
        notifySuccess("Transaction completed syccessfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      notifyError("error try again later"); 
      setLoader(false);
    }
  };

  const TRANSFER_TOKEN = async (transfer) => {
    try {
      setLoader(true);
      const {_tokenAddress, _sendTo, _amount} = transfer;
      const address = await CHECK_WALLET_CONNECTED();

      if (address) {
        const contract = await ERC20_CONTRACT(_tokenAddress);
        const payAmount = ethers.utils.parseUnits(_amount.toString(), "ether");
        const transaction = await contract.transfer(_sendTo, payAmount, {
          gasLimit: ethers.utils.hexlify(8000000),
        });

        await transaction.wait();
        setLoader(false);
        notifySuccess("Transaction completed syccessfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      notifyError("error try again later"); 
      setLoader(false);
    }
  }

}; 