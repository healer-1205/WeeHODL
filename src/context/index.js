import { createContext, useContext, useReducer } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// The Soft UI Dashboard PRO Material main context
const MaterialUI = createContext();

// Setting custom name for the context which is visible on react dev tools
MaterialUI.displayName = "MaterialUIContext";

function reducer(state, action) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.value };
    }
    case "TRANSPARENT_SIDENAV": {
      return { ...state, transparentSidenav: action.value };
    }
    case "WHITE_SIDENAV": {
      return { ...state, whiteSidenav: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    case "DIRECTION": {
      return { ...state, direction: action.value };
    }
    case "LAYOUT": {
      return { ...state, layout: action.value };
    }
    case "DARKMODE": {
      return { ...state, darkMode: action.value };
    }
    case "AUTHENTICATED": {
      return { ...state, isAuthenticated: action.value };
    }
    case "ACCOUNT": {
      return { ...state, account: action.value }
    }
    case "CHAINID": {
      return { ...state, currentChainId: action.value }
    }
    case "LOADING": {
      return { ...state, loading: action.value }
    }
    case "ADD_MODAL": {
      return { ...state, openModal: action.value }
    }
    case "WITHDRAW_MODAL": {
      return {...state, withdrawModal: action.value}
    }
    case "DELETE_MODAL": {
      return {...state, deleteModal: action.value}
    }
    case "CURRENT_WITHDRAWN_TOKEN": {
      return {...state, currentWithdrawnToken: action.value }
    }
    case "CURRENT_PROJECT": {
      return {...state, currentProject: action.value }
    }
    case "IS_ADMIN": {
      return {...state, isAdmin: action.value }
    }
    case "PROJECTS": {
      return {...state, projectData: action.value}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function MaterialUIControllerProvider({ children }) {
  const initialState = {
    miniSidenav: false,
    transparentSidenav: false,
    whiteSidenav: false,
    sidenavColor: "info",
    transparentNavbar: true,
    fixedNavbar: true,
    openConfigurator: false,
    direction: "ltr",
    layout: "dashboard",
    darkMode: false,
    isAuthenticated: false,
    account: "",
    currentChainId: "",
    loading: false,
    addModal: false,
    deleteModal: false,
    withdrawModal: false,
    currentWithdrawnToken: "",
    currentProject: {},
    isAdmin: false,
    projectData: [],
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  return <MaterialUI.Provider value={[controller, dispatch]}>{children}</MaterialUI.Provider>;
}

function useMaterialUIController() {
  const context = useContext(MaterialUI);

  if (!context) {
    throw new Error(
      "useMaterialUIController should be used inside the MaterialUIControllerProvider."
    );
  }

  return context;
}

// Typechecking props for the MaterialUIControllerProvider
MaterialUIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Context module functions
const setMiniSidenav = (dispatch, value) => dispatch({ type: "MINI_SIDENAV", value });
const setTransparentSidenav = (dispatch, value) => dispatch({ type: "TRANSPARENT_SIDENAV", value });
const setWhiteSidenav = (dispatch, value) => dispatch({ type: "WHITE_SIDENAV", value });
const setSidenavColor = (dispatch, value) => dispatch({ type: "SIDENAV_COLOR", value });
const setTransparentNavbar = (dispatch, value) => dispatch({ type: "TRANSPARENT_NAVBAR", value });
const setFixedNavbar = (dispatch, value) => dispatch({ type: "FIXED_NAVBAR", value });
const setOpenConfigurator = (dispatch, value) => dispatch({ type: "OPEN_CONFIGURATOR", value });
const setDirection = (dispatch, value) => dispatch({ type: "DIRECTION", value });
const setLayout = (dispatch, value) => dispatch({ type: "LAYOUT", value });
const setDarkMode = (dispatch, value) => dispatch({ type: "DARKMODE", value });
const setAuthenticated = (dispatch, value) => dispatch({ type: "AUTHENTICATED", value });
const setAccount = (dispatch, value) => dispatch({ type: "ACCOUNT", value });
const setChainId = (dispatch, value) => dispatch({ type: "CHAINID", value });
const setLoading = (dispatch, value) => dispatch({ type: "LOADING", value });
const setAddModal = (dispatch, value) => dispatch({ type: "ADD_MODAL", value });
const setWithdrawModal = (dispatch, value) => dispatch({ type: "WITHDRAW_MODAL", value });
const setDeleteModal = (dispatch, value) => dispatch({ type: "DELETE_MODAL", value });
const setCurrentWithdrawnToken = (dispatch, value) => dispatch({ type: "CURRENT_WITHDRAWN_TOKEN", value });
const setCurrentProject = (dispatch, value) => dispatch({ type: "CURRENT_PROJECT", value });
const setIsAdmin = (dispatch, value) => dispatch({ type: "IS_ADMIN", value });
const setProjectData = (dispatch, value) => dispatch({ type: "PROJECTS", value });

export {
  MaterialUIControllerProvider,
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
  setSidenavColor,
  setTransparentNavbar,
  setFixedNavbar,
  setOpenConfigurator,
  setDirection,
  setLayout,
  setDarkMode,
  setAuthenticated,
  setAccount,
  setChainId,
  setLoading,
  setAddModal,
  setCurrentWithdrawnToken,
  setCurrentProject,
  setIsAdmin,
  setProjectData,
  setWithdrawModal,
  setDeleteModal,
};
