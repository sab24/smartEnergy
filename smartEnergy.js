//Use the sample from https://github.com/extrabacon/python-shell
var http = require('http');
var PythonShell = require('python-shell');  
http.createServer(function(req, res) {  
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  var pyshell = new PythonShell('predict.py');

  pyshell.send('');

  pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    console.log(message);
    res.write('<!doctype html>\n<html lang="en">\n' + 
    '\n<meta charset="utf-8">\n<title>Test web page on node.js</title>\n' + 
    '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' + 
    '\n\n<h1>'+'results=[103.24848921]'+'</h1>\n<a href="/greeter">greeter</a><br><a href="/buy">buy</a><br><a href="sell">sell</a><br>'
    );
    res.write(message);
    res.end();
  });
  //console.log(req);
  //console.log(req.IncomingMessage.url);
  //console.log(req["IncomingMessage"]);
  console.log(req.url);
  if (req.url == "/greeter"){
    console.log("running the greeter");
    callGreeter();
  }
  if (req.url == "/buy"){
    console.log("running the buy function");
    callBuy();
  }
  if (req.url == "/sell"){
    console.log("running the sell function");
    callSell();
  }
  //console.log(res);

  
  //res.write(results);
  //console.log(results);
  
}).listen(8879, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8879');

function callGreeter(){
  //require('./web3.min.js');
  var Web3 = require('web3');
  /*    filesystem = require("fs"),
      BigNumber = require('bignumber.js');*/
      
  var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8007"));

  var myAccount = web3.eth.accounts[0];

  var address = "0xa30d836445b8b4fd1883e65caae9d872a7cac162";


  var abiString = '[{"constant":true,"inputs":[],"name":"action","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"priceInCent","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"priceInCent","type":"uint256"}],"name":"getTotalPrice","outputs":[{"name":"totalPrice","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"amount","type":"uint256"},{"name":"priceInCent","type":"uint256"},{"name":"dealDate","type":"uint256"}],"name":"buy","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"dealDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"amount","type":"uint256"},{"name":"priceInCent","type":"uint256"},{"name":"dealDate","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"amount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"showGreeting","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"inputs":[{"name":"amount","type":"uint256"},{"name":"priceInCent","type":"uint256"},{"name":"dealDate","type":"uint256"},{"name":"action","type":"uint8"}],"payable":false,"type":"constructor"}]';


  var abi = JSON.parse(abiString);
  var Contract = web3.eth.contract(abi);
  var MyContract = Contract.at(address);


  console.log('greeting: ' + MyContract.showGreeting.call());
}

function callSell(){
  //require('./web3.min.js');
  var Web3 = require('web3');
  /*    filesystem = require("fs"),
      BigNumber = require('bignumber.js');*/
      
  var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8007"));

  var myAccount = web3.eth.accounts[0];

  var address = "0xa30d836445b8b4fd1883e65caae9d872a7cac162";


  var abiString = '[{"constant":true,"inputs":[],"name":"action","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"priceInCent","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"priceInCent","type":"uint256"}],"name":"getTotalPrice","outputs":[{"name":"totalPrice","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"amount","type":"uint256"},{"name":"priceInCent","type":"uint256"},{"name":"dealDate","type":"uint256"}],"name":"buy","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"dealDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"amount","type":"uint256"},{"name":"priceInCent","type":"uint256"},{"name":"dealDate","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"amount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"showGreeting","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"inputs":[{"name":"amount","type":"uint256"},{"name":"priceInCent","type":"uint256"},{"name":"dealDate","type":"uint256"},{"name":"action","type":"uint8"}],"payable":false,"type":"constructor"}]';


  var abi = JSON.parse(abiString);
  var Contract = web3.eth.contract(abi);
  var MyContract = Contract.at(address);

  web3.eth.defaultAccount = "0x7c178ae61423a12b2dedf5b0eece6ef21d5ae877";

  console.log('sell function output: ' + MyContract.sell.sendTransaction("0x7C178ae61423A12B2Dedf5b0eECe6EF21d5Ae877", 1, 2, 1))
}

function callBuy(){
  //require('./web3.min.js');
  var Web3 = require('web3');
  /*    filesystem = require("fs"),
      BigNumber = require('bignumber.js');*/
      
  var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8007"));

  var myAccount = web3.eth.accounts[0];

  var address = "0xa30d836445b8b4fd1883e65caae9d872a7cac162";


  var abiString = '[{"constant":true,"inputs":[],"name":"action","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"priceInCent","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"priceInCent","type":"uint256"}],"name":"getTotalPrice","outputs":[{"name":"totalPrice","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"amount","type":"uint256"},{"name":"priceInCent","type":"uint256"},{"name":"dealDate","type":"uint256"}],"name":"buy","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"dealDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"amount","type":"uint256"},{"name":"priceInCent","type":"uint256"},{"name":"dealDate","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"amount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"showGreeting","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"inputs":[{"name":"amount","type":"uint256"},{"name":"priceInCent","type":"uint256"},{"name":"dealDate","type":"uint256"},{"name":"action","type":"uint8"}],"payable":false,"type":"constructor"}]';


  var abi = JSON.parse(abiString);
  var Contract = web3.eth.contract(abi);
  var MyContract = Contract.at(address);

  web3.eth.defaultAccount = "0x7c178ae61423a12b2dedf5b0eece6ef21d5ae877";

  console.log('buy function output: ' + MyContract.buy.sendTransaction("0x7C178ae61423A12B2Dedf5b0eECe6EF21d5Ae877", 1, 2, 1))

}