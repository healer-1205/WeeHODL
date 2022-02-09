/* eslint-disable react/prop-types */
import axios from "axios";
// @mui icon
import Icon from "@mui/material/Icon";
// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
// context
import {
  useMaterialUIController,
} from "context";

export default function data() {
  const [controller, dispatch] = useMaterialUIController();
  const { projectData, account } = controller;

  const Project = ({ title }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {title}
      </MDTypography>
    </MDBox>
  );

  // const apiUrl = `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=bsc`;
  // const apiUrl = `https://api.debank.com/token/balance_list?user_addr=0x49f2fCCd7BAff5EFee178554B712aD69EF8840C1&is_all=false&chain=bsc`;

  return {
    columns: [
      { Header: "title", accessor: "title", width: "20%", align: "left" },
      { Header: "price", accessor: "price", align: "left" },
      { Header: "vesting", accessor: "vesting", align: "center" },
      { Header: "rank", accessor: "rank", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows:
      projectData.map(item => ({
        title: <Project title={item.title} key={item} />,
        price: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium" key={item}>
            $ {item.price}
          </MDTypography>
        ),
        vesting: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium" key={item}>
            {item.distributionType}
          </MDTypography>
        ),
        rank: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {item.rank}
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {item.status}
          </MDTypography>
        ),
        action: (
          <MDTypography color="text">
            <MDButton variant="text" color="success">
              <Icon>receipt</Icon>&nbsp;Claim
            </MDButton>
          </MDTypography>
        ),
      })),
  };
}
