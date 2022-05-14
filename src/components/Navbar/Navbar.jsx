import React, {useState} from 'react';
import { AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Typography } from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useStyles from "./styles";

const Navbar = (currentAccount, connectWallet) => {
    const classes = useStyles();
    const logo = "https://gateway.ipfs.io/ipfs/QmUiAys1MkmYcaSb8SUnDrFCDNYfz1HYmo7qyr7E2Ez5eQ?filename=BlackCat.jpeg"
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Waifus Collection" height="25px" className={classes.image} />
                        Waifus Collection
                    </Typography>
                    <div className={classes.grow}/>
                    {/* <div className={classes.button}> 
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> */}
                    {!currentAccount && (
                        <button className="waveButton" onClick={connectWallet}>
                            Connect Wallet
                        </button>
                        )}
                    <div className={classes.button}>
                        <IconButton component={Link} to="/form" color="inherit">
                            Add new
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>   
        </>
    )
}

export default Navbar