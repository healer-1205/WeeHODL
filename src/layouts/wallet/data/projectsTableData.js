/* eslint-disable react/prop-types */

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";
import MDButton from "components/MDButton";

// Images
import ETHImg from "assets/images/tokens/Ethereum-Logo.svg";
import BNBImg from "assets/images/tokens/binance-coin-bnb.svg";
import BUSDImg from "assets/images/tokens/busd-logo.svg";

export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "assets", accessor: "assets", width: "30%", align: "left" },
      { Header: "price", accessor: "price", align: "left" },
      { Header: "balance", accessor: "balance", align: "center" },
      { Header: "value", accessor: "value", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        assets: <Project image={ETHImg} name="ETH" />,
        price: (
          <MDTypography component="p" href="#" variant="button" color="text" fontWeight="medium">
            $2,500
          </MDTypography>
        ),
        balance: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            0.1
          </MDTypography>
        ),
        value: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            $250
          </MDTypography>
        ),
        action: (
          <MDTypography color="text">
            <MDButton color="info">Withdraw</MDButton>
          </MDTypography>
        ),
      },
      {
        assets: <Project image={BNBImg} name="BNB" />,
        price: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $5,000
          </MDTypography>
        ),
        balance: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0.01
          </MDTypography>
        ),
        value: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            $50
          </MDTypography>
        ),
        action: (
          <MDTypography color="text">
            <MDButton color="info">Withdraw</MDButton>
          </MDTypography>
        ),
      },
      {
        assets: <Project image={BUSDImg} name="BUSD" />,
        price: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $1
          </MDTypography>
        ),
        balance: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            100
          </MDTypography>
        ),
        value: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            $100
          </MDTypography>
        ),
        action: (
          <MDTypography color="text">
            <MDButton color="info">Withdraw</MDButton>
          </MDTypography>
        ),
      },
    ],
  };
}
