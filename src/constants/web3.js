import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
// import { NetworkConnector } from './NetworkConnector'
import { LatticeConnector } from '@web3-react/lattice-connector';
import { PortisConnector } from '@web3-react/portis-connector';
import { TorusConnector } from '@web3-react/torus-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

import { ChainId } from '@sushiswap/sdk';

export const NetworkContextName = 'NETWORK';

const RPC = {
  [ChainId.MAINNET]: 'https://eth-mainnet.alchemyapi.io/v2/q1gSNoSMEzJms47Qn93f9-9Xg5clkmEC',
  [ChainId.ROPSTEN]: 'https://eth-ropsten.alchemyapi.io/v2/cidKix2Xr-snU3f6f6Zjq_rYdalKKHmW',
  [ChainId.RINKEBY]: 'https://eth-rinkeby.alchemyapi.io/v2/XVLwDlhGP6ApBXFz_lfv0aZ6VmurWhYD',
  [ChainId.GÖRLI]: 'https://eth-goerli.alchemyapi.io/v2/Dkk5d02QjttYEoGmhZnJG37rKt8Yl3Im',
  [ChainId.KOVAN]: 'https://eth-kovan.alchemyapi.io/v2/6OVAa_B_rypWWl9HqtiYK26IRxXiYqER',
  [ChainId.FANTOM]: 'https://rpcapi.fantom.network',
  [ChainId.FANTOM_TESTNET]: 'https://rpc.testnet.fantom.network',
  [ChainId.MATIC]: 'https://rpc-mainnet.maticvigil.com',
  // [ChainId.MATIC]:
  //     'https://apis.ankr.com/e22bfa5f5a124b9aa1f911b742f6adfe/c06bb163c3c2a10a4028959f4d82836d/polygon/full/main',
  [ChainId.MATIC_TESTNET]: 'https://rpc-mumbai.matic.today',
  [ChainId.XDAI]: 'https://rpc.xdaichain.com',
  [ChainId.BSC]: 'https://bsc-dataseed.binance.org/',
  [ChainId.BSC_TESTNET]: 'https://data-seed-prebsc-2-s3.binance.org:8545',
  // [ChainId.MOONBASE]: 'https://rpc.testnet.moonbeam.network',
  [ChainId.AVALANCHE]: 'https://api.avax.network/ext/bc/C/rpc',
  // [ChainId.FUJI]: 'https://api.avax-test.network/ext/bc/C/rpc',
  [ChainId.HECO]: 'https://http-mainnet.hecochain.com',
  [ChainId.HECO_TESTNET]: 'https://http-testnet.hecochain.com',
  [ChainId.HARMONY]: 'https://explorer.harmony.one',
  [ChainId.HARMONY_TESTNET]: 'https://explorer.pops.one',
  [ChainId.OKEX]: 'https://exchainrpc.okex.org',
  [ChainId.OKEX_TESTNET]: 'https://exchaintestrpc.okex.org'
}

// export const network = new NetworkConnector({
//   defaultChainId: 1,
//   urls: RPC
// })

export const SUPPORTED_CHAINIDS = [
  1, // mainnet
  3, // ropsten
  4, // rinkeby
  5, // goreli
  42, // kovan
  250, // fantom
  4002, // fantom testnet
  137, // matic
  80001, // matic testnet
  100, // xdai
  56, // binance smart chain
  97, // binance smart chain testnet
  // 1287, // moonbase
  43114, // avalanche
  // 43113, // fuji
  128, // heco
  256, // heco testnet
  1666600000, // harmony
  1666700000, // harmony testnet
  66, // okex testnet
  65, // okex testnet
];

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAINIDS,
});

export const walletconnect = new WalletConnectConnector({
  rpc: {
    1: 'https://eth-mainnet.alchemyapi.io/v2/q1gSNoSMEzJms47Qn93f9-9Xg5clkmEC',
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: 15000,
});

// mainnet only
export const lattice = new LatticeConnector({
  chainId: 1,
  url: 'https://eth-mainnet.alchemyapi.io/v2/q1gSNoSMEzJms47Qn93f9-9Xg5clkmEC',
  appName: 'SushiSwap',
});

// mainnet only
export const portis = new PortisConnector({
  dAppId: process.env.REACT_APP_PORTIS_ID ?? '',
  networks: [1],
});

// mainnet only
export const walletlink = new WalletLinkConnector({
  url: 'https://eth-mainnet.alchemyapi.io/v2/q1gSNoSMEzJms47Qn93f9-9Xg5clkmEC',
  appName: 'SushiSwap',
  appLogoUrl:
    'https://raw.githubusercontent.com/sushiswap/art/master/sushi/logo-256x256.png',
});

// mainnet only
export const torus = new TorusConnector({
  chainId: 1,
});