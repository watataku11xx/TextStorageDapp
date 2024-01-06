import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { SvgIcon } from '@mui/material';
import { Wallet, ethers } from 'ethers';
import { use, useEffect ,useState } from 'react';

export default function ButtonAppBar() {

  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if(!ethereum){
      console.log("Make sure you have Metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({method: "eth_accounts"});

    if(accounts.length !== 0){
      const account = accounts[0]
      console.log("Faound an authorize account", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorize account");
    }
  };

  const connectWallet = async () => {
    try {
      const {ethereum} = window;
      if(!ethereum){
        alert("Get metamask!");
        return;
      }
      
      const accounts = await ethereum.request({method: "eth_requestAccounts"});
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }

  };

  const disconnectWallet = async () => {
    try {
      const {ethereum} = window;
      
      await ethereum.request({
        method: "wallet_revokePermissions",
        params: [
          {
            "eth_accounts": {currentAccount}
          }
        ]
      });
      setCurrentAccount("");
      console.log("Current account from disconnectWallet function", currentAccount);
    } catch (error) {
      console.log(error);
    }

  };

  const walletConnectButton = () => {
    return<>
      <Button color="inherit" onClick={connectWallet}>Connect Wallet</Button>
    </>
  }

  const walletConnectedMessage = () => {
    return<>
      {"Your account address :" + currentAccount.substring(0, 4) + "..." + currentAccount.substring(38)}
      <Button color="inherit" onClick={disconnectWallet}>disconnect Wallet</Button>
    </>
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <SvgIcon component={AutoStoriesIcon} sx={{mr: 2}}></SvgIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dapp
          </Typography>
          {currentAccount == ""
            ? walletConnectButton()
            : walletConnectedMessage()
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}