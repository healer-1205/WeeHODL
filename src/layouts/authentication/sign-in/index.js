import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// wallet connect
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import * as web3 from "@solana/web3.js";
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
import { useMaterialUIController, setAuthenticated, setAccount, setChainId } from "context";
import {
  injected,
  walletconnect
} from "../../../constants/web3";

const Basic = () => {
  const [controller, dispatch] = useMaterialUIController();
  const navigate = useNavigate();
  const [metamaskTitle, setMetamaskTitle] = useState("Metamask");
  const [solflareTitle, setSolflareTitle] = useState("Solflare");
  const { activate, account, chainId, active } = useWeb3React();

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

  const solflareConnect = () => {
    const isSolflareInstalled = window.solflare && window.solflare.isSolflare;
    if (isSolflareInstalled) {
      const provider = window.solflare;
      if (provider.isSolflare) {
        window.solflare.connect();
      }
      window.solflare.on("connect", async () => {
        const  connection = new web3.Connection(
          web3.clusterApiUrl('mainnet-beta'),
          'confirmed',
        );
        const solAccount = await connection.getAccountInfo(window.solflare.publicKey);
        const solAccountAddress = window.solflare.publicKey.toBase58();
        setAccount(dispatch, String(solAccountAddress));
        setAuthenticated(dispatch, true);
        navigate("/wallet");
        // const registerData = {
        //   address: String(solAccountAddress),
        //   walletType: "Solflare"
        // };
        // axios
        //   .post("/users/register", registerData)
        //   .then(() => {navigate("/wallet")})
        //   .catch(err => {
        //     // eslint-disable-next-line
        //     console.log(err)
        //   });
      });
    }
    else {
      setSolflareTitle("Opening Solflare...");
      window.open('https://solflare.com', '_blank');
    }
  }

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
    if (active) {
      setAccount(dispatch, String(account));
      setAuthenticated(dispatch, true);
      setChainId(dispatch, chainId);
      navigate("/wallet");
      // const registerData = {
      //   address: String(account),
      //   walletType: "Metamask"
      // };
      // axios
      //   .post("/users/register", registerData)
      //   .then(() => {navigate("/wallet")})
      //   .catch(err => {
      //     // eslint-disable-next-line
      //     console.log(err)
      //   });
    }
  }, [active, chainId]);
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
              <MDButton variant="gradient" color="secondary" fullWidth onClick={() => { solflareConnect() }}>
                <img alt="wallet_connect" src={SolflareWalletImg} width="30" />
                {solflareTitle}
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
