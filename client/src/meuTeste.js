const { GSNProvider } = require("@openzeppelin/gsn-provider");
const Web3 = require("web3");
const web3 = new Web3(new GSNProvider("http://localhost:8545"));

let counterJSON = undefined;
try {
	counterJSON = require('../../build/contracts/Counter.json');
} catch (e) {
	console.log(e);
}
let address      = "0xCfEB869F69431e42cdB54A4F4f105C19C080A601";
const myContract = new web3.eth.Contract(counterJSON.abi, address);

let from = "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1";

chamaTxComGSN( );

chamaTxSemGSN( );

async function chamaTxComGSN() {
	await myContract.methods.increaseCounter(500).send({ from });	
	console.log("Chamei com GSN");
}

async function chamaTxSemGSN() {
	await myContract.methods.decreaseCounter(100).send({ from , useGSN: false});	
	console.log("Chamei sem GSN");
}

