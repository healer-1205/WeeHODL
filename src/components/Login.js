import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { FaTelegramPlane } from "react-icons/fa"
import "../assets/css/login.css";
import { useNavigate } from "react-router-dom";

import Metamask from "../assets/images/metamask.svg"
import WalletConnect from "../assets/images/wallet_connect.svg"
import { useAuth } from "./context/useAuth";
// const Web3 = require("web3");

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const clickConnectWallet = () => {
    getAccount()
      .then((res) => {
        const currentAccount = String(res);
        auth.saveAccount(currentAccount);
        navigate("/user");
      })
  };

  const getAccount = async () => {
    let accounts, account;
    accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    account = accounts[0];
    return account;
  };
  return (
    <Content>
      <Title>Sign in to WeeHODL</Title>
      <ButtonWrapper>
        <Button variant="info" className="login-button metamask-login" onClick={clickConnectWallet}>
          <img alt="metamask" src={Metamask} width="30" />
          MetaMask
        </Button>
        <Button variant="info" className="login-button wallet-connect">
          <img alt="wallet_connect" src={WalletConnect} width="30" />
          Wallet Connect
        </Button>
        <a href="https://t.me/+q7gyM9U0OXo4M2Q0" className="login-button telegram">
          <FaTelegramPlane style={{marginRight: "10px"}} size={20} />
          telegram
        </a>
      </ButtonWrapper>
    </Content>
  );
};