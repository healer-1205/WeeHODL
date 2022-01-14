import React from "react";
import "../../assets/css/home.scss";
import Header from "../layouts/Header";
import { Container, Row, Col, Button } from "react-bootstrap";
import TopContributePresail from "../../assets/images/top-contribute-presail.png";
import styled from "styled-components";
import { FaShieldAlt, FaEuroSign, FaWifi, FaUserSecret, FaBezierCurve, FaLayerGroup, FaCrown, FaGalacticRepublic, FaKey, FaHandshake } from "react-icons/fa";
import { DeveloperCard } from "./DeveloperCard";

import Shape2 from "../../assets/images/shape-2.png";
import Xcap_Logo from "../../assets/images/clients/0xcap-logo.png";
import Vc_Logo from "../../assets/images/clients/316vc-logo.png";
import Alpha_Logo from "../../assets/images/clients/alpha-logo.png";
import Chateau_Logo from "../../assets/images/clients/chateau-logo.png";
import Chihua_Logo from "../../assets/images/clients/chihua-logo.png";
import Company_Logo from "../../assets/images/clients/company-logo.png";
import Dutch_Crypto_Logo from "../../assets/images/clients/dutch-crypto-logo.png";
import Emerald_Logo from "../../assets/images/clients/emerald-logo.png";
import Ferrum_Logo from "../../assets/images/clients/ferrum-logo.png";
import Game_Station_Logo from "../../assets/images/clients/game-station-logo.png";
import Gamesta_Logo from "../../assets/images/clients/gamesta-logo.png";
import Legion_Ventures_Logo from "../../assets/images/clients/legion-ventures-logo.png";
import Lepricon_Logo from "../../assets/images/clients/lepricon-logo.png";
import Mars_Dao_Logo from "../../assets/images/clients/mars-dao-logo.png";
import Master_Logo from "../../assets/images/clients/master-logo.png";
import Moongems_Logo from "../../assets/images/clients/moongems-logo.png";
import Skyx_Logo from "../../assets/images/clients/skyx-logo.png";
import Trust_Logo from "../../assets/images/clients/trust-logo.png";
import Vespertine_Logo from "../../assets/images/clients/vespertine-logo.png";
import Ysc_Logo from "../../assets/images/clients/ysc-logo.png";
import MockupPresail from "../../assets/images/mockuppresail.png";

import Ian from "../../assets/images/developers/ian.jpg";
import Marsdao from "../../assets/images/developers/marsdao.png";
import Team1 from "../../assets/images/developers/team-1.png";
import Team2 from "../../assets/images/developers/team-2.png";

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

const SecurityContent = styled.div`
  padding-top: 4%;
  display: flex;
  align-items: center;
`;

