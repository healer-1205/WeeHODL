/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
// context
import { useMaterialUIController } from "context";

export default function data() {
  const [controller, dispatch] = useMaterialUIController();
  const { projectData } = controller;

  const Project = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "name", accessor: "name", width: "20%", align: "left" },
      { Header: "project description", accessor: "description", width: "30%", align: "left" },
      { Header: "token", accessor: "token", align: "center" },
      { Header: "token value", accessor: "token_value", align: "center" },
      { Header: "token claim", accessor: "claim", align: "center" },
    ],

    rows: [
      {
        name: <Project name="SIDUS: The city of NFT Heroes" />,
        description: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            AAA-level Play to Earn RPG game
            Strong Team with a well-integrated NFT system
          </MDTypography>
        ),
        token: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            BNB
          </MDTypography>
        ),
        token_value: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            $420
          </MDTypography>
        ),
        claim: (
          <MDTypography color="text">
            <MDButton color="success">Claim</MDButton>
          </MDTypography>
        ),
      },
      {
        name: <Project name="GamesPad" />,
        description: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            Multi-chain gaming, NFT, and metaverse ecosystem
            A complete system with Launchpad, incubator, NFT aggregator, and marketplace
          </MDTypography>
        ),
        token: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            BUSD
          </MDTypography>
        ),
        token_value: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            $1
          </MDTypography>
        ),
        claim: (
          <MDTypography color="text">
            <MDButton color="success">Claim</MDButton>
          </MDTypography>
        ),
      },
      {
        name: <Project name="Katana Inu" />,
        description: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            Play to Earn Battle Royale NFT Game
            Huge Meme-potential and Big Backers
          </MDTypography>
        ),
        token: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            DOGE
          </MDTypography>
        ),
        token_value: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            $0.1276
          </MDTypography>
        ),
        claim: (
          <MDTypography color="text">
            <MDButton color="success">Claim</MDButton>
          </MDTypography>
        ),
      },
      {
        name: <Project name="Gunzilla" />,
        description: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            AAA game development company with visionary leadership
            International and highly experienced team
          </MDTypography>
        ),
        token: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            AVAX
          </MDTypography>
        ),
        token_value: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            $57.322
          </MDTypography>
        ),
        claim: (
          <MDTypography color="text">
            <MDButton color="success">Claim</MDButton>
          </MDTypography>
        ),
      },
      {
        name: <Project name="FOTA - Fight of the Ages" />,
        description: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            3D Metaverse Game of the MOBA-RPG genre
            An established game concept with a familiar marketplace and community
          </MDTypography>
        ),
        token: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            UST
          </MDTypography>
        ),
        token_value: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            $0.999
          </MDTypography>
        ),
        claim: (
          <MDTypography color="text">
            <MDButton color="success">Claim</MDButton>
          </MDTypography>
        ),
      },
      {
        name: <Project name="Metamall" />,
        description: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            A metaverse platform that aims at integrating VR, NFTs, and DeFi
            Highly skilled and professional team with multiple VR patents
          </MDTypography>
        ),
        token: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            SHIB
          </MDTypography>
        ),
        token_value: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            $0.00
          </MDTypography>
        ),
        claim: (
          <MDTypography color="text">
            <MDButton color="success">Claim</MDButton>
          </MDTypography>
        ),
      },
      {
        name: <Project name="The Fabled" />,
        description: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            A blockchain-based, action RPG that allows players to multiple worlds
            Amazing game design and graphics with good NFT integration
          </MDTypography>
        ),
        token: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            SHIB
          </MDTypography>
        ),
        token_value: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            $0.00
          </MDTypography>
        ),
        claim: (
          <MDTypography color="text">
            <MDButton color="success">Claim</MDButton>
          </MDTypography>
        ),
      },
      {
        name: <Project name="IQ Protocol" />,
        description: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            A decentralized money market for digital asset renting and on-chain subscriptions
            Huge market potential and run by an established team with heavy backers
          </MDTypography>
        ),
        token: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            SHIB
          </MDTypography>
        ),
        token_value: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            $0.00
          </MDTypography>
        ),
        claim: (
          <MDTypography color="text">
            <MDButton color="success">Claim</MDButton>
          </MDTypography>
        ),
      },
      {
        name: <Project name="League of Ancients" />,
        description: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            MOBA NFT-game featuring Free-to-Play and Play-to-Earn
            Huge e-sports potential and familiar fanbase
          </MDTypography>
        ),
        token: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            SHIB
          </MDTypography>
        ),
        token_value: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            $0.00
          </MDTypography>
        ),
        claim: (
          <MDTypography color="text">
            <MDButton color="success">Claim</MDButton>
          </MDTypography>
        ),
      },
    ],
  };
}
