import React, { useEffect } from "react";
import "../assets/css/home.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import TopContributePresail from "../assets/images/top-contribute-presail.png";
import Shape2 from "../assets/images/shape-2.png";
import styled from "styled-components";
import Xcap_Logo from "../assets/images/clients/0xcap-logo.png";
import Vc_Logo from "../assets/images/clients/316vc-logo.png";
import Alpha_Logo from "../assets/images/clients/alpha-logo.png";
import Chateau_Logo from "../assets/images/clients/chateau-logo.png";
import Chihua_Logo from "../assets/images/clients/chihua-logo.png";
import Company_Logo from "../assets/images/clients/company-logo.png";
import Dutch_Crypto_Logo from "../assets/images/clients/dutch-crypto-logo.png";
import Emerald_Logo from "../assets/images/clients/emerald-logo.png";
import Ferrum_Logo from "../assets/images/clients/ferrum-logo.png";
import Game_Station_Logo from "../assets/images/clients/game-station-logo.png";
import Gamesta_Logo from "../assets/images/clients/gamesta-logo.png";
import Legion_Ventures_Logo from "../assets/images/clients/legion-ventures-logo.png";
import Lepricon_Logo from "../assets/images/clients/lepricon-logo.png";
import Mars_Dao_Logo from "../assets/images/clients/mars-dao-logo.png";
import Master_Logo from "../assets/images/clients/master-logo.png";
import Moongems_Logo from "../assets/images/clients/moongems-logo.png";
import Skyx_Logo from "../assets/images/clients/skyx-logo.png";
import Trust_Logo from "../assets/images/clients/trust-logo.png";
import Vespertine_Logo from "../assets/images/clients/vespertine-logo.png";
import Ysc_Logo from "../assets/images/clients/ysc-logo.png";

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const Home = () => {
  useEffect(() => {
    console.log("page start");
  });
  return (
    <div style={{ position: "relative" }}>
      <img src={Shape2} alt="Shape2" className="shape2-img"></img>
      <Container className="about-container">
        <Row className="about">
          <Col className="title-content" xs={12} sm={12} md={7} lg={7} xl={7}>
            <p className="about-title how-pros-text">How the pros do it</p>
            <p className="about-title manage-platform-text">
              presale management platform
            </p>
            <p className="about-title ease-of-use">
              Goodbye Google Forms. Hello security, collaboration and ease-of-use
            </p>
            <div className="demo-button-div">
              <Button variant="info" className="demo-button">Book demo</Button>
            </div>
          </Col>
          <Col className="image-content" xs={12} sm={12} md={5} lg={5} xl={5}>
            <img src={TopContributePresail} alt="topImage" className="top-image" />
          </Col>
        </Row>
      </Container>
      <Container className="clients-desktopView">
        <p className="clients-text">Some of Our Clients</p>
        <Row>
          <Col xs={0} sm={0} md={1} xl={1} lg={1}></Col>
          <Col xs={12} sm={12} md={10} xl={10} lg={10}>
            <ImageContainer>
              <ImageWrapper>
                <img className="client-image" alt="client" src={Xcap_Logo} />
              </ImageWrapper>
              <ImageWrapper>
                <img className="client-image" alt="client" src={Vc_Logo} />
              </ImageWrapper>
              <ImageWrapper>
                <img className="client-image" alt="client" src={Alpha_Logo} />
              </ImageWrapper>
              <ImageWrapper>
                <img className="client-image" alt="client" src={Chateau_Logo} />
              </ImageWrapper>
              <ImageWrapper>
                <img className="client-image" alt="client" src={Chihua_Logo} />
              </ImageWrapper>
            </ImageContainer>
          </Col>
          <Col xs={0} sm={0} md={1} xl={1} lg={1}></Col>
        </Row>
        <Row>
          <Col xs={0} sm={0} md={1} xl={1} lg={1}></Col>
          <Col xs={12} sm={12} md={10} xl={10} lg={10}>
            <ImageContainer>
              <ImageWrapper>
                <img className="client-image" alt="client" src={Company_Logo} />
              </ImageWrapper>
              <ImageWrapper>
                <img className="client-image" alt="client" src={Dutch_Crypto_Logo} />
              </ImageWrapper>
              <ImageWrapper>
                <img className="client-image" alt="client" src={Emerald_Logo} />
              </ImageWrapper>
              <ImageWrapper>
                <img className="client-image" alt="client" src={Ferrum_Logo} />
              </ImageWrapper>
              <ImageWrapper>
                <img className="client-image" alt="client" src={Game_Station_Logo} />
              </ImageWrapper>
            </ImageContainer>
          </Col>
          <Col xs={0} sm={0} md={1} xl={1} lg={1}></Col>
        </Row>
        <Row>
          <Col xs={0} sm={0} md={1} xl={1} lg={1}></Col>
          <Col xs={12} sm={12} md={10} xl={10} lg={10}>
            <ImageContainer>
              <ImageWrapper>
                <img className="client-image" alt="client" src={Gamesta_Logo} />
              </ImageWrapper>
              <ImageWrapper>
                <img className="client-image" alt="client" src={Legion_Ventures_Logo} />
              </ImageWrapper>
              <ImageWrapper>
                <img className="client-image" alt="client" src={Lepricon_Logo} />
              </ImageWrapper>
              <ImageWrapper>
                <img className="client-image" alt="client" src={Mars_Dao_Logo} />
              </ImageWrapper>
              <ImageWrapper>
                <img className="client-image" alt="client" src={Master_Logo} />
              </ImageWrapper>
            </ImageContainer>
          </Col>
          <Col xs={0} sm={0} md={1} xl={1} lg={1}></Col>
        </Row>
        <Row>
          <Col xs={0} sm={0} md={1} xl={1} lg={1}></Col>
          <Col xs={12} sm={12} md={10} xl={10} lg={10}>
            <ImageContainer>
              <ImageWrapper>
                <img className="client-image" alt="client" src={Moongems_Logo} />
              </ImageWrapper>
              <ImageWrapper>
                <img className="client-image" alt="client" src={Skyx_Logo} />
              </ImageWrapper>
              <ImageWrapper>
                <img className="client-image" alt="client" src={Trust_Logo} />
              </ImageWrapper>
              <ImageWrapper>
                <img className="client-image" alt="client" src={Vespertine_Logo} />
              </ImageWrapper>
              <ImageWrapper>
                <img className="client-image" alt="client" src={Ysc_Logo} />
              </ImageWrapper>
            </ImageContainer>
          </Col>
          <Col xs={0} sm={0} md={1} xl={1} lg={1}></Col>
        </Row>
      </Container>
    </div>
  );
};
