
const styles=()=>({
      maincontainer:{
      padding: '5px',
      paddingTop: '50px',
      paddingBottom: '50px',
      width: '100%',
      margin: '0px',

    },
    content:{
      textAlign: 'center',
      fontSize: '100%',
      color: '#090909',
      fontWeight: '500',

    },
    papertitle:{
        textAlign: 'center',
        fontSize: '1rem',
        margin: '5px',
        height:'30px',
        width: '100%',
        padding:'5px',
        borderBottom: '2px solid #00CC00',

    },
    paper:{
      backgroundColor:'#D7D7D7',
      border: '2px solid #FF0606', 
      marginRight: '5%',
      marginLeft: '5%',
      paddingBottom: '2%',
      paddingTop:'2%',
    },
    buttonGroup:{
      display: 'flex',
      justifyContent: 'center',
    },
    button:{
      margin:'2%',
      fontSize: '70%',
      width: '30px',
      color: "#fff",
    },
    iCon:{
      display: 'flex',
      justifyContent: 'center',
      border: '1px solid #00BFFF', 
      borderRadius: '10px',
      margin:'5%',
      
    },
    link:{
      marginBottom: '30px',
      fontSize:'100%',
      color: '#fff',
      fontWeight:'500',
      transition: "all 0.2s",
      "&:hover": {
        color: '#FFFF00',
          }
      },
    
});
export default styles;


