import React from 'react';
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles((theme)=>({
    root: {
        margin: theme.spacing(3,0,2),
        fontFamily: "Permanent Marker",
        textAlign: "center",
        fontSize: "40px",
        "textShadow" : "1px 1px darkmagenta"
    }
}));
export const Header = () => {
    const styles = useStyles();
    return(
        <Typography className={styles.root} component="h1" >
            Add a new waifu to the collection
        </Typography>
    )
}