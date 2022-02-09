import React, { useEffect, useState } from "react";
import axios from "axios";
// @mui material components
import {
  Grid,
  Card,
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
  DialogTitle,
} from "@mui/material";
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
import projectsTableData from "layouts/investments/data/projectsTableData";
import months from "constants/months";
import status from "constants/status";
// context
import { useMaterialUIController, setAddModal, setLoading, setProjectData, setDeleteModal, setWithdrawModal, setCurrentProject } from "context";
import AdminWalletAddress from "constants/admin-wallet-address";

function Investments() {
  const { columns: pColumns, rows: pRows } = projectsTableData();

  const [controller, dispatch] = useMaterialUIController();
  const { loading, addModal, currentProject, deleteModal, withdrawModal, account, availableTokens } = controller;
  const [withdrawnTokenNumbers, setWithdrawnTokenNumbers] = useState(0);
  const [selectedToken, setSelectedToken] = useState("");
  const [balance, setBalance] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [athValue, setAth] = useState("");
  const [statusData, setStatusData] = useState("waiting");
  const [rankData, setRankData] = useState(1);
  const [prologueData, setPrologueData] = useState("");
  const [introData, setIntroData] = useState("");
  const [telegramData, setTelegramData] = useState("");
  const [discordData, setDiscordData] = useState("");
  const [instagramData, setInstagramData] = useState("");
  const [twitterData, setTwitterData] = useState("");
  const [facebookData, setFacebookData] = useState("");
  const [youtubeData, setYoutubeData] = useState("");
  const [redditData, setRedditData] = useState("");
  const [websiteData, setWebsiteData] = useState("");
  const [whitePaperData, setWhitePaperData] = useState("");
  const [lightPaperData, setLightPaperData] = useState("");
  const [demoVideoData, setDemoVideoData] = useState("");
  const [cinematicData, setCinematicData] = useState("");
  const [vrWorldData, setVrWorldData] = useState("");
  const [distributionData, setDistributionData] = useState("");
  const [priceData, setPriceData] = useState(0);
  const [publicSalePriceData, setPublicSalePriceData] = useState("");
  const [imcData, setImcData] = useState("");
  const [totalSupplyData, setTotalSupplyData] = useState("");
  const [tgeData, setTgeData] = useState("");
  const [minData, setMinData] = useState(0);
  const [maxData, setMaxData] = useState(0);
  const [feeData, setFeeData] = useState(0);
  const blockChainType = "Binance Smart Chain";
  const distributionTypeData = "Private";

  useEffect(() => {
    if (Object.keys(currentProject).length > 0) {
      setProjectTitle(currentProject.title);
      setProjectDescription(currentProject.description);
      setAth(currentProject.ath);
      setStatusData(currentProject.status);
      setRankData(currentProject.rank);
      setPrologueData(currentProject.prologue);
      setIntroData(currentProject.intro);
      setTelegramData(currentProject.telegram);
      setDiscordData(currentProject.discord);
      setInstagramData(currentProject.instagram);
      setTwitterData(currentProject.twitter);
      setFacebookData(currentProject.facebook);
      setYoutubeData(currentProject.youtube);
      setRedditData(currentProject.reddit);
      setWebsiteData(currentProject.website);
      setWhitePaperData(currentProject.whitePaper);
      setLightPaperData(currentProject.lightPaper);
      setDemoVideoData(currentProject.demoVideo);
      setCinematicData(currentProject.cinematic);
      setVrWorldData(currentProject.vrWorld);
      setDistributionData(currentProject.distribution);
      setPriceData(currentProject.price);
      setPublicSalePriceData(currentProject.publicSalePrice);
      setImcData(currentProject.imc);
      setTotalSupplyData(currentProject.totalSupply);
      if (currentProject.tge === undefined) {
        setTgeData("");
      } else {
        setTgeData(currentProject.tge);
      }
      setMinData(currentProject.min);
      setMaxData(currentProject.max);
      setFeeData(currentProject.fee);
    }
  }, [currentProject])

  const handleClose = () => {
    setAddModal(dispatch, false);
    setProjectTitle("");
    setProjectDescription("");
    setAth("");
    setStatusData("waiting");
    setRankData(0);
    setPrologueData("");
    setIntroData("");
    setTelegramData("");
    setDiscordData("");
    setInstagramData("");
    setTwitterData("");
    setFacebookData("");
    setYoutubeData("");
    setRedditData("");
    setWebsiteData("");
    setWhitePaperData("");
    setLightPaperData("");
    setDemoVideoData("");
    setCinematicData("");
    setVrWorldData("");
    setDistributionData("");
    setPriceData(0);
    setPublicSalePriceData(0);
    setImcData(0);
    setTotalSupplyData(0);
    setTgeData("");
    setMinData(0);
    setMaxData(0);
    setFeeData(0);
    setCurrentProject(dispatch, {});
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
    setLoading(dispatch, true);
    const projectData = {
      id: currentProject._id,
      title: projectTitle,
      description: projectDescription,
      ath: athValue,
      status: statusData,
      rank: rankData,
      prologue: prologueData,
      intro: introData,
      telegram: telegramData,
      discord: discordData,
      instagram: instagramData,
      twitter: twitterData,
      facebook: facebookData,
      youtube: youtubeData,
      reddit: redditData,
      website: websiteData,
      whitePaper: whitePaperData,
      lightPaper: lightPaperData,
      demoVideo: demoVideoData,
      cinematic: cinematicData,
      vrWorld: vrWorldData,
      distributionType: distributionTypeData,
      distribution: distributionData,
      price: priceData,
      publicSalePrice: publicSalePriceData,
      imc: imcData,
      totalSupply: totalSupplyData,
      tge: tgeData,
      blockchain: blockChainType,
      min: minData,
      max: maxData,
      fee: feeData,
    }
    axios
      .post("/projects/register", projectData)
      .then(() => {
        getData();
        setCurrentProject(dispatch, {})
        handleClose();
        setLoading(dispatch, false);
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
                    Investments Table
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
      <Dialog open={addModal} onClose={() => { handleClose() }} maxWidth="lg">
        {Object.keys(currentProject).length > 0 ?
          <DialogTitle>EDIT PROJECT</DialogTitle> :
          <DialogTitle>ADD PROJECT</DialogTitle>}
        <DialogContent>
          <DialogContentText>
            PLEASE ADD PROJECT DETAIL HERE.
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
            value={projectTitle}
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
          <InputLabel sx={{ marginTop: "20px" }}>STATUS</InputLabel>
          <Select
            id="status"
            value={statusData}
            label="STATUS"
            fullWidth
            onChange={(e) => { setStatusData(e.target.value) }}
          >
            {status.map((item) => (
              <MenuItem key={item} value={item}>{item}</MenuItem>
            ))}
          </Select>
          <TextField
            margin="dense"
            id="rank"
            label="RANK"
            type="number"
            fullWidth
            variant="standard"
            placeholder="Input Rank"
            value={rankData}
            onChange={(e) => { setRankData(e.target.value) }}
          />
          <TextField
            margin="dense"
            id="prologue"
            label="PROLOGUE"
            type="text"
            multiline
            rows={3}
            fullWidth
            variant="standard"
            placeholder="Input Prologue"
            value={prologueData}
            onChange={(e) => { setPrologueData(e.target.value) }}
          />
          <TextField
            margin="dense"
            id="intro"
            label="INTRO"
            type="text"
            multiline
            rows={5}
            fullWidth
            variant="standard"
            placeholder="Input Intro"
            value={introData}
            onChange={(e) => { setIntroData(e.target.value) }}
          />
          <DialogContentText mt={4}>
            PLEASE ADD SOCIALS AND LINKS HERE.
          </DialogContentText>
          <TextField
            margin="dense"
            id="telegram"
            label="Telegram"
            type="url"
            fullWidth
            variant="standard"
            placeholder="Input Telegram Link"
            value={telegramData}
            onChange={(e) => { setTelegramData(e.target.value) }}
          />
          <TextField
            margin="dense"
            id="discord"
            label="Discord"
            type="url"
            fullWidth
            variant="standard"
            placeholder="Input Discord Link"
            value={discordData}
            onChange={(e) => { setDiscordData(e.target.value) }}
          />
          <TextField
            margin="dense"
            id="instagram"
            label="Instagram"
            type="url"
            fullWidth
            variant="standard"
            placeholder="Input Instagram Link"
            value={instagramData}
            onChange={(e) => { setInstagramData(e.target.value) }}
          />
          <TextField
            margin="dense"
            id="twitter"
            label="Twitter"
            type="url"
            fullWidth
            variant="standard"
            placeholder="Input Twitter Link"
            value={twitterData}
            onChange={(e) => { setTwitterData(e.target.value) }}
          />
          <TextField
            margin="dense"
            id="facebook"
            label="Facebook"
            type="url"
            fullWidth
            variant="standard"
            placeholder="Input Facebook Link"
            value={facebookData}
            onChange={(e) => { setFacebookData(e.target.value) }}
          />
          <TextField
            margin="dense"
            id="youtube"
            label="Youtube"
            type="url"
            fullWidth
            variant="standard"
            placeholder="Input Youtube Link"
            value={youtubeData}
            onChange={(e) => { setYoutubeData(e.target.value) }}
          />
          <TextField
            margin="dense"
            id="reddit"
            label="Reddit"
            type="url"
            fullWidth
            variant="standard"
            placeholder="Input Reddit Link"
            value={redditData}
            onChange={(e) => { setRedditData(e.target.value) }}
          />
          <TextField
            margin="dense"
            id="website"
            label="Website"
            type="url"
            fullWidth
            variant="standard"
            placeholder="Input Website Link"
            value={websiteData}
            onChange={(e) => { setWebsiteData(e.target.value) }}
          />
          <DialogContentText mt={4}>
            PLEASE ADD DOCKS HERE.
          </DialogContentText>
          <TextField
            margin="dense"
            id="whitePaper"
            label="Whitepaper"
            type="url"
            fullWidth
            variant="standard"
            placeholder="Input Whitepaper Link"
            value={whitePaperData}
            onChange={(e) => { setWhitePaperData(e.target.value) }}
          />
          <TextField
            margin="dense"
            id="lightPaper"
            label="LightPaper"
            type="url"
            fullWidth
            variant="standard"
            placeholder="Input LightPaper Link"
            value={lightPaperData}
            onChange={(e) => { setLightPaperData(e.target.value) }}
          />
          <DialogContentText mt={4}>
            PLEASE ADD MEDIA HERE.
          </DialogContentText>
          <TextField
            margin="dense"
            id="demoVideo"
            label="DemoVideo"
            type="url"
            fullWidth
            variant="standard"
            placeholder="Input DemoVideo Link"
            value={demoVideoData}
            onChange={(e) => { setDemoVideoData(e.target.value) }}
          />
          <TextField
            margin="dense"
            id="cinematic"
            label="Cinematic Teaser"
            type="url"
            fullWidth
            variant="standard"
            placeholder="Input Cinematic Teaser Link"
            value={cinematicData}
            onChange={(e) => { setCinematicData(e.target.value) }}
          />
          <TextField
            margin="dense"
            id="vrWorld"
            label="VR world showcase"
            type="url"
            fullWidth
            variant="standard"
            placeholder="Input VR world showcase Link"
            value={vrWorldData}
            onChange={(e) => { setVrWorldData(e.target.value) }}
          />
          <DialogContentText mt={4}>
            PLEASE ADD VESTING DETAILS HERE.
          </DialogContentText>
          <TextField
            margin="dense"
            id="distribution_type"
            label="Distribution Type"
            type="text"
            fullWidth
            variant="standard"
            value={distributionTypeData}
            disabled
          />
          <TextField
            margin="dense"
            id="distribution"
            label="Distribution"
            type="text"
            fullWidth
            variant="standard"
            placeholder="Input Distribution Detail"
            value={distributionData}
            onChange={(e) => { setDistributionData(e.target.value) }}
          />
          <DialogContentText mt={4}>
            PLEASE ADD TOKENOMICS AND PRICE HERE.
          </DialogContentText>
          <TextField
            margin="dense"
            id="price"
            label="Our Price  $"
            type="number"
            fullWidth
            variant="standard"
            placeholder="Input Our Price"
            value={priceData}
            onChange={(e) => { setPriceData(e.target.value) }}
          />
          <TextField
            margin="dense"
            id="sale_price"
            label="Public Sale Price  $"
            type="number"
            fullWidth
            variant="standard"
            placeholder="Input Public Sale Price"
            value={publicSalePriceData}
            onChange={(e) => { setPublicSalePriceData(e.target.value) }}
          />
          <TextField
            margin="dense"
            id="imc"
            label="IMC  $"
            type="number"
            fullWidth
            variant="standard"
            placeholder="Input IMC"
            value={imcData}
            onChange={(e) => { setImcData(e.target.value) }}
          />
          <TextField
            margin="dense"
            id="total_supply"
            label="Total Supply"
            type="number"
            fullWidth
            variant="standard"
            placeholder="Input Total Supply"
            value={totalSupplyData}
            onChange={(e) => { setTotalSupplyData(e.target.value) }}
          />
          <InputLabel sx={{ marginTop: "20px" }}>TGE</InputLabel>
          <Select
            id="tge"
            value={tgeData}
            label="TGE"
            fullWidth
            onChange={(e) => { setTgeData(e.target.value) }}
          >
            {months.map((item) => (
              <MenuItem key={item} value={item}>{item}</MenuItem>
            ))}
          </Select>
          <TextField
            margin="dense"
            id="blockchain"
            label="Blockchain"
            type="text"
            fullWidth
            variant="standard"
            disabled
            value={blockChainType}
          />
          <DialogContentText mt={4}>
            PLEASE ADD INVESTMENTS HERE.
          </DialogContentText>
          <TextField
            margin="dense"
            id="min"
            label="Min BUSD/USDT(BEP-20) Only"
            type="number"
            fullWidth
            variant="standard"
            value={minData}
            onChange={(e) => { setMinData(e.target.value) }}
          />
          <TextField
            margin="dense"
            id="max"
            label="Max BUSD/USDT(BEP-20) Only"
            type="number"
            fullWidth
            variant="standard"
            value={maxData}
            onChange={(e) => { setMaxData(e.target.value) }}
          />
          <TextField
            margin="dense"
            id="fee"
            label="Fee %"
            type="number"
            fullWidth
            variant="standard"
            value={feeData}
            onChange={(e) => { setFeeData(e.target.value) }}
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
          Delete this project?
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

export default Investments;
