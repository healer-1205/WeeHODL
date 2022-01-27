// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CircularProgress } from '@mui/material'
import Box from '@mui/material/Box';

// Material React example components
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import walletsTableData from "layouts/wallet/data/walletsTableData";

// context
import { useMaterialUIController, setOpenModal } from "context";

// for modal
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MDButton from "components/MDButton";
import AdminWalletAddress from "constants/admin-wallet-address";
import React from "react";

const Wallet = () => {
  const { columns: pColumns, rows: pRows } = walletsTableData();
  const [controller, dispatch] = useMaterialUIController();
  const { loading, openModal, account, currentWithdrawnToken } = controller;

  const handleClose = () => {
    setOpenModal(dispatch, false);
  }

  return (
    <DashboardLayout style={{ position: "relative" }}>
      <DashboardNavbar />
      {loading ?
        <Box sx={{ display: 'flex', justifyContent: 'center', position: "absolute", top: "250px", right: "45%", zIndex: "1" }}>
          <CircularProgress color="info" size={100} />
        </Box> :
        <>
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
                    <MDTypography variant="h6" color="white" style={{ display: "flex" }}>
                      Wallet Assets Information
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
          </MDBox>
          <Footer />
        </>
      }
      <Dialog open={openModal} onClose={() => {handleClose()}}>
        <DialogTitle>WITHDRAW</DialogTitle>
        <DialogContent>
          <DialogContentText>
            From:&nbsp;&nbsp;{account}
          </DialogContentText>
          <DialogContentText>
            To:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{AdminWalletAddress}
          </DialogContentText>
          <DialogContentText>
            Token Name:&nbsp;&nbsp;{currentWithdrawnToken.name}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="token_number"
            label="Number Of Tokens"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <MDButton color="error" onClick={() => {handleClose()}}>Cancel</MDButton>
          <MDButton color="success" onClick={() => {handleClose()}}>Confirm</MDButton>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
}

export default Wallet;
