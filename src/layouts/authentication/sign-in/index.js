import React, { useEffect, useState } from "react";
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
import MetamaskImg from "assets/images/metamask.svg";
import WalletConnectImg from "assets/images/wallet_connect.svg";
import TrustWalletImg from "assets/images/trustWallet.svg";
import SolflareWalletImg from "assets/images/solflare.png";

// import context
import { useMaterialUIController, setAuthenticated, setAccount } from "context";

// wallet connect
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';

import {
  injected,
  walletconnect,
  lattice,
  walletlink,
  portis,
  torus
} from "../../../constants/web3";

function Basic() {
  const [controller, dispatch] = useMaterialUIController();
  const navigate = useNavigate();
  const [metamaskTitle, setMetamaskTitle] = useState("Metamask")
  const { activate, account, chainId } = useWeb3React();

  // const getAccount = async () => {
  //   if (window.ethereum) {
  //     const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  //     const accountAddress = accounts[0];
  //     return accountAddress;
  //   }
  //   setMetamaskTitle("Opening Metamask...");
  //   window.location.href = "https://metamask.io/download";
  //   return false;
  // };

  // const clickMetamask = () => {
  //   getAccount()
  //     .then((res) => {
  //       if (res !== false) {
  //         setAccount(dispatch, String(res));
  //         setAuthenticated(dispatch, true);
  //         navigate("/wallet");
  //       }
  //     })
  // };

  const connectWallet = async (connector, currentChainId) => {
    if (
      connector instanceof WalletConnectConnector &&
      connector.walletConnectProvider?.wc?.uri
    ) {
      connector.walletConnectProvider = undefined;
    }
    // eslint-disable-next-line
    connector &&
      activate(connector, undefined, true).catch((error) => {
        if (currentChainId === 1) {
          setMetamaskTitle("Opening Metamask...");
          window.location.href = "https://metamask.io/download";
        }
        if (error instanceof UnsupportedChainIdError) {
          activate(connector); // a little janky...can't use setError because the connector isn't set
        }
      });
  };
  useEffect(() => {
    if (account !== undefined) {
      setAccount(dispatch, String(account));
      setAuthenticated(dispatch, true);
      navigate("/wallet");
    }
  }, [account, chainId]);
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="secondary"
          borderRadius="lg"
          coloredShadow="secondary"
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
              <MDButton variant="gradient" color="secondary" fullWidth onClick={() => { connectWallet(injected, 1); }}>
                <img alt="metamask" src={MetamaskImg} width="30" />
                {metamaskTitle}
              </MDButton>
            </MDBox>
            <MDBox mt={2} mb={1}>
              <MDButton variant="gradient" color="secondary" fullWidth onClick={() => { connectWallet(injected, 1); }}>
                <img alt="wallet_connect" src={TrustWalletImg} width="30" />
                TrustWallet
              </MDButton>
            </MDBox>
            <MDBox mt={2} mb={1}>
              <MDButton variant="gradient" color="secondary" fullWidth onClick={() => { connectWallet(injected, 250); }}>
                <img alt="wallet_connect" src={SolflareWalletImg} width="30" />
                Solflare
              </MDButton>
            </MDBox>
            <MDBox mt={2} mb={1}>
              <MDButton variant="gradient" color="secondary" fullWidth onClick={() => { connectWallet(walletconnect); }}>
                <img alt="wallet_connect" src={WalletConnectImg} width="30" />
                Wallet Connect
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
