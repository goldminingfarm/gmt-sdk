import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const GAS_LIMIT = {
  STAKING: {
    DEFAULT: 200000,
    SNX: 850000,
  },
}

export const getMiningRigAddress = (gmt) => {
  return gmt && gmt.miningRigAddress
}
export const getGmtAddress = (gmt) => {
  return gmt && gmt.gmtAddress
}
export const getWethContract = (gmt) => {
  return gmt && gmt.contracts && gmt.contracts.weth
}

export const getMiningRigContract = (gmt) => {
  return gmt && gmt.contracts && gmt.contracts.miningRig
}
export const getGmtContract = (gmt) => {
  return gmt && gmt.contracts && gmt.contracts.gmt
}

export const getFarms = (gmt) => {
  return gmt
    ? gmt.contracts.pools.map(
        ({
          pid,
          name,
          symbol,
          icon,
          point,
          tokenAddress,
          tokenSymbol,
          tokenContract,
          lpAddress,
          lpContract,
        }) => ({
          pid,
          id: symbol,
          name,
          lpToken: symbol,
          lpTokenAddress: lpAddress,
          lpContract,
          tokenAddress,
          tokenSymbol,
          tokenContract,
          earnToken: 'gmt',
          earnTokenAddress: gmt.contracts.gmt.options.address,
          icon,
          point,
        }),
      )
    : []
}

export const getPoolWeight = async (miningRigContract, pid) => {
  const { allocPoint } = await miningRigContract.methods.poolInfo(pid).call()
  const totalAllocPoint = await miningRigContract.methods
    .totalAllocPoint()
    .call()
  return new BigNumber(allocPoint).div(new BigNumber(totalAllocPoint))
}

export const getEarned = async (miningRigContract, pid, account) => {
  return miningRigContract.methods.pendingGmt(pid, account).call()
}

export const getTotalLPWethValue = async (
  miningRigContract,
  wethContract,
  lpContract,
  tokenContract,
  pid,
) => {
  // Get balance of the token address
  const tokenAmountWholeLP = await tokenContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  const tokenDecimals = await tokenContract.methods.decimals().call()
  // Get the share of lpContract that miningRigContract owns
  const balance = await lpContract.methods
    .balanceOf(miningRigContract.options.address)
    .call()
  // Convert that into the portion of total lpContract = p1
  const totalSupply = await lpContract.methods.totalSupply().call()
  // Get total weth value for the lpContract = w1
  const lpContractWeth = await wethContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  // Return p1 * w1 * 2
  const portionLp = new BigNumber(balance).div(new BigNumber(totalSupply))
  const lpWethWorth = new BigNumber(lpContractWeth)
  const totalLpWethValue = portionLp.times(lpWethWorth).times(new BigNumber(2))
  // Calculate
  const tokenAmount = new BigNumber(tokenAmountWholeLP)
    .times(portionLp)
    .div(new BigNumber(10).pow(tokenDecimals))

  const wethAmount = new BigNumber(lpContractWeth)
    .times(portionLp)
    .div(new BigNumber(10).pow(18))
  return {
    tokenAmount,
    wethAmount,
    totalWethValue: totalLpWethValue.div(new BigNumber(10).pow(18)),
    tokenPriceInWeth: wethAmount.div(tokenAmount),
    poolWeight: await getPoolWeight(miningRigContract, pid),
  }
}

export const approve = async (lpContract, miningRigContract, account) => {
  return lpContract.methods
    .approve(miningRigContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const getGmtSupply = async (gmt) => {
  return new BigNumber(await gmt.contracts.gmt.methods.totalSupply().call())
}

export const stake = async (miningRigContract, pid, amount, account) => {
  return miningRigContract.methods
    .deposit(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const unstake = async (miningRigContract, pid, amount, account) => {
  return miningRigContract.methods
    .withdraw(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}
export const harvest = async (miningRigContract, pid, account) => {
  return miningRigContract.methods
    .deposit(pid, '0')
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const getStaked = async (miningRigContract, pid, account) => {
  try {
    const { amount } = await miningRigContract.methods
      .userInfo(pid, account)
      .call()
    return new BigNumber(amount)
  } catch {
    return new BigNumber(0)
  }
}

export const redeem = async (miningRigContract, account) => {
  let now = new Date().getTime() / 1000
  if (now >= 1597172400) {
    return miningRigContract.methods
      .exit()
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
  } else {
    alert('pool not active')
  }
}
