import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import Metamask from "assets/images/metamask.svg";
import WalletConnect from "assets/images/wallet_connect.svg";

// import context
import { useMaterialUIController, setAuthenticated, setAccount } from "context";

// css
import "./index.css";

function Basic() {
  const [controller, dispatch] = useMaterialUIController();
  const navigate = useNavigate();
  const [metamaskTitle, setMetamaskTitle] = useState("Metamask")

  const getAccount = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const account = accounts[0];
      return account;
    }
    setMetamaskTitle("Opening Metamask...");
    window.location.href = "https://metamask.io/download";
    return false;
  };

  const clickConnectWallet = () => {
    getAccount()
      .then((res) => {
        if (res !== false) {
          setAccount(dispatch, String(res));
          setAuthenticated(dispatch, true);
          navigate("/dashboard");
        }
      })
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
              <MDButton variant="gradient" color="info" fullWidth onClick={clickConnectWallet}>
                <img alt="metamask" src={Metamask} width="30" />
                {metamaskTitle}
              </MDButton>
            </MDBox>
            <MDBox mt={2} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth>
                <img alt="wallet_connect" src={WalletConnect} width="30" />
                Wallet Connect
              </MDButton>
            </MDBox>
            <MDBox mt={2} mb={1} className="telegram_container">
              <a href="https://t.me/+q7gyM9U0OXo4M2Q0" className="telegram">
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
