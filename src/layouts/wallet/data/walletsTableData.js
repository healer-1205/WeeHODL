/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";
// Images
import ETHImg from "assets/images/tokens/Ethereum-Logo.svg";
// context
import { useMaterialUIController } from "context";
// mainnets
import mainnets from "../../../constants/mainnets";

export default function data() {
  const [controller, dispatch] = useMaterialUIController();
  const [walletData, setWalletData] = useState();
  const { account } = controller;
  // let tempArray = [];

  const getWalletInfo = (apiUrl) =>
    new Promise((resolve, reject) => {
      axios
        .get(apiUrl)
        .then((res) => {
          resolve(res.data.data);
        })
        .catch(err => {
          reject(err);
        });
    })

  // address: account address, type: mainnet type
  const getURL = (address, type) => `https://api.debank.com/token/balance_list?user_addr=${address}&is_all=false&chain=${type}`;

  useEffect(() => {
    let apiCallResult;
    let availableTokens = []; // tokens which users have in his wallet1
    mainnets.map(async (mainnet, index) => {
      const apiUrl = getURL(account, mainnet);
      apiCallResult = await getWalletInfo(apiUrl)
      if(apiCallResult.length > 0) {
        availableTokens = [...availableTokens, ...apiCallResult]
      }
      if(index === mainnets.length - 1) {
        let walletInfo = [];  // temp valuable to implement map function
        availableTokens.map((item) => {
          walletInfo = [...walletInfo, {
            assets: <Wallet image={item.logo_url} name={item.optimized_symbol} />,
            price: (
              <MDTypography component="p" href="#" variant="button" color="text" fontWeight="medium">
                $ {Math.round(item.price * 100) / 100}
              </MDTypography>
            ),
            balance: (
              <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
                {Math.round((item.balance * (10 ** -18)) * 10000) / 10000}
              </MDTypography>
            ),
            value: (
              <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
                $ {Math.round((Math.round(item.price * 100) / 100) * (Math.round((item.balance * (10 ** -18)) * 10000) / 10000))}
              </MDTypography>
            ),
            action: (
              <MDTypography color="text">
                <MDButton color="info">Withdraw</MDButton>
              </MDTypography>
            ),
          }]
          return true;
        })
        setWalletData(walletInfo)
      }
    });
  }, []);

  const Wallet = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="xs" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );
  return {
    columns: [
      { Header: "assets", accessor: "assets", width: "30%", align: "left" },
      { Header: "price", accessor: "price", align: "left" },
      { Header: "balance", accessor: "balance", align: "center" },
      { Header: "value", accessor: "value", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: walletData === undefined ? [] : walletData,
  };
}
