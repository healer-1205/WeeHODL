/* eslint-disable react/prop-types */
import axios from "axios";
// @mui icon
import Icon from "@mui/material/Icon";
// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
// context
import { useMaterialUIController, setCurrentProject, setAddModal, setProjectData, setLoading, setCurrentWithdrawnToken, setWithdrawModal } from "context";

export default function data() {
  const [controller, dispatch] = useMaterialUIController();
  const { isAdmin, projectData } = controller;

  const Project = ({ title }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {title}
      </MDTypography>
    </MDBox>
  );

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

  const editItem = (item) => {
    setCurrentProject(dispatch, item);
    setAddModal(dispatch, true);
  }

  const deleteItem = (item) => {
    setLoading(dispatch, true);
    axios
      .post("/projects/deleteProjectData", item)
      .then((res) => {
        getData();
        setLoading(dispatch, false);
      })
  }

  // handel Modal Status
  const handleModal = (item) => {
    setWithdrawModal(dispatch, true);
    setCurrentWithdrawnToken(dispatch, item);
  }

  return {
    columns: [
      { Header: "title", accessor: "title", width: "30%", align: "left" },
      { Header: "project description", accessor: "description", align: "left" },
      { Header: "ath", accessor: "ath", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: isAdmin ?
      projectData.map(item => ({
        title: <Project title={item.title} />,
        description: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {item.description}
          </MDTypography>
        ),
        ath: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {item.ath}
          </MDTypography>
        ),
        action: (
          <MDTypography color="text">
            <MDButton variant="text" color="info" onClick={() => { editItem(item) }}>
              <Icon>edit</Icon>&nbsp;Edit
            </MDButton>
            <MDButton variant="text" color="primary" onClick={() => { deleteItem(item) }}>
              <Icon>delete</Icon>&nbsp;Delete
            </MDButton>
          </MDTypography>
        ),
      })) :
      projectData.map(item => ({
        title: <Project title={item.title} />,
        description: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {item.description}
          </MDTypography>
        ),
        ath: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {item.ath}
          </MDTypography>
        ),
        action: (
          <MDTypography color="text">
            <MDButton variant="text" color="success" onClick={() => { handleModal(item) }}>
              <Icon>paid</Icon>&nbsp;Withdraw
            </MDButton>
          </MDTypography>
        ),
      })),
  };
}
