import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
    },

    widthmedia: {
        height: 0,
        paddingTop : '56.25%'
    },
    heightmedia: {
        height: 0,
        paddingTop : '156.25%'
    },
    cardActions:{
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}));