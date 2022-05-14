import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';

import useStyles from './styles';

const Product = ({product}) => {
    const classes = useStyles();

    console.log(product);
    return <div>test</div>
    return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.url} title={product.name} />
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>
            </div>
            <Typography variant="body2" color="textSecondary">
                {product.detail}
            </Typography>
        </CardContent>
    </Card>
  )
}

export default Product