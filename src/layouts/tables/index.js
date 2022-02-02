import React, { useEffect, useState } from "react";
import axios from "axios";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Box from '@mui/material/Box';
import { CircularProgress } from '@mui/material'
import styled from "styled-components";
// for modal
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// Material React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import projectsTableData from "layouts/tables/data/projectsTableData";
// context
import { useMaterialUIController, setAddModal, setLoading, setProjectData } from "context";

const ButtonPosition = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function Tables() {
  const { columns: pColumns, rows: pRows } = projectsTableData();

  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [athValue, setAth] = useState("");
  const [controller, dispatch] = useMaterialUIController();
  const { loading, openModal, currentProject, isAdmin } = controller;

  const handleModal = () => {
    setAddModal(dispatch, true);
  };

  const handleClose = () => {
    setAddModal(dispatch, false);
    setProjectTitle("");
    setProjectDescription("");
    setAth("");
  }

  const getData = () => {
    axios
      .get("/projects/getProjectData")
      .then((res) => {
        setProjectData(dispatch, res.data);
        setLoading(dispatch, false);
      })
      .catch(err => {
        // eslint-disable-next-line
        console.log(err)
      });
  }

  const saveData = () => {
    const projectData = {
      title: projectTitle,
      description: projectDescription,
      ath: athValue
    }
    axios
      .post("/projects/register", projectData)
      .then(() => {
        getData();
        handleClose();
      })
      .catch(err => {
        // eslint-disable-next-line
        console.log(err)
      });
  }

  useEffect(() => {
    setLoading(dispatch, true);
    getData();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {isAdmin &&
        <ButtonPosition>
          <MDButton color="primary" startIcon={<Icon>add</Icon>} onClick={() => { handleModal() }}>Add Project</MDButton>
        </ButtonPosition>}
      {loading ?
        <Box sx={{ display: 'flex', justifyContent: 'center', position: "absolute", top: "250px", right: "45%", zIndex: "1" }}>
          <CircularProgress color="info" size={100} />
        </Box> :
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Projects Table
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns: pColumns, rows: pRows }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>}
        {/* add dialog */}
      <Dialog open={openModal} onClose={() => { handleClose() }} maxWidth="md">
        <DialogTitle>ADD PROJECT</DialogTitle>
        <DialogContent>
          <DialogContentText>
            PLEASE ADD PROJECT NAME AND DESCRIPTION HERE.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="project_name"
            label="Name of Project"
            type="text"
            fullWidth
            variant="standard"
            placeholder="Input Title"
            defaultValue={projectTitle}
            onChange={(e) => { setProjectTitle(e.target.value) }}
          />
          <TextField
            id="project_description"
            label="Project Description"
            multiline
            rows={4}
            fullWidth
            variant="standard"
            placeholder="Input Description"
            value={projectDescription}
            onChange={(e) => { setProjectDescription(e.target.value) }}
          />
          <TextField
            margin="dense"
            id="ath"
            label="ATH"
            type="text"
            fullWidth
            variant="standard"
            placeholder="ATH"
            value={athValue}
            onChange={(e) => { setAth(e.target.value) }}
          />
        </DialogContent>
        <DialogActions>
          <MDButton color="error" onClick={() => { handleClose() }}>Cancel</MDButton>
          <MDButton color="success" onClick={() => { saveData() }}>Save</MDButton>
        </DialogActions>
      </Dialog>
      {/* withdraw dialog */}
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
