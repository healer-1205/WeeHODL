import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import styled from "styled-components";
import MetamaskImg from "../../assets/images/metamask.png"
import TelegramImg from "../../assets/images/telegram.png"
import Logo from "../../assets/images/weehodl-logo.png"

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default function Header() {

  return (
    <nav className="nav_bar">
      <div className="nav_container">
        <NavLink exact to="/" className="nav_logo">
          <img src={Logo} alt="Logo" width="60" />
        </NavLink>
        <ButtonWrapper>
          <Link to="telegram" className="login-link">
            <img src={TelegramImg} alt="metamask" width="20" />
            <span className="link-text">Telegram</span>
            <span className="link-text-mobile">Log In</span>
          </Link>
          <Link to="users/signup" className="login-link">
            <img src={MetamaskImg} alt="metamask" width="20" />
            <span className="link-text">Log into Investor Portal</span>
            <span className="link-text-mobile">Log In</span>
          </Link>
        </ButtonWrapper>
      </div>
    </nav>
  );
}