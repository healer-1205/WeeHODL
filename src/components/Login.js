import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa"
import "../assets/css/login.css";

import Metamask from "../assets/images/metamask.svg"
import WalletConnect from "../assets/images/wallet_connect.svg"

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
  return (
    <Content>
      <Title>Sign in to WeeHODL</Title>
      <ButtonWrapper>
        <Button variant="info" className="login-button metamask-login">
          <img alt="metamask" src={Metamask} width="30" />
          MetaMask
        </Button>
        <Button variant="info" className="login-button wallet-connect">
          <img alt="wallet_connect" src={WalletConnect} width="30" />
          Wallet Connect
        </Button>
        <Link to="/" className="login-button logout">
          <FaSignOutAlt />
          Back to Home
        </Link>
      </ButtonWrapper>
    </Content>
  );
};