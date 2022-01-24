const mainnets = [
  { eth: (account) => `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=eth` },
  { op: (account) => `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=op` },
  { avax: (account) => `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=avax` },
  { heco: (account) => `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=heco` },
  { okt: (account) => `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=okt` },
  { celo: (account) => `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=celo` },
  { ftm: (account) => `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=ftm` },
  { bsc: (account) => `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=bsc` },
  { matic: (account) => `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=matic` },
  { xdai: (account) => `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=xdai` },
  { arb: (account) => `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=arb` },
  { movr: (account) => `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=movr` },
  { cro: (account) => `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=cro` },
  { aurora: (account) => `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=aurora` },
  { metis: (account) => `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=metis` },
  { boba: (account) => `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=boba` },
  { sbch: (account) => `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=sbch` },
  { btt: (account) => `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=btt` },
  { mobm: (account) => `https://api.debank.com/token/balance_list?user_addr=${account}&is_all=false&chain=mobm` },
];

export default mainnets;