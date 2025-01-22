import React, { useState, useEffect } from "react";

const TransferToken = ({
  setTransferModel,
  TRANSFER_TOKEN,
  ERC20,
  setLoader
}) => {
  const [tokenDetails, setTokenDetails] = useState();
  const [transferToken, setTransferToken] = useState();
  const [token, setToken] = useState({
    _sendTo: "",
    _amount: "",
    _tokenAddress: ""
  });

  useEffect(() => {
    if(transferToken) {
      const loadToken = async () => {
        setLoader(true);
        const token = await ERC20(transferToken);
        if(token == undefined) {
          console.log("Kindly past the token address");
        } else {
          setTokenDetails(token);
          console.log(token);
        }
        setLoader(false);
      }
    }

  }, [transferToken]);

  return (
    <div>

    </div>
  );
};

export default TransferToken;
