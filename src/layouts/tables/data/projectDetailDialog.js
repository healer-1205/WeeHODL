import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Link, useMediaQuery, useTheme } from "@mui/material";
// context
import { useMaterialUIController, setDetailModal, setCurrentProject } from "context";
// component
import MDButton from "components/MDButton";
// css
import "./table.css";

export default function ProjectDetailDialog() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [controller, dispatch] = useMaterialUIController();
  const { detailModal, currentProject } = controller;

  const handleClose = () => {
    setDetailModal(dispatch, false);
    setCurrentProject(dispatch, {});
  };
  
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={detailModal}
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          WeeHODL + {currentProject.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="key">
            PROLOGUE
          </DialogContentText>
          <DialogContentText>
            {currentProject.prologue}
          </DialogContentText>
          <DialogContentText className="key">
            INTRO
          </DialogContentText>
          <DialogContentText>
            {currentProject.intro}
          </DialogContentText>
          <DialogContentText className="key">
            SOCIALS AND LINKS
          </DialogContentText>
          <DialogContentText>
            Telegram:&nbsp;&nbsp;
            <Link href={currentProject.telegram} underline="none" color="#1976d2">
              {currentProject.telegram}
            </Link>
          </DialogContentText>
          <DialogContentText>
            Discord:&nbsp;&nbsp;
            <Link href={currentProject.discord} underline="none" color="#1976d2">
              {currentProject.discord}
            </Link>
          </DialogContentText>
          <DialogContentText>
            Instagram:&nbsp;&nbsp;
            <Link href={currentProject.instagram} underline="none" color="#1976d2">
              {currentProject.instagram}
            </Link>
          </DialogContentText>
          <DialogContentText>
            Twitter:&nbsp;&nbsp;
            <Link href={currentProject.twitter} underline="none" color="#1976d2">
              {currentProject.twitter}
            </Link>
          </DialogContentText>
          <DialogContentText>
            Facebook:&nbsp;&nbsp;
            <Link href={currentProject.facebook} underline="none" color="#1976d2">
              {currentProject.facebook}
            </Link>
          </DialogContentText>
          <DialogContentText>
            Youtube:&nbsp;&nbsp;
            <Link href={currentProject.youtube} underline="none" color="#1976d2">
              {currentProject.youtube}
            </Link>
          </DialogContentText>
          <DialogContentText>
            Reddit:&nbsp;&nbsp;
            <Link href={currentProject.reddit} underline="none" color="#1976d2">
              {currentProject.reddit}
            </Link>
          </DialogContentText>
          <DialogContentText>
            Website:&nbsp;&nbsp;
            <Link href={currentProject.website} underline="none" color="#1976d2">
              {currentProject.website}
            </Link>
          </DialogContentText>
          <DialogContentText className="key">
            DOCKS
          </DialogContentText>
          <DialogContentText>
            Whitepaper:&nbsp;&nbsp;
            <Link href={currentProject.whitePaper} underline="none" color="#1976d2">
              {currentProject.whitePaper}
            </Link>
          </DialogContentText>
          <DialogContentText>
            LightPaper:&nbsp;&nbsp;
            <Link href={currentProject.lightPaper} underline="none" color="#1976d2">
              {currentProject.lightPaper}
            </Link>
          </DialogContentText>
          <DialogContentText className="key">
            MEDIA
          </DialogContentText>
          <DialogContentText>
            Demo Video:&nbsp;&nbsp;
            <Link href={currentProject.demoVideo} underline="none" color="#1976d2">
              {currentProject.demoVideo}
            </Link>
          </DialogContentText>
          <DialogContentText>
            Cinematic Teaser:&nbsp;&nbsp;
            <Link href={currentProject.cinematic} underline="none" color="#1976d2">
              {currentProject.cinematic}
            </Link>
          </DialogContentText>
          <DialogContentText>
            VR world showcase:&nbsp;&nbsp;
            <Link href={currentProject.vrWorld} underline="none" color="#1976d2">
              {currentProject.vrWorld}
            </Link>
          </DialogContentText>
          <DialogContentText className="key">
            VESTING DETAILS
          </DialogContentText>
          <DialogContentText>
            We are in: &nbsp;&nbsp;{currentProject.distributionType} &nbsp;&nbsp; Sale
          </DialogContentText>
          <DialogContentText>
            Distribution: &nbsp;&nbsp;{currentProject.distribution}
          </DialogContentText>
          <DialogContentText className="key">
            Tokenomics and Price
          </DialogContentText>
          <DialogContentText>
            Our Price: &nbsp;&nbsp;$ {currentProject.price}
          </DialogContentText>
          <DialogContentText>
            Public Sale Price: &nbsp;&nbsp;$ {currentProject.publicSalePrice}
          </DialogContentText>
          <DialogContentText>
            IMC: &nbsp;&nbsp;$ {currentProject.imc}
          </DialogContentText>
          <DialogContentText>
            Total Supply: &nbsp;&nbsp;$ {currentProject.totalSupply}
          </DialogContentText>
          <DialogContentText>
            TGE: &nbsp;&nbsp;$ {currentProject.tge}
          </DialogContentText>
          <DialogContentText>
            Blockchain: &nbsp;&nbsp;{currentProject.blockchain}
          </DialogContentText>
          <DialogContentText className="key">
            INVESTMENTS
          </DialogContentText>
          <DialogContentText>
            min: &nbsp;&nbsp;{currentProject.min}&nbsp;&nbsp;BUSD/USDT(BEP-20) only
          </DialogContentText>
          <DialogContentText>
            max: &nbsp;&nbsp;{currentProject.max}
          </DialogContentText>
          <DialogContentText>
            fee: &nbsp;&nbsp;{currentProject.fee}%
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MDButton color="success" onClick={handleClose} autoFocus>
            OK
          </MDButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}