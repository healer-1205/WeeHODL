import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Material components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import Metamask from "assets/images/metamask.svg";
import WalletConnectImg from "assets/images/wallet_connect.svg";
import Telegram from "assets/images/telegram.png";

// import context
import { useMaterialUIController, setAuthenticated, setAccount } from "context";

// wallet connect
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';

// css
import "./index.css";

function Basic() {
  const [controller, dispatch] = useMaterialUIController();
  const navigate = useNavigate();
  const [metamaskTitle, setMetamaskTitle] = useState("Metamask")
  const { activate } = useWeb3React();

  const getAccount = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const accountAddress = accounts[0];
      return accountAddress;
    }
    setMetamaskTitle("Opening Metamask...");
    window.location.href = "https://metamask.io/download";
    return false;
  };

  const clickMetamask = () => {
    getAccount()
      .then((res) => {
        if (res !== false) {
          setAccount(dispatch, String(res));
          setAuthenticated(dispatch, true);
          navigate("/wallet");
        }
      })
  };

  const walletconnect = new WalletConnectConnector({
    rpc: {
      1: 'https://eth-mainnet.alchemyapi.io/v2/q1gSNoSMEzJms47Qn93f9-9Xg5clkmEC',
    },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    pollingInterval: 15000,
  });

  const connectWallet = async (connector) => {
    if (
      connector instanceof WalletConnectConnector &&
      connector.walletConnectProvider?.wc?.uri
    ) {
      connector.walletConnectProvider = undefined;
    }
    // eslint-disable-next-line
    connector &&
      activate(connector, undefined, true).catch((error) => {
        if (error instanceof UnsupportedChainIdError) {
          activate(connector); // a little janky...can't use setError because the connector isn't set
        }
      });
  };
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mt={2} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={clickMetamask}>
                <img alt="metamask" src={Metamask} width="30" />
                {metamaskTitle}
              </MDButton>
            </MDBox>
            <MDBox mt={2} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={() => { connectWallet(walletconnect); }}>
                <img alt="wallet_connect" src={WalletConnectImg} width="30" />
                Wallet Connect
              </MDButton>
            </MDBox>
            <MDBox mt={2} mb={1} className="telegram_container">
              <a href="https://t.me/+q7gyM9U0OXo4M2Q0" className="telegram">
                <img alt="telegram" src={Telegram} width="30" />
                TELEGRAM
              </a>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
