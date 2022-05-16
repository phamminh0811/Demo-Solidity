import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { Products, Navbar,AddWaifu } from './components/';
import {Header} from "./components/Form/Header";
import abi from './utils/Waifu.json';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const contractAddress = "0x75c8f224CE171b25B1E471B1509590C4751c9EFA";
  const [currentAccount, setCurrentAccount] = useState("");
  const [products, setProducts] = useState([]);
  const contractABI = abi.abi;
  

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  const deployContract = () => {
    try {
      const { ethereum } = window;

      if (ethereum) {

          // /*
          // * You're using contractABI here
          // */
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const waifuContract = new ethers.Contract(contractAddress, contractABI, signer);
        return waifuContract
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
        console.log(error);
    }
  }

  const contract = deployContract();

  const getAllWaifus = async({waifuContract}) => {
    
        
        const waifuNames = await waifuContract.get_all_waifu_names();
        if (waifuNames.length != 0) {
            console.log(waifuNames);
        } else {
            console.log("No waifu names found");
        }
        let waifus = [];
        let id = 0;
        waifuNames.forEach( async({waifuName}) => {
          const waifuDetail = await waifuContract.get_waifu_collection_detail(waifuName);
          const waifuUrl = await waifuContract.get_waifu_collection_url(waifuName);
          waifus.push({
            id : id,
            name : waifuName,
            detail : waifuDetail,
            url : waifuUrl}
          );
          id += 1;
        });
        setProducts(waifus);    
  }
  
  
  
  useEffect(() => {
    checkIfWalletIsConnected();
    getAllWaifus({contract})
  }, [])

  return (
    
      <Router>
        <div>
          <Navbar currentAccount={currentAccount} connectWallet={connectWallet()}/>
          <Switch>

            <Route exact path="/">
              <Products products={products} />
            </Route>

            <Route exact path="/form">
              <Header>
              </Header>
              <AddWaifu contract={contract}/> 
            </Route>

          </Switch> 
        </div>
      </Router>
    
  )
}

export default App