export const Home = () => {

  return (
    <div className="home-page">
      <Header />
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
        <Container className="security-content">
          <Row>
            <Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>
            <Col xs={12} sm={12} md={8} lg={8} xl={8}>
              <p className="about-title security-title" style={{ color: "#fff" }}>Security is <span style={{ color: "rgba(41, 169, 235, 1)" }}>paramount</span></p>
              <p className="about-title ease-of-use">
                We are proven safe to use, and compliant as well.
              </p>
            </Col>
            <Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>
          </Row>
          <Row style={{ marginTop: "5%" }}>
            <Col xs={0} sm={0} md={3} lg={3} xl={3}></Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <SecurityContent>
                <FaShieldAlt className="icons-style" size={30} />
                <p className="about-title icon-description">All data is AES-GCM encrypted. Simply put,<br /> it’s secure.</p>
              </SecurityContent>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <SecurityContent>
                <FaEuroSign className="icons-style" size={30} />
                <p className="about-title icon-description">Enterprise level Secure Access Service Edge powered by Cloudflare</p>
              </SecurityContent>
            </Col>
            <Col xs={0} sm={0} md={3} lg={3} xl={3}></Col>
          </Row>
          <Row style={{ marginTop: "5%" }}>
            <Col xs={0} sm={0} md={3} lg={3} xl={3}></Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <SecurityContent>
                <FaWifi className="icons-style" size={50} />
                <p className="about-title icon-description">Our team has C-level experience handling security at international companies.</p>
              </SecurityContent>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <SecurityContent>
                <FaUserSecret className="icons-style" size={30} />
                <p className="about-title icon-description">Enjoy zero tracking pixels, no Google, no IP tracking.</p>
              </SecurityContent>
            </Col>
            <Col xs={0} sm={0} md={3} lg={3} xl={3}></Col>
          </Row>
        </Container>
        <Container className="about-container">
          <Row className="managing">
            <Col className="managing-title-content" xs={12} sm={12} md={7} lg={7} xl={7}>
              <Row>
                <Col>
                  <p className="managing-text">Managing deals</p>
                  <p className="about-title how-pros-text">Get Your <span className="about-title manage-platform-text">overview</span>
                  </p>
                  <p className="about-title ease-of-use">
                    Presail helps VC firms spend 90% less time on organizing presale deals and more time on finding deals.
                  </p>
                </Col>
              </Row>
              <Row style={{ paddingTop: "3%" }}>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <SecurityContent>
                    <FaBezierCurve className="icons-style" size={30} />
                    <p className="about-title icon-description">Create, manage and distribute your deals to your investors.</p>
                  </SecurityContent>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <SecurityContent>
                    <FaLayerGroup className="icons-style" size={30} />
                    <p className="about-title icon-description">Your community will love you for choosing us.</p>
                  </SecurityContent>
                </Col>
              </Row>
              <Row style={{ paddingTop: "3%" }}>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <SecurityContent>
                    <FaCrown className="icons-style" size={30} />
                    <p className="about-title icon-description">Your community will love you for choosing us.</p>
                  </SecurityContent>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <SecurityContent>
                    <FaGalacticRepublic className="icons-style" size={30} />
                    <p className="about-title icon-description">Your community will love you for choosing us.</p>
                  </SecurityContent>
                </Col>
              </Row>
            </Col>
            <Col className="image-content" xs={12} sm={12} md={5} lg={5} xl={5}>
              <img src={MockupPresail} alt="topImage" className="top-image" />
            </Col>
          </Row>
        </Container>
        <Container className="security-content">
          <Row>
            <Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>
            <Col xs={12} sm={12} md={8} lg={8} xl={8}>
              <p className="managing-text">Managing deals</p>
              <p className="about-title security-title" style={{ color: "#fff" }}>
                Presail <span style={{ color: "rgba(41, 169, 235, 1)" }}>benefits</span>
              </p>
              <p className="about-title ease-of-use">
                Presail helps VC firms spend 90% less time on organizing presale deals and more time on finding deals.
              </p>
            </Col>
            <Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>
          </Row>
          <Row style={{ marginTop: "5%" }}>
            <Col xs={0} sm={0} md={3} lg={3} xl={3}></Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <SecurityContent>
                <FaBezierCurve className="icons-style" size={40} />
                <p className="about-title icon-description">Create, manage and distribute your deals to your investors.</p>
              </SecurityContent>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <SecurityContent>
                <FaLayerGroup className="icons-style" size={30} />
                <p className="about-title icon-description">Your community will love you for choosing us.</p>
              </SecurityContent>
            </Col>
            <Col xs={0} sm={0} md={3} lg={3} xl={3}></Col>
          </Row>
          <Row style={{ marginTop: "5%" }}>
            <Col xs={0} sm={0} md={3} lg={3} xl={3}></Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <SecurityContent>
                <FaCrown className="icons-style" size={30} />
                <p className="about-title icon-description">Stay on brand. Use your own domain.</p>
              </SecurityContent>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <SecurityContent>
                <FaGalacticRepublic className="icons-style" size={40} />
                <p className="about-title icon-description">Simplified distribution with disperse or other bulksenders.</p>
              </SecurityContent>
            </Col>
            <Col xs={0} sm={0} md={3} lg={3} xl={3}></Col>
          </Row>
          <Row style={{ marginTop: "5%" }}>
            <Col xs={0} sm={0} md={3} lg={3} xl={3}></Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <SecurityContent>
                <FaKey className="icons-style" size={30} />
                <p className="about-title icon-description">We are safe to use. The process is secure.</p>
              </SecurityContent>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <SecurityContent>
                <FaHandshake className="icons-style" size={40} />
                <p className="about-title icon-description">It's a partnership, you get continuous development.</p>
              </SecurityContent>
            </Col>
            <Col xs={0} sm={0} md={3} lg={3} xl={3}></Col>
          </Row>
        </Container>
        <Container className="security-content">
          <Row>
            <Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>
            <Col xs={12} sm={12} md={8} lg={8} xl={8}>
              <p className="managing-text">Continuous customer feedback</p>
              <p className="about-title security-title" style={{ color: "#fff" }}>
                We develop with our
              </p>
              <p className="about-title security-title" style={{ color: "#fff" }}>
                (you) <span style={{ color: "rgba(41, 169, 235, 1)" }}>partners in mind</span>
              </p>
            </Col>
            <Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>
          </Row>
          <Row style={{ marginTop: "5%" }}>
            <Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} className="developer-card">
              <DeveloperCard img={Ian} name="Ian Friend" title="CO-founder & COO Ferrum Network" description="We’re proud to say that we are partnering with presale management specialists, Presail, to further streamline and simplify the process of participating in Ferrum Advisory Service presales." />
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} className="developer-card">
              <DeveloperCard img={Team1} name="Marc" title="Co-founder of Dutch Crypto Investors" description="Presail has been a game changer for us, and is a necessity for every VC. The automation that the platform is providing is saving us countless hours of work." />
            </Col>
            <Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>

            <Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} className="developer-card">
              <DeveloperCard img={Team2} name="Ian Friend" title="CO-founder & COO Ferrum Network" description="We’re proud to say that we are partnering with presale management specialists, Presail, to further streamline and simplify the process of participating in Ferrum Advisory Service presales." />
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} className="developer-card">
              <DeveloperCard img={Marsdao} name="Marc" title="Co-founder of Dutch Crypto Investors" description="Presail has been a game changer for us, and is a necessity for every VC. The automation that the platform is providing is saving us countless hours of work." />
            </Col>
            <Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
