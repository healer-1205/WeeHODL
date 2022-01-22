/* eslint-disable react/prop-types */

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

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
      { Header: "project", accessor: "project", width: "30%", align: "left" },
      { Header: "amount invested", accessor: "invested_amount", align: "left" },
      { Header: "token value", accessor: "token_value", align: "center" },
      { Header: "investing detail", accessor: "investing_detail", align: "center" },
      { Header: "next distribution date", accessor: "next_date", align: "center" },
      { Header: "token claim", accessor: "claim", align: "center" },
    ],

    rows: [
      {
        project: <Project name="Test1" />,
        invested_amount: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $2,500
          </MDTypography>
        ),
        token_value: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            working
          </MDTypography>
        ),
        investing_detail: <Progress color="info" value={60} />,
        next_date: <Progress color="info" value={60} />,
        claim: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project name="Test2" />,
        invested_amount: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $5,000
          </MDTypography>
        ),
        token_value: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            done
          </MDTypography>
        ),
        investing_detail: <Progress color="success" value={100} />,
        next_date: <Progress color="info" value={60} />,
        claim: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project name="Test3" />,
        invested_amount: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $3,400
          </MDTypography>
        ),
        token_value: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            canceled
          </MDTypography>
        ),
        investing_detail: <Progress color="error" value={30} />,
        next_date: <Progress color="info" value={60} />,
        claim: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project name="Test4" />,
        invested_amount: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $14,000
          </MDTypography>
        ),
        token_value: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            working
          </MDTypography>
        ),
        investing_detail: <Progress color="info" value={80} />,
        next_date: <Progress color="info" value={60} />,
        claim: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project name="Test5" />,
        invested_amount: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $1,000
          </MDTypography>
        ),
        token_value: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            canceled
          </MDTypography>
        ),
        investing_detail: <Progress color="error" value={0} />,
        next_date: <Progress color="info" value={60} />,
        claim: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project name="Test6" />,
        invested_amount: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $2,300
          </MDTypography>
        ),
        token_value: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            done
          </MDTypography>
        ),
        investing_detail: <Progress color="success" value={100} />,
        next_date: <Progress color="info" value={60} />,
        claim: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
    ],
  };
}
