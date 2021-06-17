
const styles =(theme)=>({
    root: {
        flexGrow: 1,
        maxWidth: '100%',
        maxHeight: '40px'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
    },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    topic:{
        display: 'block',
        color: '#ff0000',
        fontSize: '1em',
        textShadow: '7px 3px 8px #fff',
        zIndex: '-1'
    },
    link:{
    fontSize:'0.8rem',
    maxHeight: '20px',
    color: '#F8F8FF',
    transition: "all 0.2s",
    "&:hover": {
      color: '#FFFF00',
        }
    },
    icon:{
         width:'40px',
         height:'30px',
         inlineSize:'20px',
         marginBottom: '5px'
    }
});

export default styles;