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
    if (transferToken) {
      const loadToken = async () => {
        setLoader(true);
        const token = await ERC20(transferToken);
        if (token == undefined) {
          console.log("Kindly past the token address");
        } else {
          setTokenDetails(token);
          console.log(token);
        }
        setLoader(false);
      };
    }

  }, [transferToken]);

  return (
    <section className="new-margin ico-contact pos-rel">
      <div className="container">
        <div className="ico-contact__wrap">
          <h2 className="title">Transfer Token</h2>

          <strong onClick={() => setTransferModel(false)}>x</strong>
        </div>

        <div>
          <div className="row">
            <div className="col-lg-12">
              {tokenDetails?.name ? (
                <input type="text"
                  value={`Name ${tokenDetails?.name}
                Balance: ${tokenDetails?.balance}
                ${tokenDetails?.symbol}`}
                />  
              ) : (
                <input type="text" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransferToken;
