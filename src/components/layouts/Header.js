import React from "react";
import { NavLink } from "react-router-dom";
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
const CustomLink = styled.a`
  display: flex;
  text-decoration: none;
  background-color: rgba(5,11,33,1);
  color: white;
  font-size: 14px;
  border-radius: 40px;
  padding: 10px;
  border-color: rgba(41,169,235,1);
  border-width: 2px;
  border-style: solid;
  margin-left: 20px;
  &: hover {
    color: white;
  }
  @media (max-width: 415px) {
    border-radius: 15px;
  }
`;

export default function Header() {

  return (
    <nav className="nav_bar">
      <div className="nav_container">
        <NavLink exact to="/" className="nav_logo">
          <img src={Logo} alt="Logo" width="60" />
        </NavLink>
        <ButtonWrapper>
          <CustomLink href="/telegram">
            <img src={TelegramImg} alt="metamask" width="20" />
            <span className="link-text">Telegram</span>
            <span className="link-text-mobile">Log In</span>
          </CustomLink>
          <CustomLink href="/users/signup">
            <img src={MetamaskImg} alt="metamask" width="20" />
            <span className="link-text">Log into Investor Portal</span>
            <span className="link-text-mobile">Log In</span>
          </CustomLink>
        </ButtonWrapper>
      </div>
    </nav>
  );
}