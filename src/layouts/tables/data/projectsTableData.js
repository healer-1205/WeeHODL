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
  setCurrentProject,
  setAddModal,
  setWithdrawModal,
  setDeleteModal,
  setDetailModal,
  setAvailableTokens
} from "context";

export default function data() {
  const [controller, dispatch] = useMaterialUIController();
  const { isAdmin, projectData, account } = controller;

  const Project = ({ title }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {title}
      </MDTypography>
    </MDBox>
  );

  // const apiUrl = `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=bsc`;
  const apiUrl = `https://api.debank.com/token/balance_list?user_addr=0x49f2fCCd7BAff5EFee178554B712aD69EF8840C1&is_all=false&chain=bsc`;
  const bscAssets = () => {
    axios
      .get(apiUrl)
      .then((res) => {
        const temp = res.data.data;
        const results = temp.filter(item => item.id === "0x55d398326f99059ff775485246999027b3197955" || item.id === "0xe9e7cea3dedca5984780bafc599bd69add087d56");
        setAvailableTokens(dispatch, results);
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      })
  }

  const editItem = (item) => {
    setAddModal(dispatch, true);
    setCurrentProject(dispatch, item);
  }

  const deleteItem = (item) => {
    setDeleteModal(dispatch, true);
    setCurrentProject(dispatch, item);
  }

  const showItem = (item) => {
    setDetailModal(dispatch, true);
    setCurrentProject(dispatch, item);
  }

  // handel WithdrawModal
  const handleWithdrawModal = async (item) => {
    await bscAssets();
    setWithdrawModal(dispatch, true);
  }

  return {
    columns: [
      { Header: "title", accessor: "title", width: "20%", align: "left" },
      { Header: "price", accessor: "price", align: "left" },
      { Header: "vesting", accessor: "vesting", align: "center" },
      { Header: "rank", accessor: "rank", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: isAdmin ?
      projectData.map(item => ({
        title: <Project title={item.title} />,
        price: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $ {item.price}
          </MDTypography>
        ),
        vesting: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
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
            <MDButton variant="text" color="info" onClick={() => { showItem(item) }}>
              <Icon>info</Icon>&nbsp;Detail
            </MDButton>
            <MDButton variant="text" color="info" onClick={() => { editItem(item) }}>
              <Icon>edit</Icon>&nbsp;Edit
            </MDButton>
            <MDButton variant="text" color="primary" onClick={() => { deleteItem(item) }}>
              <Icon>delete</Icon>&nbsp;Delete
            </MDButton>
          </MDTypography>
        ),
      })) :
      projectData.map(item => (item.status === "current" && {
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
            <MDButton variant="text" color="info" onClick={() => { showItem(item) }}>
              <Icon>info</Icon>&nbsp;Detail
            </MDButton>
            <MDButton variant="text" color="success" onClick={() => { handleWithdrawModal(item) }} key={item}>
              <Icon>paid</Icon>&nbsp;Withdraw
            </MDButton>
          </MDTypography>
        ),
      })),
  };
}
