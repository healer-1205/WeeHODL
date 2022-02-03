import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
// @mui material components
import { TextField, Grid, Divider, CircularProgress, Box } from "@mui/material";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfilesList from "examples/Lists/ProfilesList";

// Overview page components
import Header from "layouts/profile/components/Header";
// context
import { useMaterialUIController, setLoading } from "context";
// Data
import profilesListData from "layouts/profile/data/profilesListData";

function Overview() {

  const [emailAddress, setEmail] = useState("");
  const [telegramName, setTelegram] = useState("");
  const [twitterName, setTwitter] = useState("");

  const [controller, dispatch] = useMaterialUIController();
  const { loading } = controller;

  const ButtonPosition = styled.div`
    display: flex;
    justify-content: flex-end;
  `;

  const submit = () => {
    setLoading(dispatch, true);
    // const data = {
    //   email: emailAddress,
    //   telegram: telegramName,
    //   twitter: twitterName,
    // }
    // axios
    //   .post("/users/registerSocials", data)
    //   .then((res) => {
    //     setLoading(dispatch, false);
    //   })
    //   .catch((err) => {
    //     // eslint-disable-next-line
    //     console.log(err);
    //   })
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      {loading ?
        <Box sx={{ display: 'flex', justifyContent: 'center', position: "absolute", top: "250px", right: "45%", zIndex: "1" }}>
          <CircularProgress color="info" size={100} />
        </Box>
        :
        <>
          <Header>
            <MDBox mt={5} mb={3}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={3} xl={3} />
                <Grid item xs={12} md={6} xl={6} sx={{ display: "flex", flexDirection: "column" }}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="standard"
                    placeholder="Input Email"
                    value={emailAddress}
                    onChange={(e) => { setEmail(e.target.value) }}
                    sx={{ marginTop: "20px" }}
                  />
                  <TextField
                    margin="dense"
                    id="telegram"
                    label="Telegram"
                    type="text"
                    fullWidth
                    variant="standard"
                    placeholder="Input Telegram Name"
                    value={telegramName}
                    onChange={(e) => { setTelegram(e.target.value) }}
                    sx={{ marginTop: "20px" }}
                  />
                  <TextField
                    margin="dense"
                    id="twitter"
                    label="Twitter"
                    type="text"
                    fullWidth
                    variant="standard"
                    placeholder="Input Twitter Name"
                    value={twitterName}
                    onChange={(e) => { setTwitter(e.target.value) }}
                    sx={{ marginTop: "20px" }}
                  />
                  <ButtonPosition>
                    <MDButton color="success" sx={{marginTop: "10px"}} onClick={() => { submit() }}>SUBMIT</MDButton>
                  </ButtonPosition>
                </Grid>
                <Grid item xs={12} md={3} xl={3} />
              </Grid>
            </MDBox>
          </Header>
          <Footer />
        </>}
    </DashboardLayout>
  );
}

export default Overview;
