import React, { useEffect, useState } from "react";
import axios from "axios";
// @mui material components
import {
  Grid,
  Card,
  Icon,
  Box,
  CircularProgress,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";
import styled from "styled-components";
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
import { useMaterialUIController, setAddModal, setLoading, setProjectData, setDeleteModal, setWithdrawModal } from "context";
import AdminWalletAddress from "constants/admin-wallet-address";

const ButtonPosition = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function Tables() {
  const { columns: pColumns, rows: pRows } = projectsTableData();

  const [controller, dispatch] = useMaterialUIController();
  const { loading, addModal, currentProject, isAdmin, deleteModal, withdrawModal, account, availableTokens } = controller;
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [athValue, setAth] = useState("");
  const [withdrawnTokenNumbers, setWithdrawnTokenNumbers] = useState(0);
  const [selectedToken, setSelectedToken] = useState("");
  const [balance, setBalance] = useState("");

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

  const handleDeleteModalClose = () => {
    setDeleteModal(dispatch, false);
  }

  const handleWithdrawModalClose = () => {
    setWithdrawModal(dispatch, false)
  }

  const handleToken = (tokenSymbol) => {
    setSelectedToken(tokenSymbol);
    availableTokens.map((item) => {
      if (item.symbol === tokenSymbol) {
        setBalance(Math.round((item.balance * (10 ** -18)) * 10000) / 10000);
      }
      return true;
    })
  }

  const deleteItem = () => {
    setLoading(dispatch, true);
    axios
      .post("/projects/deleteProjectData", currentProject)
      .then((res) => {
        getData();
        setLoading(dispatch, false);
        setDeleteModal(dispatch, false);
      })
  }

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
      <Dialog open={addModal} onClose={() => { handleClose() }} maxWidth="md">
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

      {/* delete dialog */}

      <Dialog
        open={deleteModal}
        onClose={handleDeleteModalClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Confirm Delete this project?
        </DialogTitle>
        <DialogActions>
          <MDButton onClick={handleDeleteModalClose} color="primary">Cancel</MDButton>
          <MDButton onClick={deleteItem} autoFocus color="success">OK</MDButton>
        </DialogActions>
      </Dialog>

      {/* withdraw dialog */}

      {availableTokens.length > 0 &&
        <Dialog open={withdrawModal} onClose={() => { handleWithdrawModalClose() }}>
          <DialogTitle>WITHDRAW</DialogTitle>
          <DialogContent>
            <DialogContentText>
              From:&nbsp;&nbsp;{account}
            </DialogContentText>
            <DialogContentText>
              To:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{AdminWalletAddress}
            </DialogContentText>
            <InputLabel id="token-name" style={{ paddingTop: "10px" }}>Available Token</InputLabel>
            <Select
              id="available_token"
              value={selectedToken}
              label="Available Token"
              fullWidth
              onChange={(e) => { handleToken(e.target.value) }}
            >
              <MenuItem value="BUSD">BUSD</MenuItem>
              <MenuItem value="USDT">USDT</MenuItem>
            </Select>
            <DialogContentText>
              Current Balance:&nbsp;&nbsp; {balance}
            </DialogContentText>
            {selectedToken === "" ?
              <TextField
                autoFocus
                margin="dense"
                id="token_number"
                label="Number Of Tokens"
                type="number"
                fullWidth
                variant="standard"
                value={withdrawnTokenNumbers}
                onChange={(e) => { setWithdrawnTokenNumbers(e.target.value) }}
              /> :
              <TextField
                autoFocus
                margin="dense"
                id="token_number"
                label="Number Of Tokens"
                type="number"
                fullWidth
                variant="standard"
                value={withdrawnTokenNumbers}
                onChange={(e) => { setWithdrawnTokenNumbers(e.target.value) }}
                error={withdrawnTokenNumbers >= balance}
                helperText={withdrawnTokenNumbers >= balance ? "You don't have enough token to Withdraw this amount." : " "}
              />}
          </DialogContent>
          <DialogActions>
            <MDButton color="error" onClick={() => { handleWithdrawModalClose() }}>Cancel</MDButton>
            <MDButton color="success" onClick={() => { handleWithdrawModalClose() }}>Confirm</MDButton>
          </DialogActions>
        </Dialog>}
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
