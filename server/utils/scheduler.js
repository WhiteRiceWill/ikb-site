const axios = require('axios');
// import ENS, { getName } from '@ensdomains/ensjs'
const ENS = require('@ensdomains/ensjs');
const getName = require('@ensdomains/ensjs').getName;

const getIkbTokenHolders = async () => {
  try {
    const ikbContractAddress = '0x88ae96845e157558ef59e9ff90e766e22e480390';
    const response = await axios.get(`https://api.ethplorer.io/getTopTokenHolders/${ikbContractAddress}?apiKey=freekey&limit=100`);

    ikbHolders = response.data;

  } catch (err) { };
};

const startSchedule = () => {
  getIkbTokenHolders();
  setInterval(getIkbTokenHolders, 15000);
};

module.exports = startSchedule;

// In order to use reverse lookup ens I need to setup infura bc we don't want to set up an Ethereum node ourselves: https://infura.io/docs/ethereum/wss/faq
// Then instead of web3.eth below I can use web3.eth.ens via the web3 npm package and then need to do a reverse lookup via the functions they expose
// It would look something like this: https://docs.ens.domains/dapp-developer-guide/resolving-names
// If I can't get web3 to do a reverse there are ensjs could work, just need to figure out how to use infura as the provider when setting it up I think

// const Web3 = require("web3");

// let web3 = new Web3(
//   // Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
//   new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws/v3/YOUR-PROJECT-ID")
// );

// const instance = new web3.eth.Contract(<abi>, <address>);

// instance.getPastEvents(
// "SomeEvent",
//     {fromBlock: "latest", toBlock: "latest" },
//     (errors, events) => {
//         if (!errors) {
//     // process events
//   }
//     }
// );