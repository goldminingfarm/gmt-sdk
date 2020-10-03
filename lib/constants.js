import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0x5997928f2A7004fc8Aa9F2561d71FB9B103E1e1f',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  WETH : '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter : '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  GMT: '0xb0Dc4Af6F1E722dD201aC15216B6afB51e78ff3B',
  EGG: '0x2b7018Fca0eccfBc738828e1E8f1C7038EBBCaa8',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  USDC: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  DAI: '0x6b175474e89094c44da98b954eedeac495271d0f',
  OPM: '0xF4c17Bc4979c1dc7b4CA50115358Dec58C67fD9d',
  UNI: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
  UNIGMT: '0x767Dcd5eA03EF3c239497F5bBd5A31Ee70780E59',
  GMTETH: '0xFC1abf8567f9a58287Fc38486e113F06A79188d1',
  DAIGMT: '0x627fd59Cec61993d00Ebd8d238a2411554B71971',
  GMTOPM: '0xD8a6D634C499C0Aa082BD3fB952dc7dA9A31C82f',
  GMTEGG: '0xeabd9b4b77b5b439d4feb969ea67d2d79b0db9a7',


}


export const contractAddresses = {
  gmt: {
    1: '0xb0Dc4Af6F1E722dD201aC15216B6afB51e78ff3B',
  },
  miningRig: {
    1: '0x3a191d6cab8087114dc7723f840a8f5f525e365d',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
}

export const supportedPools = [
  {
    pid: 5,
    lpAddresses: {
      1: '0xFC1abf8567f9a58287Fc38486e113F06A79188d1',
    },
    tokenAddresses: {
      1: '0xb0Dc4Af6F1E722dD201aC15216B6afB51e78ff3B',
    },
    name: 'GMT House Party!',
    symbol: 'GMT-ETH LP',
    tokenSymbol: 'GMT',
    icon: '🍺',
    point: 'REAL Man!',
  },
  {
    pid: 9,
    lpAddresses: {
      1: '0x627fd59Cec61993d00Ebd8d238a2411554B71971',
    },
    tokenAddresses: {
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
    name: 'Dunkel Party!',
    symbol: 'DAI-GMT LP',
    tokenSymbol: 'DAI',
    icon: '🥃',
    point: 'Disabled!',
  },
    {
    pid: 11,
    lpAddresses: {
      1: '0x767Dcd5eA03EF3c239497F5bBd5A31Ee70780E59',
    },
    tokenAddresses: {
      1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    },
    name: 'Unicorn Party!',
    symbol: 'UNI-GMT LP',
    tokenSymbol: 'UNI',
    icon: '🦄',
    point: 'Disabled!',
  },
  {
    pid: 12,
    lpAddresses: {
      1: '0xeabd9b4b77b5b439d4feb969ea67d2d79b0db9a7',
    },
    tokenAddresses: {
      1: '0x2b7018Fca0eccfBc738828e1E8f1C7038EBBCaa8',
    },
    name: 'Bgmty Party!',
    symbol: 'GMT-EGG LP',
    tokenSymbol: 'EGG',
    icon: '🥚',
    point: 'Disabled!',
  },
    {
    pid: 10,
    lpAddresses: {
      1: '0xD8a6D634C499C0Aa082BD3fB952dc7dA9A31C82f',
    },
    tokenAddresses: {
      1: '0xF4c17Bc4979c1dc7b4CA50115358Dec58C67fD9d',
    },
    name: 'goldminingns Party!',
    symbol: 'GMT-OPM LP',
    tokenSymbol: 'OPM',
    icon: '🕵️',
    point: 'goldmining!',
  },
  {
  pid: 14,
  lpAddresses: {
    1: '0x8fc5ece957f122362fbf994ac97b546389f0dc00',
  },
  tokenAddresses: {
    1: '0x88FBeCfeF7146242C18D26321b628E9FCa6B76dd',
  },
  name: 'DFIX Party!',
  symbol: 'DFIX-ETH LP',
  tokenSymbol: 'DFIX',
  icon: '📊',
  point: 'Lucky!',
},
{
pid: 13,
lpAddresses: {
  1: '0x21d5f3ea579c08aab9854eb9f0fc7e489602f33c',
},
tokenAddresses: {
  1: '0x2b7018Fca0eccfBc738828e1E8f1C7038EBBCaa8',
},
name: 'EGG Vista!',
symbol: 'EGG-ETH LP',
tokenSymbol: 'EGG',
icon: '🥚',
point: 'Disabled!',
}
]
