import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
// web3
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core';

// Soft UI Context Provider
import { MaterialUIControllerProvider } from "context";

function getLibrary(provider) {
  const library = new Web3Provider(provider, 'any');
  library.pollingInterval = 15000;
  return library;
}

const Web3ProviderNetwork = createWeb3ReactRoot('NETWORK');

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ProviderNetwork getLibrary={getLibrary}>
          <App />
        </Web3ProviderNetwork>
      </Web3ReactProvider>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
