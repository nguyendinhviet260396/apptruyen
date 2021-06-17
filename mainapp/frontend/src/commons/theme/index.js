import { createMuiTheme} from '@material-ui/core/styles';

const theme =createMuiTheme({
    color:{
        primary:'#262f43',
        secondary:'#81c784',
        error:'#d32f2f',
        textColor:'#f3e5f5'
    },
    typography:{
        fontFamily:'Roboto',

    },
    shape:{
        borderRadius:6,
        backgroundColor: '#4caf50',
        color:'#a6d4fa'
    }
});
export default theme;