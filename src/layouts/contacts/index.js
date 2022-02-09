import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
// @mui material components
import { TextField, Grid } from "@mui/material";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Overview page components
import Header from "layouts/contacts/components/Header";

const ButtonPosition = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function Contact() {

  const [contactData, setContactData] = useState("");

  const submit = () => {
    const data = {
      contact: contactData,
    }
    axios
      .post("/emails/send", data)
      .then((res) => {
        setContactData(res.data.email);
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      })
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={1} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={2} xl={2} />
            <Grid item xs={12} md={8} xl={8} sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                autoFocus
                margin="dense"
                id="contacts"
                label="Input Content"
                type="text"
                fullWidth
                multiline
                rows={5}
                variant="standard"
                placeholder="Input Content to Admin"
                value={contactData}
                onChange={(e) => { setContactData(e.target.value) }}
              />
              <ButtonPosition>
                <MDButton color="success" sx={{ marginTop: "10px" }} onClick={() => { submit() }}>SUBMIT</MDButton>
              </ButtonPosition>
            </Grid>
            <Grid item xs={12} md={2} xl={2} />
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Contact;
